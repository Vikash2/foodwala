import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import "../index.css";
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';


import Header from './components/Header';
import ResturantMenu from './components/ResturantMenu';
import LandingPage from './components/LandingPage';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children:
            [
                {
                    path: "/",
                    element: <LandingPage />
                },
                {
                    path: "/home",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: '/resturant/:resId',
                    element: <ResturantMenu />
                }
            ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);