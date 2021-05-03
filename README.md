# Book Search Engine 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description 
This project is to refactor a fully functioning Google Books API search engine built with a RESTful API to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

The refactored app is deployed and is live at Heroku 
https://archanas-booksearchengine.herokuapp.com/ 


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
 Clone the github repository
 - git clone  git@github.com:archana-nagaraj/Book-Search-Engine.git

Install dependencies
 For development or testing purposes, run `npm install` on both client and server directories to install dependencies. There are two servers for client side and server side, which can be run on their own. To run both servers at the same time, open the root directory and run `npm start`.

 Client Dependencies
    "dependencies": {
        "apollo-server-express": "^2.23.0",
        "bcrypt": "^5.0.0",
        "express": "^4.17.1",
        "graphql": "^15.5.0",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^5.9.10"

 Server Dependencies
    "dependencies": {
    "apollo-server-express": "^2.23.0",
    "bcrypt": "^5.0.0",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.10"


 
## Usage 
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 

## License 
This project is license under MIT

## Contributing 
Made by archana-nagaraj
Thanks to Module lessons, youtube videos on MERN Stack, heroku dev community and stack overflow code samples for tips and tricks

## Tests
There are no tests for this application. 

## Questions
For any questions about the project/repository please contact me @ [archana.nagaraj@gmail.com](mailto:archana.nagaraj@gmail.com) </br>
GitHub @ [archana-nagaraj](https://github.com/archana-nagaraj) 