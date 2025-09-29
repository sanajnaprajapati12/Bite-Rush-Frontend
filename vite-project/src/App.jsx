import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Herosection/Herosection";
import Login from "./Components/Login";
import SignUpModel  from "./Components/Signup";
import PizzaCard from "./Components/Herosection/pizzaCard";
import RestaurantList from "./Components/Herosection/NorthIndian/NorthIndian";
import Cakes from "./Components/Herosection/Cakeitem";
import Gulabjamunrestaurants from "./Components/Herosection/Gulabjamun/gulabjamun";
// import RestaurantDetails from "./Components/RestaurantComponents/resturentDetails";
import Restaurants from "./Components/Herosection/resturents";
import OtpLogin from "./Components/Herosection/verifyOtp";
import Dashboard from "./Components/OwnerDashbord/Dashboard";
import DashboardHome from "./Components/OwnerDashbord/DashboardHome";



import RestaurantInfoPage from "./Components/OwnerDashbord/RestaurantInfoPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import SettingsPage from "./Components/OwnerDashbord/SettingsPage";
import ManageRestaurants from "./Components/OwnerDashbord/ManageResturentPages";
import AdminLayout from "./Components/AdminSidebar/AdminLayout";
import AdminDashboard from "./Components/AdminSidebar/AdminDashboard";
import UserTable from "./Components/AdminSidebar/UserTable";
import ManageItems from "./Components/OwnerDashbord/Manageitems";
import RestaurantItemsPage from "./Components/OwnerDashbord/RestaurantItemsPage";
import Dashboardselector from "./Components/DashboardSlector/Dashbordselector";
import  OrdersPage from "./Components/OwnerDashbord/OwnerOrders";
import AdminProfile from "./Components/AdminSidebar/AdminProfile";
import EditProfile from "./Components/AdminSidebar/EditProfile";
import MenuItemsPage from "./Components/Menuitems/Menuitems";
import OrdersTable from "./Components/AdminSidebar/OdersPage";
import Checkout from "./Components/Menuitems/Cehckout";
import RestaurantsCard from "./Components/Herosection/Card3";
import UserDashboard from "./Components/UserDashboard/userDAshboard";
// import UserOrders from "./Components/UserDashboard/UserOrders";
import UserOrders from "./Components/UserDashboard/UserOrders";
import UserDashboardHome from "./Components/UserDashboard/UserDashboardHome";
import AddressPage from "./Components/UserDashboard/Addresspage";
import EditUserProfile from "./Components/UserDashboard/EditProfileapge";
import UserSettingsPage from "./Components/UserDashboard/UserSettingpage";
import AdminSettings from "./Components/AdminSidebar/AdminSettingpage";
import FavoritesPage from "./Components/UserDashboard/Favroutpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signin" element={<SignUpModel />} />
      <Route path="/Pizzas" element={<PizzaCard />} />
      <Route path="/ResturentDetail/:id" element={<MenuItemsPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Northindian" element={<RestaurantList />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/Gulabjamuns" element={<Gulabjamunrestaurants />} />
      <Route path="/returent/" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantsCard />} />
      <Route path="/otpLogin" element={<OtpLogin />} />
      <Route path="/Dashboard-selector" element={<Dashboardselector />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route
          index
          element={
            <ProtectedRoute allowedRoles={["owner"]}>
              <DashboardHome />
            </ProtectedRoute>
          }
        />
        <Route path="orders" element={<OrdersPage />} />

        <Route path="restaurant" element={<RestaurantInfoPage />} />

        <Route path="manage-restaurants" element={<ManageRestaurants />} />
        <Route path="items" element={<ManageItems />} />

        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="/restaurant-items/:id" element={<RestaurantItemsPage />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserTable />} />
        <Route path="orders" element={<OrdersTable />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="/adminrestaurants" element={<RestaurantInfoPage />} />
        <Route path="/admin/edit-profile" element={<EditProfile />} />
        <Route path="setting" element={<AdminSettings />} />
      </Route>

      <Route />
      <Route
        path="/userdashboard"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      >
        {/* Default page */}
        <Route index element={<UserDashboardHome />} />

        {/* Nested routes inside Dashboard */}
        <Route path="userorders" element={<UserOrders />} />

        <Route path="addresses" element={<AddressPage />} />
        <Route path="edit-profile" element={<EditUserProfile />} />
        <Route path="favourites" element={<FavoritesPage />} />
        <Route path="settings" element={<UserSettingsPage />} />
        {/* <Route path="favourites" element={<UserFavourites />} />
  <Route path="payments" element={<UserPayments />} />
  <Route path="settings" element={<UserSettings />} /> 
   */}
      </Route>
    </Routes>
  );
}


export default App;
