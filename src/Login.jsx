import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://szallasjwt.sulla.hu/login", {username, password});
            const token = response.data.token;
            localStorage.setItem("jwt", token);
            setError('');
            navigate("/SzallasList");
        }
        catch (error) {
            setError("Hitelesítés sikertelen. Ellenőrizd a bejelentkezési adatokat!")
            console.error("Hiba a bejelentkezés során",error);
        }
    }

    return(
        <div>
            <h2>Bejelentkezés</h2>
            <p>Felhasználónév:</p>
            {error && <p style={{color: "red"}}>{error}</p>}
            <input type="text" placeholder="Felhasználónév" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}/> <br/>
            <p>Jelszó:</p>
            <input type="password" placeholder="Jelszó" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button onClick={handleLogin}>Bejelentkezés</button>
        </div>
    )
}