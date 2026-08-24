import knowledgeConfig from "./knowledge.json";
import { portfolioData, portfolioDataHinglish } from "./portfolioData";
import { projects as portfolioProjects } from "./projects";

const { intents, config } = knowledgeConfig;
const { techKeywords, fallbackMessage, countingPhrases } = config;

// Helper: Calculate Jaccard similarity between two arrays of words
function calculateSimilarity(words1: string[], words2: string[]): number {
  const set1 = new Set(words1);
  const set2 = new Set(words2);
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return intersection.size / (union.size || 1);
}

// Helper: Extract clean words from input
function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 0);
}

// Format projects into a readable string
function formatProjects(projectsToFormat: any[], language: string = "english"): string {
  if (projectsToFormat.length === 0) return language === 'hinglish' ? "Mujhe is criteria se milte julte koi projects nahi mile." : "I couldn't find any projects matching that criteria.";
  let result = language === 'hinglish' ? "Ye rahe kuch relevant projects:\n\n" : "Here are the relevant projects:\n\n";
  projectsToFormat.forEach(p => {
    // Some projects have a `liveUrl`, some have `githubUrl`, or we can just point to the portfolio slug
    result += `• **${p.title}** (${p.category})\n`;
    result += `  Technologies: ${p.technologies.join(", ")}\n`;
    result += `  ${p.shortDescription || p.description}\n`;
    result += `  [${language === 'hinglish' ? 'Project Dekhein' : 'View Project'}](/projects/${p.slug})\n\n`;
  });
  return result;
}

export function processChatInput(input: string, language: string = "english"): string {
  const lowerInput = input.toLowerCase();
  const inputWords = tokenize(lowerInput);
  const data = language === 'hinglish' ? portfolioDataHinglish : portfolioData;

  // 1. Check for Project Tech Search (e.g. "Show SQL projects")
  let searchedTech = "";
  for (const tech of techKeywords) {
    // Exact word boundary match for tech keywords
    if (new RegExp(`\\b${tech}\\b`).test(lowerInput)) {
      searchedTech = tech;
      break;
    }
  }

  const isCounting = countingPhrases.some(phrase => lowerInput.includes(phrase));

  if (searchedTech) {
    const matchedProjects = portfolioProjects.filter((p: any) => {
      const textToSearch = [
        p.title, p.category, p.fullDescription, ...p.technologies, p.tag
      ].join(" ").toLowerCase();
      return textToSearch.includes(searchedTech);
    });

    if (matchedProjects.length > 0) {
      if (isCounting) {
        return language === 'hinglish' 
          ? `Preet ke paas **${searchedTech.toUpperCase()}** ke ${matchedProjects.length} projects hain.`
          : `Preet has ${matchedProjects.length} projects related to **${searchedTech.toUpperCase()}**.`;
      }
      return (language === 'hinglish' 
        ? `Ye rahe Preet ke **${searchedTech.toUpperCase()}** se related projects:\n\n` 
        : `Here are Preet's projects related to **${searchedTech.toUpperCase()}**:\n\n`) + formatProjects(matchedProjects, language);
    }
  }

  // 2. Score Intents (Keyword & Synonym Matching)
  let bestIntent = "";
  let highestScore = 0;

  for (const [intentName, keywords] of Object.entries(intents)) {
    let score = 0;
    
    // Exact word match
    for (const word of inputWords) {
      if ((keywords as string[]).includes(word)) score += 1;
    }

    // Partial string match (e.g. "who are you" inside the sentence)
    for (const keyword of (keywords as string[])) {
      if (keyword.includes(" ") && lowerInput.includes(keyword)) {
        score += 2; // multi-word phrases carry more weight
      }
    }

    // Fuzzy Similarity
    const similarity = calculateSimilarity(inputWords, keywords as string[]);
    score += similarity * 5; // give weight to similarity

    if (score > 0) {
      // Base score is already incremented by match logic.
      // Now apply explicit priority weights based on intent rules
      if (intentName === "certification") {
        score += 5; // Certification intent has high priority
      } else if (intentName === "projects") {
        score += 2; // Projects has a moderate priority
      } else {
        const intentKeys = Object.keys(intents);
        const priorityBoost = (intentKeys.length - intentKeys.indexOf(intentName)) * 0.1;
        score += priorityBoost;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intentName;
    }
  }

  // Threshold for intent match
  if (highestScore < 0.5) {
    return language === 'hinglish' ? "Maaf karna, main samajh nahi paya. Kya aap projects, skills, ya resume ke bare mein poochna chahte hain?" : fallbackMessage;
  }

  // 3. Return Knowledge Base Data
  switch (bestIntent) {
    case "greetings":
    case "about":
      return data.about;
    case "skills":
      return language === 'hinglish' 
        ? `Preet ke technical skills hain: ${portfolioData.skills.join(", ")}.`
        : `Preet's technical skills include: ${portfolioData.skills.join(", ")}.`;
    case "experience":
      return data.experience;
    case "education":
      return data.education;
    case "personal":
      return language === 'hinglish'
        ? `Preet 18 saal ka hai aur oski date of birth 7 August 2008 hai.`
        : `Preet is 18 years old. His date of birth is August 7, 2008.`;
    case "favorites":
      if (lowerInput.includes("color") || lowerInput.includes("colour") || lowerInput.includes("rang")) {
         return language === 'hinglish' ? "Preet ka favorite color orange hai." : "Preet's favorite color is orange.";
      }
      if (lowerInput.includes("pet") || lowerInput.includes("animal") || lowerInput.includes("janwar")) {
         return language === 'hinglish' ? "Preet ka favorite pet cat (billi) hai." : "Preet's favorite pet is a cat.";
      }
      return language === 'hinglish' ? "Preet ka favorite color orange hai aur favorite pet cat hai." : "Preet's favorite color is orange and favorite pet is a cat.";
    case "resume":
      return data.resume;
    case "contact":
      const requestedDetails = [];
      if (lowerInput.includes("phone") || lowerInput.includes("number") || lowerInput.includes("whatsapp") || lowerInput.includes("call")) {
        requestedDetails.push(`**Phone:** ${portfolioData.socials.phone}`);
      }
      if (lowerInput.includes("email")) {
        requestedDetails.push(`**Email:** ${portfolioData.socials.email}`);
      }
      if (lowerInput.includes("instagram") || lowerInput.includes("insta") || lowerInput.includes("id")) {
        requestedDetails.push(`**Instagram:**\nURL: [${portfolioData.socials.instagram}](${portfolioData.socials.instagram})\nProfile Name: @preet_passii`);
      }
      if (lowerInput.includes("pinterest")) {
        requestedDetails.push(`**Pinterest:**\nURL: [${portfolioData.socials.pinterest}](${portfolioData.socials.pinterest})\nProfile Name: preet_passii`);
      }
      if (lowerInput.includes("linkedin") || lowerInput.includes("linkdin") || lowerInput.includes("linked in")) {
        requestedDetails.push(`**LinkedIn:**\nURL: [${portfolioData.socials.linkedin}](${portfolioData.socials.linkedin})\nProfile Name: preet-passi-567b25426`);
      }
      if (lowerInput.includes("github") || lowerInput.includes("git hub") || lowerInput.includes("git")) {
        requestedDetails.push(`**GitHub:**\nURL: [${portfolioData.socials.github}](${portfolioData.socials.github})\nProfile Name: preetpassi570-prog`);
      }
      if (lowerInput.includes("address") || lowerInput.includes("location") || lowerInput.includes("city") || lowerInput.includes("where") || lowerInput.includes("rehta") || lowerInput.includes("rehte") || lowerInput.includes("pata") || lowerInput.includes("ghar") || lowerInput.includes("kaha") || lowerInput.includes("kahan")) {
        return language === 'hinglish' ? `Preet ka address ${portfolioData.socials.address} hai.` : `Preet's address is ${portfolioData.socials.address}.`;
      }

      if (requestedDetails.length > 0 && !lowerInput.includes("all") && !lowerInput.includes("contact") && !lowerInput.includes("details") && !lowerInput.includes("reach") && !lowerInput.includes("connect")) {
        return requestedDetails.join("\n\n");
      }
      return `${data.contact}\n\n**Address:** ${portfolioData.socials.address}\n**Phone:** ${portfolioData.socials.phone}\n**Email:** ${portfolioData.socials.email}\n\n**LinkedIn:**\nURL: [${portfolioData.socials.linkedin}](${portfolioData.socials.linkedin})\nProfile Name: preet-passi-567b25426\n\n**GitHub:**\nURL: [${portfolioData.socials.github}](${portfolioData.socials.github})\nProfile Name: preetpassi570-prog\n\n**Instagram:**\nURL: [${portfolioData.socials.instagram}](${portfolioData.socials.instagram})\nProfile Name: @preet_passii\n\n**Pinterest:**\nURL: [${portfolioData.socials.pinterest}](${portfolioData.socials.pinterest})\nProfile Name: preet_passii`;
    case "certification": {
      const certCount = portfolioData.certifications.length;
      
      if (isCounting) {
        return language === 'hinglish' 
          ? `Mere portfolio mein abhi ${certCount} certifications hain.`
          : `I currently have ${certCount} certifications in my portfolio.`;
      }
      
      let certList = language === 'hinglish' 
        ? "Ye rahi Preet ki certifications:\n\n"
        : "Here are Preet's certifications:\n\n";
      portfolioData.certifications.forEach(cert => {
        certList += `• **${cert.title}** (${cert.issuer})\n`;
      });
      return certList;
    }
    case "projects": {
      if (isCounting) {
        let excelCount = 0;
        let sqlCount = 0;
        let pythonCount = 0;
        let powerbiCount = 0;
        
        portfolioProjects.forEach(p => {
          const category = p.category.toLowerCase();
          if (category === "excel") excelCount++;
          if (category === "sql") sqlCount++;
          if (category === "python") pythonCount++;
          if (category === "power bi" || category === "powerbi") powerbiCount++;
        });

        return language === 'hinglish'
          ? `Preet ke paas total ${portfolioProjects.length} projects hain. Jinme se Excel = ${excelCount}, SQL = ${sqlCount}, Python = ${pythonCount}, aur Power BI = ${powerbiCount} hain.`
          : `Preet has a total of ${portfolioProjects.length} projects. Including Excel = ${excelCount}, SQL = ${sqlCount}, Python = ${pythonCount}, and Power BI = ${powerbiCount}.`;
      }
      return formatProjects(portfolioProjects, language);
    }
    default:
      return language === 'hinglish' ? "Maaf karna, main samajh nahi paya." : fallbackMessage;
  }
}
