import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const handleLoginSuccess = (credentialResponse: any) => {
        const token = credentialResponse.credential;

        fetch("http://localhost:8080/api/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => console.log("User profile:", data))
            .catch(err => console.error("Error:", err));
    };

    return (
        <div>
            <h2>Sign in with Google</h2>
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login failed")}
            />
        </div>
    );
};

export default Login;
