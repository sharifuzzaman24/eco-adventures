import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useDocumentTitle from "../useDocumentTitle";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  useDocumentTitle();

  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot-password", { state: { email } });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate('/profile');
        toast.success("Google Sign-In Successful!");
      })
      .catch((error) => {
        toast.error("Google Sign-In Failed: " + error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        e.target.reset();
        navigate(location?.state ? location.state : '/');
        toast.success("Login Successful!");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Login Failed: " + err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-40 min-h-screen flex justify-center items-center bg-[#E6F9F1]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[450px]">
          <h2 className="text-4xl font-semibold text-center text-[#2ECC71] mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-[#2ECC71]">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-md text-base"
              />
            </div>
            <div className="mb-1">
              <label className="block text-lg font-medium text-[#2ECC71]">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-md text-base"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              {error.login && <p className="text-red-500 text-base">{error.login}</p>}
              <p onClick={handleForgotPassword} className="text-base text-gray-600 cursor-pointer">Forget Password?</p>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-base bg-[#3498DB] text-white font-semibold rounded-lg hover:bg-[#F39C12]"
            >
              Login
            </button>
          </form>

          <button
            onClick={handleSignInWithGoogle}
            className="mt-6 flex items-center justify-center gap-3 w-full bg-[#DB4437] text-white font-semibold text-base py-3 px-6 rounded-lg hover:bg-[#C1351D] transition-colors"
          >
            <FaGoogle className="w-6 h-6" />
            <span>Sign in with Google</span>
          </button>

          <p className="mt-4 text-base text-center">
            Don't have an account? <Link to={'/register'} className="text-[#3498DB] hover:text-[#F39C12]">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />

      
    </>
  );
};

export default LoginPage;
