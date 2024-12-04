const axios = require('axios');
const loadHooks = require('../utils/loadHooks');

module.exports = function deploy(args, hooksFilePath) {
    if(args.length !== 2) {
        console.error('Usage: vercel deploy <hookname>');
        process.exit(1);
    }

    const hookname = args[1];
    const hooks = loadHooks(hooksFilePath);

    const url = hooks[hookname];
    if(!url) {
        console.error(`Hook "${hookname}" not found. Use 'vercel setup ${hookname} <url>' to configure it.`);
        process.exit(1);
    }

    axios.post(url)
        .then(response => {
            console.warn(`Deployment triggered for hook "${hookname}"`);
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error making request:', error.message);
            process.exit(1);
        });
};
