FROM cypress/browsers:node14.19.0-chrome100-ff99-edge

RUN mkdir /cypress-proyect
WORKDIR /cypress-proyect

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT [ "npx" , "cypress" , "run" ]

CMD [""]
