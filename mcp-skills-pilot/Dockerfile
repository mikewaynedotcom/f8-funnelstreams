FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force
COPY catalog-lock.json catalog.mjs handler.mjs server.mjs stdio.mjs ./
COPY skills ./skills
USER node
EXPOSE 3000
CMD ["node","server.mjs"]
