#command to  pull node from docker
# here we are pulling the image node from dockerhub in order to 
FROM node As build-stage

WORKDIR / app

#  source is the current location of the file
# COPY source(.) dest(.)
COPY . .

#running the npm install to get all dependencies && next command is to get a production grade build
RUN npm install && npm run build

#use nginx to get the
###########ta
FROM nginx:alpine As Deploye-stage 
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /app/build/ .

#command to start the nginx server
ENTRYPOINT [ "nginx", "-g", "daemon off;"]