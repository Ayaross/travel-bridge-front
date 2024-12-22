# Étape 1 : Construire l'application Angular
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Serveur NGINX pour les fichiers statiques
FROM nginx:stable-alpine
COPY --from=build /app/dist/<nom-du-projet> /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
