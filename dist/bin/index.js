"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const __1 = require("..");
const CLI_VERSION = '0.0.0';
/**
 * Run the command line interface program.
 * @param argv process.argv.
 */
const cli = (argv) => {
    const program = new commander_1.Command();
    program
        .name('genbaneko')
        .description(`Let's display "Yoshi!" on the console.`)
        .version(CLI_VERSION);
    program
        .command('say')
        .description('Genbaneko say something')
        .argument('<string>', 'serif')
        .action((serif) => {
        __1.mGenbaneko.say(serif);
    });
    program
        .command('think')
        .description('Genbaneko think something')
        .argument('<string>', 'thought')
        .action((thought) => {
        __1.mGenbaneko.think(thought);
    });
    program.parse(argv);
};
cli(process.argv);
