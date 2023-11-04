import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Root from "../Layout/Root";
import NotFound from "../NotFound/NotFound";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import PrivateRoute from "./PrivateRoute";
import BooksByCategory from "../Pages/BooksByCategory/BooksByCategory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            }, 
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : "/books/:category",
                element:<BooksByCategory></BooksByCategory>,
                loader : ({params})=> fetch(`http://localhost:3000/books/${params.category}`)

            },
            {
                path:"/add-books",
                element : <AddBook></AddBook>
            },
            {
                path:"/all-books",
                element : <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:"/borrowed-Books",
                element : <BorrowedBooks></BorrowedBooks>
            }
            
        ]
    }    
]);

export default router;