# Use a Node.js base image with the required version (Node.js 18 in this case)
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy your application files to the container
COPY . .

# Install dependencies
RUN npm install

# Run the build command for your Next.js application
RUN npm run build

# Define the command to start your application
CMD ["npm", "start"]