FROM node:12.18.4-buster-slim
WORKDIR /web
COPY . ./
ARG AUTH0_DOMAIN=""
ARG AUTH0_CLIENT_ID=""
ARG APP_HOSTNAME=""
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
