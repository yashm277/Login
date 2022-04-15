import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from "firebase/auth";


const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const navigate = useNavigate();


    onAuthStateChanged(auth, (user) => { if (user) navigate("/"); });

    return (
        <>
            <button onClick={() => { signInWithRedirect(auth, provider); }}>Sign in with Google</button>
        </>
    )
}

export default Login;