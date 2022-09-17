FROM node:16.15.0

WORKDIR ./Docker-Vue-CLI

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci
