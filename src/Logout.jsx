import React from "react";
import { useNavigate } from "react-router";

export const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate("/");
    }
    return(
        <div>
           <h2>Kijelentkezések</h2>
           <button onClick={handleLogout}>Kijelentkezés</button>
        </div>
    )
}