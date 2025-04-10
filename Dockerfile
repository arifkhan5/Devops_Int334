# Step 1: Base Image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install Dependencies
RUN npm install

# Step 5: Copy Entire Project
COPY . .

# Step 6: Build Project
RUN npm run build

# Step 7: Serve the Build
RUN npm install -g serve
CMD ["npx", "serve", "-s", "build", "-l", "3000"]


# Step 8: Port Expose
EXPOSE 3000

