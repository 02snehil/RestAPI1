import React, { useState } from 'react';
import axios from 'axios';
import PersonalDashboard from './PersonalDashboard';
const Login = () => {
    const [sid, setSid] = useState('');
    const [sname, setSname] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/get/${sid}`, {
                // pass data in the request body, not in the URL
                data: {
                    sid,
                    sname,
                }
            });

            console.log(response.data);
            // If login is successful, update loginSuccess state
            setLoginSuccess(true);
        } catch (error) {
            console.error('Login failed', error.response.data);
            setLoginSuccess(false);
        }
    };

    // Render PersonalDashboard if login is successful
    if (loginSuccess) {
        return <PersonalDashboard />;
    }

    return (
        <div>
            <h2>Student Login</h2>
            <label>SID:</label>
            <input type="text" value={sid} onChange={(e) => setSid(e.target.value)} />
            <br />
            <label>Student Name:</label>
            <input type="text" value={sname} onChange={(e) => setSname(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
