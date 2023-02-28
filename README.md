# Stella Racing

Welcome to Sellta Racings online store. The best place to get your racing gear, and stay one step ahead of your competition!

### [STELLA-RACING](https://stella-racing.herokuapp.com/)


### Back End
Stella Racing was built using Flask Python for the server with a postgreSQL database. The back end structure utilizes RESTful convention and handles user requests through our API and uses JSON and redux to update the front end. Err(bnb) uses token based authentication and BCrypt to safely store user passwords and verify login credentials. 
### Front End
The front end was built using React Components to render the pages with JavaScript and Redux to store stateand make the pages dynamic.
### List of Technologies
* Flask
* Flask-Login
* PostgreSQL
* Heroku
* React
* Redux

### Core Features
* Sign up/Login/ Demo User
* View Products for Sale
* Add/Edit/Delete Items to Cart
* Add/Edit/Delete Reviews on Items
* Checkout Items and Create and View Placed Orders

##### User Authorization
User authentication is handled in Python using Workzeug package to hash passwords for storage. To authenticate users, the submitted password is hashed and then compared to the hashed password stored in the database.
