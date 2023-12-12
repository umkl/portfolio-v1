# Use the official Node.js 14 image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Expose the port specified in the application
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
