const fs = require('fs');
const path = require('path');

module.exports = function saveHooks(hooks, hooksFilePath) {
    try {
        const configDir = path.dirname(hooksFilePath);
        if(!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir);
        }
        fs.writeFileSync(hooksFilePath, JSON.stringify(hooks, null, 2), 'utf8');
    } catch(err) {
        console.error('Error writing hooks.json:', err);
        process.exit(1);
    }
};
