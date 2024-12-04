const fs = require('fs');

module.exports = function loadHooks(hooksFilePath) {
    try {
        if(!fs.existsSync(hooksFilePath)) {
            return {};
        }
        const data = fs.readFileSync(hooksFilePath, 'utf8');
        return JSON.parse(data);
    } catch(err) {
        console.error('Error reading hooks.json:', err);
        process.exit(1);
    }
};
