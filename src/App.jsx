import React from 'react'

import Home from "./pages/Home.jsx";
import Trainers from "./pages/Trainers.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./Layout/RootLayout.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Signup from "./pages/Signup.jsx";
import IndividualTrainer from "./pages/IndividualTrainer.jsx";

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
                },
                {
                    path: "pricing",
                    element: <PricingPage />
                },
                {
                    path: "signin",
                    element: <Signup />,
                },
                {
                    path: 'individual-trainer',
                    element: <IndividualTrainer />
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
