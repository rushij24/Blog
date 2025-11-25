const { marked } = require('marked');
const markdown = '# Hello World\n\nThis is a **test**.';
const html = marked.parse(markdown);
console.log('Output:', html);
if (html instanceof Promise) {
    html.then(h => console.log('Resolved:', h));
}
