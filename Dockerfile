# Include node js Image in the base images 
FROM node:24.5-alpine as build

# Creating the Working dir for the Image creation process
WORKDIR /app

# Copy the package.json and package-lock.json file into the /app folder
COPY package.json package-lock.json ./

# run npm install command for running the react app 
RUN npm install

# Copy all the program files and all the files from the my react app to /app folder
COPY . .

# We want to run the build command for build our index.html in dist folder
RUN npm run build


# Nginx steps 

# We want to include the nginx image as in the Base image
FROM nginx:alpine

# Remove the older available html files from the default nginx available files 
# RUN rm -rf /usr/share/nginx/html/*

# Now we want to change the default nginx conf file to our conf file
# Copy the newly builded index.html to the default nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copying the our nginx conf file to the default conf files folder
COPY ./my-app.conf /etc/nginx/conf.d/default.conf

# Expose 80 port 
EXPOSE 80 

# Comand executing to run the nginx as not a Backgroudn process to run it in the fr mode 
CMD ["nginx", "-g", "daemon off;"]