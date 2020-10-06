# Ungar

# What is Ungar?

Ungar is about focus on your future life, having more discipline, getting things done and blogs about versatile stuff.

[Tasks](https://www.notion.so/d75898b6985e458a8968fa5765fbc0d9)

# Ungar - Website

Projektstart: 1.September 2020

Estimated Finish: 11.Oktober 2020

- Frontend
    - npm
        - React
        - webpack
            - Loaders
        - 
- Backend
    - go

        mongodb-driver

    - mongodb
    - mongodb-atlas

## Commits

### Setup:

[#1.0.0 setting up all dependencies and folder structure](https://www.notion.so/1-0-0-setting-up-all-dependencies-and-folder-structure-00e85a7fc64b40359fcfc7c29a68c904)

[#1.0.1 adding backend to the project](https://www.notion.so/1-0-1-adding-backend-to-the-project-1688c7e7f54f4c4bbabfdabfc9f1b0f6)

[#1.0.2 further structuring](https://www.notion.so/1-0-2-further-structuring-70f1e9e4ac864219a3ae86b3990cfd8c)

[#1.0.3 webpack loader installation](https://www.notion.so/1-0-3-webpack-loader-installation-e81a73eba04140e5babc9803f07eceff)

[#1.0.4 page transition setup](https://www.notion.so/1-0-4-page-transition-setup-91553714d5ca4f1abb6d8c3197138682)

### Pages:

[#1.1.0 building foyer](https://www.notion.so/1-1-0-building-foyer-d66737039fcf40898d16435961bfb24c)

[#1.1.1 Backend for Foyer](https://www.notion.so/1-1-1-Backend-for-Foyer-d8b9e5b53e4e4a609205fcb4220df7c5)

[#1.2.0 building content](https://www.notion.so/1-2-0-building-content-70a196a873564f4aa644745eaeaf89e5)

[#1.2.1 Content backend](https://www.notion.so/1-2-1-Content-backend-1b1d394f65c84ecd9c729055c534d247)

[#1.2.1.4](https://www.notion.so/1-2-1-4-a031742eb27c4db2abef36db6923d22e)

[#1.2.1.5 Backend struct](https://www.notion.so/1-2-1-5-Backend-struct-00bba64403e64b09a6e51191ebd901d8)

[#1.2.1.6](https://www.notion.so/1-2-1-6-4556ed360e914e5ab7b6eb8af21bc515)

### Updates:

[#2.0.1 Adding a fancy scrollbar](https://www.notion.so/2-0-1-Adding-a-fancy-scrollbar-1ac073cb2dab45979264c04a68b4e8ed)

# Documentation and Appereance

Ungar is a website that is made for Ungar. Basically you can read blog posts about versatile topics like programming, mental clarity, designing, minimalism and photography. 

You can also purchase websites, development or photography and designing

 Switching between the web screens should happen in horizontal order →

![Ungar%2038082603e7824a099aa6a09e9eae485b/Screenshot_2020-09-17_at_07.39.12.jpg](Ungar%2038082603e7824a099aa6a09e9eae485b/Screenshot_2020-09-17_at_07.39.12.jpg)

Animation should lift off the the menubar

![Ungar%2038082603e7824a099aa6a09e9eae485b/Screenshot_2020-09-17_at_07.40.50.jpg](Ungar%2038082603e7824a099aa6a09e9eae485b/Screenshot_2020-09-17_at_07.40.50.jpg)

## Foyer

There is only the logo with a slogan in the center and some versatile settings for the web-experience

## Content

The scrolling should work independent. The content containers that contain logo description and a background picture should be scrollable

# Backend

[Cloud: MongoDB Cloud](https://cloud.mongodb.com/v2/5f6b00ddb017f653daf75a0e#security/network/whitelist)

Link for connection to mongo-cloud: "mongodb+srv://ungar:<password>@cluster0.ykrvq.mongodb.net/<dbname>?retryWrites=true&w=majority"

Rest-api backend reminder:

Apache server was running and there was a php file which provided access to the mysql-database and you could access it over localhost:3333/file.php

I have to put it on my raspberry pi and access the go file which provides the connection to the mongo-db which is on mongo-atlas. So the go code should run on a server like apache did. i want to access it like: localhost:333/backendcode.go. But go provides a http server itself so i can like start it with http and provide it a port number and than I can easily access it with the frontend.