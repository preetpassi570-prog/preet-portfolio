import knowledgeData from "./knowledge.json";

// Intent definitions with keywords and synonyms
// Priority order: Contact, Resume, Certification, Projects, Skills, Experience, Education, About, Portfolio (last), Greeting
const intents = {
  contact: ["contact", "email", "reach", "linkedin", "github", "connect", "message"],
  resume: ["resume", "cv", "download", "document", "hire"],
  certification: ["certificate", "certificates", "certification", "certifications", "certified", "credential", "credentials", "badges", "licenses"],
  projects: ["projects", "work", "show", "built", "dashboard", "dashboards"],
  skills: ["skills", "technologies", "tools", "stack", "know", "technical", "tech"],
  experience: ["experience", "work", "job", "career", "history"],
  education: ["education", "degree", "college", "university", "study", "studied"],
  about: ["about", "introduce", "yourself", "who is preet", "background", "bio", "who are you"],
  portfolio: ["portfolio"],
  greetings: ["hello", "hi", "hey", "what are you", "intro", "greet"]
};

// Common tech keywords to search within projects specifically
const techKeywords = [
  "sql", "python", "power bi", "excel", "pandas", "numpy", 
  "dashboard", "machine learning", "data cleaning", "visualization", "analysis"
];

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
function formatProjects(projects: any[]): string {
  if (projects.length === 0) return "I couldn't find any projects matching that criteria.";
  let result = "Here are the relevant projects:\n\n";
  projects.forEach(p => {
    result += `• **${p.title}** (${p.category})\n`;
    result += `  Technologies: ${p.technologies.join(", ")}\n`;
    result += `  ${p.description}\n`;
    result += `  [View Project](${p.link})\n\n`;
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

  // Only run project tech search if the user actually asked about projects or just typed a tech name
  // To avoid conflicting with skills intent, we only trigger tech search if there's no strong intent match yet,
  // or if we decide tech search takes precedence. Based on requirements, "User: SQL -> Show SQL projects"
  // implies tech search takes high precedence if a tech word is detected.
  if (searchedTech) {
    const matchedProjects = knowledgeData.projects.filter((p: any) => {
      const textToSearch = [
        p.title, p.category, p.description, ...p.technologies
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
      if (keywords.includes(word)) score += 1;
    }

    // Partial string match (e.g. "who are you" inside the sentence)
    for (const keyword of keywords) {
      if (keyword.includes(" ") && lowerInput.includes(keyword)) {
        score += 2; // multi-word phrases carry more weight
      }
    }

    // Fuzzy Similarity
    const similarity = calculateSimilarity(inputWords, keywords);
    score += similarity * 5; // give weight to similarity

    // Strict override for portfolio keyword inside a larger sentence
    // If we already have a high score, portfolio shouldn't override it just because it's mentioned.
    
    // Prioritization trick: If score > 0, we add a priority boost based on object key order
    // Object.entries preserves insertion order, so we can use index as a tie-breaker/priority modifier
    if (score > 0) {
      const intentKeys = Object.keys(intents);
      const priorityBoost = (intentKeys.length - intentKeys.indexOf(intentName)) * 0.1;
      score += priorityBoost;
    }

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intentName;
    }
  }

  // Threshold for intent match
  if (highestScore < 0.5) {
    return "Sorry, I'm designed only to answer questions related to Preet Passi's portfolio, projects, skills, experience, resume, certifications, education, and contact information.";
  }

  // 3. Return Knowledge Base Data
  switch (bestIntent) {
    case "greetings":
      return knowledgeData.about;
    case "about":
      return knowledgeData.about;
    case "skills":
      return `Preet's technical skills include: ${knowledgeData.skills.join(", ")}.`;
    case "experience":
      return knowledgeData.experience;
    case "education":
      return knowledgeData.education;
    case "resume":
      return knowledgeData.resume;
    case "contact":
      return `${knowledgeData.contact}\nLinkedIn: ${knowledgeData.socials.linkedin}\nGitHub: ${knowledgeData.socials.github}`;
    case "certification":
      // Count logic
      const isCounting = ["how many", "total", "number of", "count"].some(phrase => lowerInput.includes(phrase));
      const certCount = knowledgeData.certifications.length;
      
      if (isCounting) {
        return `I currently have ${certCount} certifications in my portfolio.`;
      }
      
      // Display list
      let certList = "Here are Preet's certifications:\n\n";
      knowledgeData.certifications.forEach(cert => {
        certList += `• **${cert.title}** (${cert.issuer})\n`;
      });
      return certList;
    case "projects":
    case "portfolio":
      return formatProjects(knowledgeData.projects);
    default:
      return "Sorry, I'm designed only to answer questions related to Preet Passi's portfolio, projects, skills, experience, resume, certifications, education, and contact information.";
  }
}
