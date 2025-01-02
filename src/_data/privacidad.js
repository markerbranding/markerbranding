const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = () => {
    const markdownFilePath = path.join(__dirname, "privacidad.md");
    const rawMarkdown = fs.readFileSync(markdownFilePath, "utf-8");
    
    // Convierte el contenido del Markdown en HTML
    const htmlContent = md.render(rawMarkdown);

    return {
        content: htmlContent, // HTML renderizado
    };
};