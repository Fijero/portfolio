FROM node:24-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build Next.js
RUN npm run build

EXPOSE 3000


CMD ["npm", "run", "start"]