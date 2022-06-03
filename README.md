# Cypress Proyect
##### this is a small example project with cypress using the folder structure proposed by cypress

## Quick start
#####  There are multiple ways to install Cypress Proyect.
clone the repository


    git clone "https://github.com/alvarocascante12/cypress_challenge.git"

enter in cypress folder


    cd cypress
install all dependency


    npm i
open cypress if you want run test by test


    npx cypress open

run all test and generated a report in this folder reports/mochareports/report.html

    npm run test

## docker and cypress
##### if you want execute docker with cypress the poject have a Dockerfile in the root

this command make a image of docker

    docker build -t my-cypress-image:1.0 .
this command make a contair



    docker run -i -v  %cd%:cypress-proyect -t my-cypress-image:1.0 --spec cypress/integration/suites/*.feature

## note
**if docker container explote maybe is a problem with the version because in this example I used a the last version for makes the image "cypress/browsers:node14.19.0-chrome100-ff99-edge" and i am not sure this image support my version of cypress if this occur change the version of cypress with 10.0.0 in the packgase jason .**
**I'm sorry I couldn't test the docker file due to problems on my pc with linux containers**
