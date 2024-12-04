const loadHooks = require('../utils/loadHooks');

module.exports = function list(hooksFilePath) {
    const hooks = loadHooks(hooksFilePath);

    if(Object.keys(hooks).length === 0) {
        console.warn('No hooks configured.');
    } else {
        console.warn('Configured hooks:');
        for(const [hook, url] of Object.entries(hooks)) {
            console.log(`- ${hook}: ${url}`);
        }
    }
};
