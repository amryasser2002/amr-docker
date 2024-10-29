FROM node:16 as base


FROM base as production

WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 5002
CMD ["npm" , "start" ]

FROM base as development

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5002
CMD ["npm" , "run" , "start-dev" ]