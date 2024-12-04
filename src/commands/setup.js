const loadHooks = require('../utils/loadHooks');
const saveHooks = require('../utils/saveHooks');

module.exports = function setup(args, hooksFilePath) {
    if(args.length !== 3) {
        console.error('Usage: vercel setup <hookname> <url>');
        process.exit(1);
    }

    const hookname = args[1];
    const url = args[2];

    const hooks = loadHooks(hooksFilePath);
    hooks[hookname] = url;
    saveHooks(hooks, hooksFilePath);

    console.warn(`Hook "${hookname}" configured with URL "${url}"`);
};
