#FROM stefanscherer/node-windows as node
#WORKDIR /Fllight_Search_App
#COPY package.json ./
#RUN npm config rm proxy
#RUN npm config rm https-proxy
#COPY . .
#RUN npm cache clean --force
#RUN npm config set strict-ssl false
#RUN npm config set registry http://registry.npmjs.org/
#RUN npm install -d
#RUN npm run build
#

#FROM johnpapa/angular-cli as angular-built
#WORKDIR /usr/src/app
#COPY package.json package.json
#RUN npm install --silent
#COPY . .
#RUN ng build --prod
#
#FROM nginx:alpine
#LABEL author="Ofure"
#COPY --from=angular-built /usr/src/app/dist /usr/share/nginx/html
#EXPOSE 80 443
#CMD [ "nginx", "-g", "daemon off;" ]

#FROM stefanscherer/node-windows:latest
#WORKDIR /app
#COPY package.json .
#COPY . .
#RUN npm --verbose install
#
#EXPOSE 4200 49153
#CMD npm run start

FROM node:12.13.1-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN ["npm", "install"]
COPY . /app
COPY ./server.js /etc/nginx/conf.d/default.conf
EXPOSE 3000
#CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
CMD ["npm", "start", "--", "--host", "web", "--poll", "500"]