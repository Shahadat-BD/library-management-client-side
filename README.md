# Libraray Management System
## [ Project live site Link](https://bookstack-auth-7442e.web.app/)

Click here for the Project Live site Link: [https://bookstack-auth-7442e.web.app/]
### Note 
* I have implemented dark mode in whole website.
* using JWT Token for doing CRUD operation in the "all book" and "add book" rotes.
## I am implement 2 task of optional requirement.
* swipper slider implement for review section.
* using Axios interceptors for handling network request. 
## Main features.
* This is a simple CRUD based library management system website.
* This website created for mobile,tablet and desktop user.
* In this website I created some section in home page. section name is Navbar , Banner, Latest book , book category , about us ,contact us , review and footer.
* In this website Navbar includes login button logo and three private routes. private routes name is  'all book' , 'add book' , 'Borrowed books'.
* I stock in 4 categoies book the category section of home page. such as Islamic, programming, novel and business book.
* If user want to borrow any categories book, then user must login otherwise user can not borrow book.
* If the user logged In he will be taken to the details page and there he can borrow the book.
* when user borrow any book,then quanity reduce form main quantity of this book.
* If a single user can not borrowing a book twice.But returning a book, the user can borrow that specifc book again.
* when user return this book,then the book will be deleted immediately form "borrowed book" route and with increse quantity of this book.

### Add Book.(private route : so must be logged in user)
 * User can be add category based any books by fill up this add book form.
### All Books.(private route : so must be logged in user)
* User can see the all categories book in this page.
* User Updated any books by clicking the update button.
* If user know the details information about any books, then he click the details button.and again he can borrow book and read some parts of this book by clik the read button.
* when user click the 'avilable book' button then he can see the Books whose quantity is above 0 will show them.

### Borrowed books page.(private route : so must be logged in user)
* user can see the their borrowed book by tabular list format.he can see the book image,name,return date,borrow date, and return button.
* By clicking the return button, user can be return borrowed books When the times comes to retun the book.
## Authentication Features.
* Google Singn In method using firebase.
* login and Register system added by firebase.
* First time user must be Register. other wise he can not going to the private route.
* After completed Registerd Then the next time he goes to login, he will be done.
* When a user Register, the password must be 6 characters and at least one uppercase letter and special character.other wise showing a error message.
* When the user just goes to login, he must have the correct email and password

## Technology Use 
#### frontend
* Javascirpt
* React.js
* React Router.
* Firebase (for handling Authentication)
* Tailwind css
* Desi Ui
#### Backend
* Node.js
* Express.js
* MongoDB
