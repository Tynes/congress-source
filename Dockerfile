ROM node:6.2.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Server binds here, mapped by docker daemon
EXPOSE 8080

# Define the command to run app
CMD [ "npm", "start" ]