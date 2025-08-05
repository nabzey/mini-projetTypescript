# Étape 1 : Image de base avec Node
FROM node:18

# Étape 2 : Créer dossier de travail
WORKDIR /app

# Étape 3 : Copier les fichiers
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Compiler TypeScript en JavaScript
RUN npx tsc

# Étape 6 : Lancer le programme
CMD ["node", "dist/index.js"]
