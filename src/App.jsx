import React, { useEffect, useState } from 'react'
//Pages
import HomePage from './Pages/Home/HomePage'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'
import ShopProductsPage from './Pages/Products/ShopProductsPage'
import ProductDetailsPage from './Pages/Products/ProductDetailsPage'
import CartPage from './Pages/Cart/CartPage'
import PaymentPage from './Pages/Payment/PaymentPage'
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage'
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage'
import AdminOrdersDetailsPage from './Pages/Admin/AdminOrdersDetailsPage'
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage'
import AdminAddProductPage from './Pages/Admin/AdminAddProductPage'
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage'
import UserFavProductsPage from './Pages/User/UserFavProductsPage'
import UserAddressPage from './Pages/User/UserAddressPage'
import UserAddressAddPage from './Pages/User/UserAddressAddPage'
import UserAddressEditPage from './Pages/User/UserAddressEditPage'
import UserProfilePage from './Pages/User/UserProfilePage'
import UserProfileEditPage from './Pages/User/UserProfileEditPage'
import ErrorPage from './Pages/Error/ErrorPage'
//Components
import Navbar from './Components/Utility/Navbar'
import Footer from './Components/Utility/Footer'
import Loader from './Hooks/Loader'
//Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Hooks/ScrollToTop'

const App = () => {

    //Loader
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
    if (loading) return <Loader />;

  return (
    <div className='bgk'>
    <Navbar />
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route index element={ <HomePage /> }/>
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='/register' element={ <RegisterPage /> }/>
        <Route path='/all-categories' element={ <AllCategoryPage /> }/>
        <Route path='/all-brands' element={ <AllBrandPage /> }/>
        <Route path='/products' element={ <ShopProductsPage /> }/>
        <Route path='/products/:id' element={ <ProductDetailsPage /> }/>
        <Route path='/cart' element={ <CartPage /> }/>
        <Route path='/order/paymethod' element={ <PaymentPage /> }/>
        <Route path='/admin/all-products' element={ <AdminAllProductsPage /> }/>
        <Route path='/admin/all-orders' element={ <AdminAllOrdersPage /> }/>
        <Route path='/admin/orders/:id' element={ <AdminOrdersDetailsPage /> }/>
        <Route path='/admin/add-brand' element={ <AdminAddBrandPage /> }/>
        <Route path='/admin/add-category' element={ <AdminAddCategoryPage /> }/>
        <Route path='/admin/add-sub-category' element={ <AdminAddSubCategoryPage /> }/>
        <Route path='/admin/add-product' element={ <AdminAddProductPage /> }/>
        <Route path='/user/all-orders' element={ <UserAllOrdersPage /> }/>
        <Route path='/user/favourites' element={ <UserFavProductsPage /> }/>
        <Route path='/user/address' element={ <UserAddressPage /> }/>
        <Route path='/user/address/add' element={ <UserAddressAddPage /> }/>
        <Route path='/user/address/edit' element={ <UserAddressEditPage /> }/>
        <Route path='/user/profile' element={ <UserProfilePage /> }/>
        <Route path='/user/profile/edit' element={ <UserProfileEditPage /> }/>
        <Route path='*' element={ <ErrorPage /> }/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App