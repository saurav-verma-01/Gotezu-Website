import React from 'react'

import Home from "./pages/Home.jsx";
import Trainers from "./pages/Trainers.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./Layout/RootLayout.jsx";

const App = () => {
    const router  = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "trainers",
                    element: <Trainers />,
                },
                {
                    path: "about",
                    element: <AboutUs />,
                },
                {
                    path: "contact",
                    element: <ContactUsPage />
                }
            ]
        }
        ]
    )

    return (
        <RouterProvider router={router} />
    )
}
export default App
