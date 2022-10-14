import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/Login/index'
import Register from "../pages/Register";
import Home from "../pages/Home"



export const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};