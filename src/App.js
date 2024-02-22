import './App.css';
import MobileNavBar from './Components/Mobile/MobileNavBar/MobileNavBar';
import MobileSearch from './Components/Mobile/MobileSearch/MobileSearch'
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/Utility/NavBar/NavBarLogin'
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import CartPage from './Pages/CartPage/CartPage'
import AllCategoryPage from './Pages/AllCategoryPage/AllCategoryPage';
import CategoriesBar from './Components/CategoriesBar/CategoriesBar';
import BrandsPage from './Pages/BrandsPage/BrandsPage';
import ShopProductsPage from './Pages/Products/ShopProductsPage/ShopProductsPage';
import ProductDetailsPage from './Pages/Products/ProductDetailsPage/ProductDetailsPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
// Start admin routes
import AdminProductsMangementPage from './Pages/Admin/AdminProductsMangementPage/AdminProductsMangementPage'
import AdminOrdersMangementPage from './Pages/Admin/AdminOrdersMangementPage/AdminOrdersMangementPage'
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage/AdminAddBrandPage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage/AdminAddSubCategoryPage'
import AdminAddProductPage from './Pages/Admin/AdminAddProductPage/AdminAddProductPage'
import AdminOrderDetailsPage from './Pages/Admin/AdminOrderDetailsPage/AdminOrderDetailsPage';
import AdminAddCouponPage from './Pages/Admin/AdminAddCouponPage/AdminAddCouponPage';
// End admin routs
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage/UserAllOrdersPage';
import UserAcountPage from './Pages/User/UserAcountPage/UserAcountPage';
import UserFavoriteProductsPage from './Pages/User/UserFavoriteProductsPage/UserFavoriteProductsPage';
import UserPersonalAddressesPage from './Pages/User/UserPersonalAddressesPage/UserPersonalAddressesPage';
import UserAddAddressPage from './Pages/User/UserAddAddressPage/UserAddAddressPage';
import UserEditAddressPage from './Pages/User/UserEditAddressPage/UserEditAddressPage';
// import UserEditAcountInfo from './Components/User/UserEditAcountInfo/UserEditAcountInfo';
import UserEditAcountInfoPage from './Pages/User/UserEditAcountInfoPage/UserEditAcountInfoPage';
import AdminUpdateProductPage from './Pages/Admin/AdminUpdateProductPage/AdminUpdateProductPage';
import ForgetPasswordPage from './Pages/Authentication/ForgetPasswordPage/ForgetPasswordPage';
import VerifyCodePage from './Pages/Authentication/VerifyCodePage/VerifyCodePage';
import ResetPasswordPage from './Pages/Authentication/ResetPasswordPage/ResetPasswordPage';
import ScrollToTopBtn from './Components/Utility/ScrollToTopBtn/ScrollToTopBtn'
import ProtectRoutsHook from './CustomHooks/Auth/ProtectRoutsHook';
import ProtectRouts from "./Components/Utility/ProtectRouts/ProtectRouts";
import { ToastContainer } from 'react-toastify';
import ProductsByCategoryPage from './Pages/Products/ProductsByCategoryPage/ProductsByCategoryPage';
import ProductsByBrandPage from './Pages/Products/ProductsByBrandPage/ProductsByBrandPage';
import AdminAllBrandsPage from './Pages/Admin/AdminAllBrandsPage/AdminAllBrandsPage';
import AdminAllCategoriesPage from './Pages/Admin/AdminAllCategoriesPage/AdminAllCategoriesPage';
function App() {
  const [,isUser,isAdmin] = ProtectRoutsHook()
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarLogin />
      <CategoriesBar />
      <MobileSearch />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/forgetPassowedPage' element={<ForgetPasswordPage />}/>
        <Route path='/verifyCodePage' element={<VerifyCodePage />}/>
        <Route path='/resetPasswordPage' element={<ResetPasswordPage />}/>
        <Route path='/allCategoryPage' element={<AllCategoryPage />}/>
        <Route path='/brandsPage' element={<BrandsPage />}/>
        <Route path='/shopProductsPage' element={<ShopProductsPage />}/>
        <Route path='/productDetailsPage/:id' element={<ProductDetailsPage />}/>
        <Route path='/product/category/:id' element={<ProductsByCategoryPage />}/>
        <Route path='/product/brand/:id' element={<ProductsByBrandPage />}/>
        {/*Start protection of user routs from any one don't have a permission*/}
        {/* <Route path='/placeOrderPage' element={
        <ProtectRouts auth={isUser}>
          <PlaceOrderPage />
        </ProtectRouts>}/> */}
        <Route element={<ProtectRouts auth={isUser}/>}>
        <Route path='/cartPage' element={<CartPage />}/>
        <Route path='/checkoutPage' element={<CheckoutPage />}/>
        <Route path='/user/userAcountPage' element={<UserAcountPage />}/>
        <Route path='/user/userEditAcountInfoPage' element={<UserEditAcountInfoPage />}/>
        <Route path='/user/allorders' element={<UserAllOrdersPage />}/>
        <Route path='/user/userFavoriteProductsPage' element={<UserFavoriteProductsPage />}/>
        <Route path='/user/userPersonalAddressesPage' element={<UserPersonalAddressesPage />}/>
        <Route path='/user/userAddAddressPage' element={<UserAddAddressPage />}/>
        <Route path='/user/userEditAddressPage/:id' element={<UserEditAddressPage />}/>
        </Route>
        {/*End protection of user routs from any one don't have a permission*/}
        {/*Start protection of admin routs from any one don't have a permission*/}
        <Route element={<ProtectRouts auth={isAdmin}/>}>
        <Route path='/admin/adminProductsMangementPage' element={<AdminProductsMangementPage />}/>
        <Route path='/admin/adminOrdersMangementPage' element={<AdminOrdersMangementPage />}/>
        <Route path='/admin/adminAddBrandPage' element={<AdminAddBrandPage />}/>
        <Route path='/admin/adminAllBrandsPage' element={<AdminAllBrandsPage />}/>
        <Route path='/admin/adminAddCategoryPage' element={<AdminAddCategoryPage />}/>
        <Route path='/admin/adminAllCategoriesPage' element={<AdminAllCategoriesPage />}/>
        <Route path='/admin/adminAddSubCategoryPage' element={<AdminAddSubCategoryPage />}/>
        <Route path='/admin/adminAddProductPage' element={<AdminAddProductPage />}/>
        <Route path='/admin/adminAddCouponPage' element={<AdminAddCouponPage />}/>
        <Route path='/admin/orderDetailsPage/:id' element={<AdminOrderDetailsPage />}/>
        <Route path='/admin/adminUpdateProductPage/:id' element={<AdminUpdateProductPage />}/>
        </Route>
        {/*Start protection of admin routs from any one don't have a permission*/}
        {/*If any problem occurs*/}
        <Route path='*' element={<Navigate to={"/"}/>}/>
      </Routes>
      <ScrollToTopBtn />
      <ToastContainer />
      <Footer />
      <MobileNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
