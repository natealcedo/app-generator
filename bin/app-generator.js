#!/usr/bin/env node

const commander = require("commander");
const packageJson = require("../package.json")
const chalk = require("chalk");
const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();
const path = require("path");

const program = require('commander');

env.register(path.resolve(__dirname, "../../generator-express-react-monorepo/index.js"),"fullstack-app");

const commands = {
  ms: "microservice",
  fsApp: "fullstack-app"
}


program
  .version(packageJson.version)
  .description("A small cli tool for generating a new code base")
  .usage('[fullstack-app]')
  .action(() => {
    env.run("fullstack-app");
  });

program
  .command(commands.ms)
  .description("Generates a microservice")
  .action((projectName) => {
    console.log(`Building a microservice ${projectName}`)
  });

program.parse(process.argv)

if(program.args.length === 0){
  program.help();
  process.exit(0);
}
