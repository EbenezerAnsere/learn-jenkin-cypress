FROM cypress/base:22.19.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npx cypress verify
RUN ["npm", "run", "cy:run"]
