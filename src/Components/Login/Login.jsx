
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Auth/AuthProvider'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { login } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError(''); 
        if (!email || !password) {
            setError('Please fill in all fields.');
            toast.error('Please fill in all fields.');
            return;
        }
        try {
            const result = await login(email, password);
            const user = result.user;
            console.log(user);
            setEmail(user.email);
            setPassword('');
            toast.success('Login successfully');
            navigate('/'); 
        } catch (err) {
            console.error(err);
            setError(err.message);
            if (err.code === 'auth/invalid-email') {
                toast.error('Invalid email format');
            } else if (err.code === 'auth/wrong-password') {
                toast.error('Incorrect password');
            } else if (err.code === 'auth/user-not-found') {
                toast.error('User not found');
            } else {
                toast.error('Login failed');
            }
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="email" 
                                className="input input-bordered" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="password" 
                                className="input input-bordered" 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
