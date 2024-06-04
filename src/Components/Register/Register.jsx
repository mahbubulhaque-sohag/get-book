import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Auth/AuthProvider'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser, googleLogin } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const result = await createUser(email, password);
            const user = result.user;
            console.log(user);
            setEmail('');
            setPassword('');
            toast.success('Registered successfully');
            navigate('/login'); 
        } catch (err) {
            console.error(err);
            setError(err.message);
            toast.error('Registration failed');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            const user = result.user;
            console.log(user);
            toast.success('Login with Google successful');
            navigate('/'); 
        } catch (err) {
            console.error(err);
            setError(err.message);
            toast.error('Google login failed');
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
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
                            <label className="label">
                                <p>Already have an account?</p>
                                <Link to="/login" className="label-text-alt link link-hover">Login</Link>
                            </label>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"  onClick={handleGoogleLogin}>Google Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
