const { Command } = require('commander');
const { name, version } = require('./package.json');
const { Lantern } = require('./src/index');
const program = new Command();

program
  .name(name)
  .version(version);

program.command('parse')
  .description('Parse a cangjie keyboard input into hiragana')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    const p = new Lantern(s, debug);

    console.log(p.result);
  });


program.parse();