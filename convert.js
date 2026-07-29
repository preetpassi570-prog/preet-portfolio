const fs = require('fs');
let html = fs.readFileSync('legacy-vanilla/index.html', 'utf8');

// Basic JSX replacements
html = html.replace(/class=/g, 'className=')
           .replace(/for=/g, 'htmlFor=')
           .replace(/<!--.*?-->/gs, '');

// Self closing tags
html = html.replace(/<img(.*?)>/g, '<img$1 />')
           .replace(/<br>/g, '<br />')
           .replace(/<hr>/g, '<hr />')
           .replace(/<input(.*?)>/g, '<input$1 />')
           .replace(/<link(.*?)>/g, '<link$1 />')
           .replace(/<meta(.*?)>/g, '<meta$1 />');

// Convert inline styles to objects
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    const obj = {};
    p1.split(';').forEach(s => {
        const parts = s.split(':');
        if (parts.length >= 2) {
            const k = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            const v = parts.slice(1).join(':').trim();
            if (k && v) {
                obj[k] = v;
            }
        }
    });
    return `style={${JSON.stringify(obj)}}`;
});

// Remove script tags and style tags for now just to make it valid JSX
html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

fs.writeFileSync('src/components/LegacyConverted.tsx', `export default function LegacyConverted() {\n  return (\n    <>\n${html}\n    </>\n  );\n}`);
console.log("Converted successfully.");
