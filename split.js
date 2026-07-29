const fs = require('fs');
const content = fs.readFileSync('src/components/LegacyConverted.tsx', 'utf8');

function extractSection(id) {
    const startRegex = new RegExp(`<section id="${id}"[\\s\\S]*?>`);
    const match = content.match(startRegex);
    if (!match) return null;
    
    let startIndex = match.index;
    let depth = 0;
    let endIndex = startIndex;
    
    for (let i = startIndex; i < content.length; i++) {
        if (content.substring(i, i + 8) === '<section') depth++;
        if (content.substring(i, i + 10) === '</section>') {
            depth--;
            if (depth === 0) {
                endIndex = i + 10;
                break;
            }
        }
    }
    return content.substring(startIndex, endIndex);
}

const homeSection = extractSection('home');
const projectsSection = extractSection('projects');
const certificatesSection = extractSection('certificates');
const aboutSection = extractSection('about');
const contactSection = extractSection('contact');
const seoSummarySection = extractSection('seo-summary');

function mergeIntoPage(path, jsxContent) {
    if (!fs.existsSync(path)) {
        // If it doesn't exist, create it (e.g. certificates might not have been created by SEO agent)
        const dir = path.substring(0, path.lastIndexOf('/'));
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(path, `
import React from 'react';
export default function Page() {
  return (
    <div className="pt-24">
      ${jsxContent}
    </div>
  );
}
        `.trim());
        return;
    }
    
    let pageContent = fs.readFileSync(path, 'utf8');
    // Replace everything inside the main return statement of the default export
    // This is tricky with regex, let's just do a simple replacement if it has a placeholder <div>
    
    // SEO agent usually creates a simple return (<div>Placeholder</div>)
    pageContent = pageContent.replace(/return\s*\(\s*<div[^>]*>[\s\S]*?<\/div>\s*\);/g, 
        `return (
    <div className="pt-24 min-h-screen">
      ${jsxContent.replace(/\$/g, '$$$$')}
    </div>
  );`);
        
    fs.writeFileSync(path, pageContent);
}

mergeIntoPage('src/app/page.tsx', `${homeSection}`);
mergeIntoPage('src/app/projects/page.tsx', `${projectsSection}`);
mergeIntoPage('src/app/certificates/page.tsx', `${certificatesSection}`);
mergeIntoPage('src/app/about/page.tsx', `${aboutSection}\n${seoSummarySection}`);
mergeIntoPage('src/app/contact/page.tsx', `${contactSection}`);

console.log("Pages extracted and merged successfully.");
