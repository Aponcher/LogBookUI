import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {CButton, CCard, CCardBody, CCol, CForm, CFormInput} from '@coreui/react';
import axios, {AxiosResponse} from "axios";
import {useAuth} from "../AuthContext";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response: AxiosResponse = await axios.post(
                `${apiUrl}/user/register`,
                {username, email, password});
            if (response.status === 200) {
                alert('Registered successfully');
                //console.log('ID: ' + username);
                //console.log('Token: ' + response.data.token);
                //console.log('Response: ' + response.data);
                login({ userData: { id: username }, token: response.data.token });
                navigate('/');
            } else {
                const data = await response.json();
                alert(data.message || 'Registration failed');
            }
        } catch (err) {
            alert('Error registering');
        }
    };

    return (
        <CCard className="mx-auto mt-1" style={{ maxWidth: '600px' }}>
            <CCardBody>
                <CForm onSubmit={handleSubmit}>
                    <CCol className="d-flex align-items-center mb-1">
                        <CFormInput className="ms-3"
                                    label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} required />
                    </CCol>
                    <CCol className="d-flex align-items-center mb-1">
                        <CFormInput label="Email"
                                    type="email"
                                    value={email}
                                    className="ms-3"
                                    onChange={(e) => setEmail(e.target.value)} required/>
                    </CCol>
                    <CCol className="d-flex align-items-center mb-1">
                        <CFormInput label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} required
                                    className="ms-3" />
                    </CCol>
                    <CButton type="submit" color="primary" className="mt-1 w-100">Register</CButton>
                    <p className="text-center mt-2">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default RegisterPage;