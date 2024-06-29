# # Use the official Node.js image
# FROM node:16

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Expose the necessary ports
# ARG PORT=8081
# ENV PORT $PORT
# EXPOSE 19000 19001 19002

# # Start the Expo server
# # CMD ["npm", "start"]
# CMD ["npx", "expo", "start", "--tunnel"]

# Use the official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install ngrok globally
RUN npm install -g ngrok

# Copy the rest of the application code to the container
COPY . .

# Expose the necessary ports
ARG PORT=8081
ENV PORT $PORT
EXPOSE 8081 19000 19001 19002
# EXPOSE 8081

# Start the Expo server
# CMD ["npm", "start"]
# CMD ["npx", "expo", "start", "--tunnel"]
CMD ["npx", "expo", "start", "--lan"]
