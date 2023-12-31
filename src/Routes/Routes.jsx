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
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadBooks from "../Pages/ReadBooks/ReadBooks";
import UpdatedBookForm from "../Pages/UpdatedBookForm/UpdatedBookForm";

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
                loader : ({params})=> fetch(`https://y-psi-two.vercel.app/books/${params.category}`)

            },
            {
                path:"/bookDetails/:id",
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://y-psi-two.vercel.app/bookDetails/${params.id}`)
            },
            {
                path:"/readBook/:id",
                element : <ReadBooks></ReadBooks>,
                loader:({params})=> fetch(`https://y-psi-two.vercel.app/readBook/${params.id}`)

            },
            {
                path:"/add-books",
                element : <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:"/all-books",
                element : <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
            },
            {
                 path : "/updateBook/:id",
                 element : <UpdatedBookForm></UpdatedBookForm>,
                 loader : ({params}) => fetch(`https://y-psi-two.vercel.app/updateBook/${params.id}`)
            },
            {
                path:"/borrowed-Books",
                element : <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            }
            
        ]
    }    
]);

export default router;