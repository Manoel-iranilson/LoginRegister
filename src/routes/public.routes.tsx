import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/Login/index'
import Register from "../pages/Register";

export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};