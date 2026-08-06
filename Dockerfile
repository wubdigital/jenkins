FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "fetch('http://localhost:8000/health').then(r=process.exit(r.ok?0:1)).cath(()=>process.exit(1))"


CMD [ "node", "app.js" ]
