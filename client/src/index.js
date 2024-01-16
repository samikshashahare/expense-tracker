import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
// import App from './App';
import Home from './view/Home/Home.js'
import AddTransaction from './view/AddTransactions/AddTransaction.js';
import TransactionList from './components/TransactionList/TransactionList.js'
import SignUp from './view/SignUp/SignUp.js';
import  Login from './view/Login/Login.js';
import Navbar from './components/Navbar/Navbar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },
    {
        path:'/addTransaction',
        element:<AddTransaction />
    },
    {
        path: '/transactionList',
        element: <TransactionList />
    },
    {
        path:'/signup',
        element:<SignUp />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'navbar',
        element:<Navbar />
    }

])
root.render(
    <RouterProvider router={router} />
);



