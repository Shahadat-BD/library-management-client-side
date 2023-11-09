# Book Stack
## [ Project live site Link](https://bookstack-auth-7442e.web.app/)

Click here for the Project Live site Link: [https://bookstack-auth-7442e.web.app/]
### Note 
* I have taken an extra input textArea in add book routes for added some part of this book.
* I have implemented dark mode on this website.
* using JWT Token for doing CRUD operation in the "all book" and "add book" rotes.
## I am implement 2 task of optional requirement.
* swipper slider implement for review section.
* I am using Axios interceptors for handling network request. 
## Main features.
* This is a simple CRUD based library management system website.
* This website only uses for mobile and desktop user.
* In this website I created some section in home page. section name is Navbar , Banner, Latest book , book category , about us ,contact us , review and footer.
* In out of the home page I also created some rotes for this website. this routes are name is all book , add book , Borrowed books.
* In this website I created Authentication system by google firebase. like login and registration.
* In This website I stock in 4 categoies book. Islami,programming,novel,and business.
* user can borrow above this category based.
* when user borrow any book,then quanity reduce form main quantity of this book.
* If a single user can not borrowing a book twice.But returning a book, the user can borrow that specifc book again.
* when user return this book,then the book will be deleted immediately form "borrowed book" route and with increse quantity of this book.
* only logged in user, he can see the his/her borrowed books by going to "borrowed book" route.
* Users can be add category based books by going to "add book" route.
* Users Updated any books by going to "all books" route.
  
## Authentication Features.
* First time user must be Register. other wise he can not going to the private route.
* After completed Registerd Then the next time he goes to login, he will be done.
* When a user Register, the password must be 6 characters and at least one uppercase letter and special character.other wise showing a error message.
* When user only login, password and email must be correct.

## Technology Use 
* Javascirpt
* React.js
* React Router.
* Node.js
* Express.js
* Firebase (for handling Authentication)
* Tailwind css
* Desi Ui 
