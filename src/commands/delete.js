const loadHooks = require('../utils/loadHooks');
const saveHooks = require('../utils/saveHooks');

module.exports = function del(args, hooksFilePath) {
    if(args.length !== 2) {
        console.error('Usage: vercel delete <hookname>');
        process.exit(1);
    }

    const hookname = args[1];
    const hooks = loadHooks(hooksFilePath);

    if(hooks.hasOwnProperty(hookname)) {
        delete hooks[hookname];
        saveHooks(hooks, hooksFilePath);
        console.warn(`Hook "${hookname}" has been deleted.`);
    } else {
        console.error(`Hook "${hookname}" not found.`);
        process.exit(1);
    }
};
