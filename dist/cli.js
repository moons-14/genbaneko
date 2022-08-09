"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const commander_1 = require("commander");
const _1 = require(".");
const CLI_VERSION = '0.0.0';
/**
 * Run the command line interface program.
 * @param argv process.argv.
 */
const cli = (argv) => {
    if (process.argv.length === 2) {
        _1.mGenbaneko.nomal();
        return;
    }
    const program = new commander_1.Command();
    program
        .name('genbaneko')
        .description(`Let's display "Yoshi!" on the console.`)
        .version(CLI_VERSION);
    program
        .command('say')
        .description('say something')
        .argument('[string]', 'serif')
        .action((serif) => {
        _1.mGenbaneko.say(serif);
    });
    program
        .command('think')
        .description('think something')
        .argument('[string]', 'thought')
        .action((thought) => {
        _1.mGenbaneko.think(thought);
    });
    program.parse(argv);
};
exports.cli = cli;
