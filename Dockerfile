FROM node:18-alpine

WORKDIR /app

COPY hr_pulse/package.json hr_pulse/package-lock.json ./    # ← ajoute hr_pulse/

RUN npm install

COPY hr_pulse/ .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]