import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';
import BedroomProducts from '../pages/Collection/BedroomProducts';
import DiningProducts from '../pages/Collection/DiningProducts';
import LivingProducts from '../pages/Collection/LivingProducts';
import LoungeProducts from '../pages/Collection/LoungeProducts';
import OfficeChair from '../pages/Collection/OfficeChair';
import OfficeTable from '../pages/Collection/OfficeTable';
import HospitalBed from '../pages/Collection/HospitalBed';
import HospitalUtility from '../pages/Collection/HospitalUtility';
import SignInPage from '../pages/UserPages/SignIn';
import SignUpPage from '../pages/UserPages/SignUp';
import CartPage from '../pages/UserPages/CartPage';
import WishlistPage from '../pages/UserPages/WishlistPage';
import ComparePage from '../pages/UserPages/ComparePage';
import NewsDetails from '../pages/NewsDetails';
import ProductDetail from '../pages/ProductDetail';
import DashBoardPage from '../pages/UserPages/DashBoardPage';

function RoutesPage() {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/collection/bedroom" element={<BedroomProducts />} />
            <Route path="/collection/dining" element={<DiningProducts />} />
            <Route path="/collection/living" element={<LivingProducts />} />
            <Route path="/collection/lounge" element={<LoungeProducts />} />
            <Route path="/collection/office-chair" element={<OfficeChair />} />
            <Route path="/collection/office-table" element={<OfficeTable />} />
            <Route path="/collection/hospital-bed" element={<HospitalBed />} />
            <Route path="/collection/hospital-utility" element={<HospitalUtility />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/blog/:newsId" element={<NewsDetails />} />
            <Route path="/product/:idProduct" element={<ProductDetail />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/account" element={<DashBoardPage />} />
        </Routes>
    );
}

export default RoutesPage;
