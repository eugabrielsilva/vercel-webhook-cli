module.exports = function help() {
    console.error('Usage: vercel <command> [options]');
    console.info('Commands:');
    console.info('  deploy <hookname>');
    console.info('  setup <hookname> <url>');
    console.info('  delete <hookname>');
    console.info('  list');
    console.info('  help');
    process.exit(1);
};
