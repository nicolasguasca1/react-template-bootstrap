# Dockerfile for React Client

# Traemos la imagen base
FROM node:alpine

# Indicamos el directorio de trabajo
WORKDIR /UI

# Añadimos `/app/node_modules/.bin` al $PATH 
ENV PATH /UI/node_modules/.bin:$PATH

# Instalamos las dependencias
COPY package.json ./
RUN yarn install
# Añadimos la app
COPY . ./

# From tutorial
EXPOSE 3000

# Iniciamos la app
CMD ["yarn", "start"]

