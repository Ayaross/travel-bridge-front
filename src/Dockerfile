# Étape 1 : Construire l'application Angular
FROM node:18-alpine as build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire avec une limite de mémoire augmentée
RUN node --max-old-space-size=4096 ./node_modules/@angular/cli/bin/ng build --configuration production

# Étape 2 : Servir avec NGINX
FROM nginx:stable-alpine

COPY --from=build /app/dist/travel-bridge-front /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
