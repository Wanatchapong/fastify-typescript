FROM node:14-alpine

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8000

WORKDIR /app

COPY ["package.json", "package-lock.json*", ".env", "./"]

# With the --production flag (or when the NODE_ENV is set to "production"), npm will not install modules listed in devDependencies
RUN npm install --production

COPY dist dist

CMD [ "npm", "start" ]
