import knowledgeData from "./knowledge.json";

// Intent definitions with keywords and synonyms
const intents = {
  greetings: ["hello", "hi", "hey", "who are you", "what are you", "intro", "greet"],
  about: ["about", "introduce", "yourself", "who is preet", "background", "bio"],
  skills: ["skills", "technologies", "tools", "stack", "know", "technical", "tech"],
  experience: ["experience", "work", "job", "career", "history"],
  education: ["education", "degree", "college", "university", "study", "studied"],
  resume: ["resume", "cv", "download", "document", "hire"],
  contact: ["contact", "email", "reach", "linkedin", "github", "connect", "message"],
  projects: ["projects", "portfolio", "work", "show", "built", "dashboard", "dashboards"]
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
    if (lowerInput.includes(tech)) {
      searchedTech = tech;
      break;
    }
  }

  if (searchedTech) {
    // Search projects across title, category, description, technologies
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

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intentName;
    }
  }

  // Threshold for intent match
  if (highestScore < 0.5) {
    return "Sorry, I'm designed only to answer questions related to Preet Passi's portfolio, projects, skills, experience, resume, and contact information.";
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
    case "projects":
      return formatProjects(knowledgeData.projects);
    default:
      return "Sorry, I'm designed only to answer questions related to Preet Passi's portfolio, projects, skills, experience, resume, and contact information.";
  }
}
