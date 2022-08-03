import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { SignIn } from "./pages/Singin/signin";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/cards" element={<Home/>}/>            
            </Routes>
        </BrowserRouter>
    )
}