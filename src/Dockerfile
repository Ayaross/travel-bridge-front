# Étape 1 : Installer Node.js et Angular CLI
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node --max-old-space-size=4096 ./node_modules/@angular/cli/bin/ng build --prod

# Étape 2 : Serveur NGINX pour Angular
FROM nginx:stable-alpine
COPY --from=build /app/dist/<nom-du-projet> /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
