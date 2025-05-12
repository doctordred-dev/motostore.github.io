import React from 'react';
import {Route, Routes} from "react-router";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import {lazy, Suspense} from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const MotorcyclesPages = lazy(() => import("./pages/MotorcyclesPages.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const LikePage = lazy(() => import("./pages/LikePage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const SingleItem = lazy(() => import("./components/SingleItem"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/motorcycles" element={<MotorcyclesPages/>}/>
                <Route path="/motorcycles/:sku" element={<SingleItem/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favorite" element={<LikePage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path='#' element={<ErrorBoundary/>}/>
            </Routes>
        </Suspense>
        );
};

export default AppRoutes;