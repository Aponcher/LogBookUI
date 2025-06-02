import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {CButton, CCard, CCardBody, CCol, CForm, CFormInput} from '@coreui/react';
import {useAuth} from "../AuthContext";
import axios, {AxiosResponse} from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login, refreshUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const checkExistingLogin = async () => {
            try {
                const user = await refreshUser();
                if (user) {
                    console.log('Already Logged in as: ' + user);
                    navigate('/');
                }
            } catch (e) {
                // Ignore; let them log in
                console.log('Failed check of existing login:', e);
            }
        };

        checkExistingLogin();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response: AxiosResponse = await axios.post(
                `${apiUrl}/user/login`,
                {
                    id: username,
                    password: password
                });
            if (response.status === 200) {
                login({
                    userData: {
                        id: response.data.userId
                    },
                    token: response.data.token
                });
                navigate('/');
            } else {
                alert(response.data.message || 'Login failed');
            }
        } catch (err) {
            alert('Login error');
        }
    };

    return (
        <CCard className="mx-auto mt-1" style={{ maxWidth: '400px' }}>
            <CCardBody>
                <CForm onSubmit={handleSubmit}>
                    <CCol className="d-flex align-items-center mb-1">
                        <CFormInput className="ms-3"
                                    type="email"
                                    label="Email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} required />
                    </CCol>
                    <CCol className="d-flex align-items-center mb-1">
                        <CFormInput className="ms-3"
                                    type="password"
                                    label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required />
                    </CCol>
                    <CButton type="submit" color="primary" className="mt-2 w-100">Login</CButton>
                    <p className="text-center mt-2">
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default LoginPage;