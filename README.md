# Overview #

The sample project is a web application that use HTML5, AngularJS and Bootstrap on frontend, and Java 8, JPA, Hibernate and Spring on backend.

### Install the programs ###

 - Java 8
 - Maven 3
 - Nodejs
 - Npm
 - Bower

### Clone the Repository ###

Clone the repository:

    git clone https://github.com/abnertcj/univallesys.git

### Install the frontend dependencies ###

Install the Javascript dependencies, running the following command:

    bower install

### Install the backend dependencies and start the server ###

On the root folder of the repository, build the backend and start the server, running the following command:

    mvn clean install tomcat8:run-war -Dspring.profiles.active=test

To see the application, access the following URL:

    http://localhost:8080/univalle/login

Login with the following data:

    "username": "admin@gmail.com",
    "password": "admin",

### Usage ###

Below is an example of usage of REST API:

Url           |Method          | Description
--------------|------------- | -------------
/product|GET | Retrieves information about the products 
/product|POST| Creates a new product
/product|PUT | Update the product
