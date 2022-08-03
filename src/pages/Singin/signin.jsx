import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/button';
import './styles.css';

export const SignIn = () => {
    
    const navigate = useNavigate();

    const [name, setName] = useState(""); 

    return (
        <div className="container">
          <div className="button-container" style={{marginBottom: 20, display: 'flex', flexDirection: 'row', gap: 30}}>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Insera seu nome..." id="name"/>
            <Button text="Jogar" disabled={name.length < 1} onClick={() => navigate("/cards", {state: {username: name }})}/>
          </div>     
        </div>
    );
};