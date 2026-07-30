import knowledgeConfig from "./knowledge.json";
import { portfolioData } from "./portfolioData";
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
function formatProjects(projectsToFormat: any[]): string {
  if (projectsToFormat.length === 0) return "I couldn't find any projects matching that criteria.";
  let result = "Here are the relevant projects:\n\n";
  projectsToFormat.forEach(p => {
    // Some projects have a `liveUrl`, some have `githubUrl`, or we can just point to the portfolio slug
    result += `• **${p.title}** (${p.category})\n`;
    result += `  Technologies: ${p.technologies.join(", ")}\n`;
    result += `  ${p.shortDescription || p.description}\n`;
    result += `  [View Project](/projects/${p.slug})\n\n`;
  });
  return result;
}

export function processChatInput(input: string): string {
  const lowerInput = input.toLowerCase();
  const inputWords = tokenize(lowerInput);

  // 1. Check for Project Tech Search (e.g. "Show SQL projects")
  let searchedTech = "";
  for (const tech of techKeywords) {
    // Exact word boundary match for tech keywords
    if (new RegExp(`\\b${tech}\\b`).test(lowerInput)) {
      searchedTech = tech;
      break;
    }
  }

  if (searchedTech) {
    const matchedProjects = portfolioProjects.filter((p: any) => {
      const textToSearch = [
        p.title, p.category, p.fullDescription, ...p.technologies, p.tag
      ].join(" ").toLowerCase();
      return textToSearch.includes(searchedTech);
    });

    if (matchedProjects.length > 0) {
      return `Here are Preet's projects related to **${searchedTech.toUpperCase()}**:\n\n` + formatProjects(matchedProjects);
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
    return fallbackMessage;
  }

  // 3. Return Knowledge Base Data
  switch (bestIntent) {
    case "greetings":
      return portfolioData.about;
    case "about":
      return portfolioData.about;
    case "skills":
      return `Preet's technical skills include: ${portfolioData.skills.join(", ")}.`;
    case "experience":
      return portfolioData.experience;
    case "education":
      return portfolioData.education;
    case "personal":
      return `I am ${portfolioData.personal.age} years old. My date of birth is ${portfolioData.personal.dob}.`;
    case "resume":
      return portfolioData.resume;
    case "contact":
      const requestedDetails = [];
      if (lowerInput.includes("phone") || lowerInput.includes("number") || lowerInput.includes("whatsapp") || lowerInput.includes("call")) {
        requestedDetails.push(`**Phone:** ${portfolioData.socials.phone}`);
      }
      if (lowerInput.includes("email")) {
        requestedDetails.push(`**Email:** ${portfolioData.socials.email}`);
      }
      if (lowerInput.includes("instagram") || lowerInput.includes("insta") || lowerInput.includes("id")) {
        requestedDetails.push(`**Instagram:** ${portfolioData.socials.instagram}`);
      }
      if (lowerInput.includes("pinterest")) {
        requestedDetails.push(`**Pinterest:** ${portfolioData.socials.pinterest}`);
      }
      if (lowerInput.includes("linkedin")) {
        requestedDetails.push(`**LinkedIn:** ${portfolioData.socials.linkedin}`);
      }
      if (lowerInput.includes("github")) {
        requestedDetails.push(`**GitHub:** ${portfolioData.socials.github}`);
      }

      // If specific details were requested (and not a generic contact query), return only those
      if (requestedDetails.length > 0 && !lowerInput.includes("all") && !lowerInput.includes("contact") && !lowerInput.includes("details") && !lowerInput.includes("reach") && !lowerInput.includes("connect")) {
        return requestedDetails.join("\n");
      }
      return `${portfolioData.contact}\n\n**Phone:** ${portfolioData.socials.phone}\n**Email:** ${portfolioData.socials.email}\n**LinkedIn:** ${portfolioData.socials.linkedin}\n**GitHub:** ${portfolioData.socials.github}\n**Instagram:** ${portfolioData.socials.instagram}\n**Pinterest:** ${portfolioData.socials.pinterest}`;
    case "certification":
      // Count logic
      const isCounting = countingPhrases.some(phrase => lowerInput.includes(phrase));
      const certCount = portfolioData.certifications.length;
      
      if (isCounting) {
        return `I currently have ${certCount} certifications in my portfolio.`;
      }
      
      // Display list
      let certList = "Here are Preet's certifications:\n\n";
      portfolioData.certifications.forEach(cert => {
        certList += `• **${cert.title}** (${cert.issuer})\n`;
      });
      return certList;
    case "projects":
      return formatProjects(portfolioProjects);
    default:
      return fallbackMessage;
  }
}
