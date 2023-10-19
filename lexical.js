// lexical analyzer
const fs = require('fs');

function splitTokens(code) {
    const tokens = code.match(/[\w]+|[,;{}().<>]/g);

    for (const token of tokens) {
        if (['+', '-', '*', '/', '<', '>', '='].includes(token)) {
            console.log(`${token} is an Operator`);
        } else if ([',', ';', '[', ']', '{', '}', '(', ')'].includes(token)) {
            console.log(`${token} is a Delimiter`);
        } else if (['int', 'float', 'char', 'double', 'if', 'else', 'for', 'while'].includes(token)) {
            console.log(`${token} is a Keyword`);
        } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
            console.log(`${token} is an Identifier`);
        } else {
            console.log(`${token} is a Constant`);
        }
    }
}

function processFile(filePath) {
    try {
        const code = fs.readFileSync(filePath, 'utf8');
        splitTokens(code);
    } catch (error) {
        console.log('Error reading the file:', error);
    }
}

function Tokens(filePath) {
    processFile(filePath);
}

const filePath = '/filename';
Tokens(filePath);