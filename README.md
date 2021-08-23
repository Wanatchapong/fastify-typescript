# Fastify TypeScript

## 🎉 Quick Start

1. Create .env file at root directory of project
2. Copy all environments variables from .env.example into .env
3. Install dependencies run: `npm install`
4. Run development: `npm run dev`

## 🐳 Run on Docker

1. After created .env and installed dependencies same above
2. Compile sources run: `npm build`
3. Build docker image run: `docker build --tag image-name .`
4. Run docker container in detached mode run: `docker run -d -p 8000:8000 image-name`

## 📌 Dependencies

- [Fastify](https://www.fastify.io): Fast and low overhead web framework, for Node.js
- [TypeScript](https://www.typescriptlang.org): Static type definitions for JavaScript
- [Nodemon](https://github.com/remy/nodemon): Helps develop automatically restarting the node application
- [Pino](https://getpino.io): Very low overhead Node.js logger
- [Jest](https://jestjs.io): Delightful JavaScript Testing
- [SuperTest](https://github.com/visionmedia/supertest): HTTP assertions made easy via superagent
- [Commitlint](https://commitlint.js.org): Helps your team adhering to a commit convention
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0): A specification for adding human and machine readable meaning to commit messages
- [Lint-Staged](https://github.com/okonet/lint-staged): Run linters against staged git files and don't let 💩 slip into your code base!
- [Husky](https://typicode.github.io/husky): Modern native git hooks, use it to lint your commit messages, run tests, lint code, etc... when you commit or push
- [Prettier](https://prettier.io): An opinionated code formatter
- [ESLint](https://eslint.org): Find and fix problems in your JavaScript code
