#!/usr/bin/env node

const path = require('path');
const os = require('os');

const deploy = require('./commands/deploy');
const setup = require('./commands/setup');
const list = require('./commands/list');
const del = require('./commands/delete');
const help = require('./commands/help');

const args = process.argv.slice(2);

if(args.length === 0) {
    help();
}

const command = args[0];
const configDir = path.join(os.homedir(), '.vercel-webhook');
const hooksFilePath = path.join(configDir, 'hooks.json');

switch(command) {
    case 'deploy':
        deploy(args, hooksFilePath);
        break;
    case 'setup':
        setup(args, hooksFilePath);
        break;
    case 'list':
        list(hooksFilePath);
        break;
    case 'delete':
        del(args, hooksFilePath);
        break;
    case 'help':
        help();
        break;
    default:
        console.warn(`Unknown command: ${command}`);
        help();
}
