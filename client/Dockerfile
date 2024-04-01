# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development
ENV PRODUCTION_PROXY true

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "npm", "run", "dev", "--" , "--host"]

# Exposing server port
# EXPOSE 5000
