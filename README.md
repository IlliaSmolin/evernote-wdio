## Welcome to the "Evernote-WDIO" project

This project is created to run UI end-to-end tests agains EverNote web-application.
Please follow the instructions to install project and to run tests.

**Project stack**
- Language: JavaScript
- UI E2E Framework: WebdriverIO v7
- BDD Framework: Mocha
- Reporter: Allure

**Install project:**
1. Donwload & install Git using official [link](https://git-scm.com/downloads).
2. Donwload & install NodeJS v16.14.2 using official [link](https://nodejs.org/en/).
3. Run `git clone https://github.com/IlliaSmolin/evernote-wdio.git` command in Git Bash terminal.
4. Run `npm i` in the main project's directory.

**Run tests:** (all commands suppose to be run in the main project's directory)
1. To run **ALL** tests: `npm run all`.
2. To run **specific test suite**: `npm run login`. The list of scripts for specific suites can be found in the "**package.json**" file.
3. To run **specific file**: `npm run all -- --spec="%path_to_test.js_file%"`. Example of `%path_to_test.js_file%`: `./specs/login/login.test.js`.

**Generate reports:**
1. Donwload & install JDK using official [link](https://www.oracle.com/java/technologies/downloads/).
2. Run `npm i -g allure-commandline` command to download & install `allure-commandline` package.
3. Execute tests for which you want to generate the report.
4. Run `npm run allure` command in the main project's directory to generate & open report.
P.S. Allure report also includes screenshots on failures.