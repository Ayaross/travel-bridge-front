# Étape 1 : Construire l'application Angular
FROM node:18-alpine as build

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application Angular pour production
RUN npm run build -- --configuration production

# Étape 2 : Servir l'application avec NGINX
FROM nginx:stable-alpine

# Copier les fichiers de build Angular dans le répertoire NGINX par défaut
COPY --from=build /app/dist/travel-bridge-front /usr/share/nginx/html

# Copier un fichier de configuration NGINX personnalisé (optionnel)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
