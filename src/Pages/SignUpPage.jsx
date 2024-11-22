import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get("name");
      const email = form.get("email");
      const photo = form.get("photo");
      const password = form.get("password");
  
      const newErrors = {};
      if (!/[a-z]/.test(password)) {
        newErrors.password = "Password must contain at least one lowercase letter.";
      }
      if (!/[A-Z]/.test(password)) {
        newErrors.password = "Password must contain at least one uppercase letter.";
      }
      if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long.";
      }
      
      
  
      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        return;
      }
  

      setError({});

      createNewUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          e.target.reset();
          updateUserProfile({displayName:name, photoURL: photo}).then(() => {
            navigate('/');
            e.target.reset();
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    };
  
    return (
      <>
        <Navbar></Navbar>
        <div className="py-28 min-h-screen flex justify-center items-center bg-[#E6F9F1]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[450px]">
            <h2 className="text-4xl font-semibold text-center text-[#2ECC71] mb-6">
              Sign Up
            </h2>
  
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-medium text-[#2ECC71]">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-md text-base"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-[#2ECC71]">
                  Photo-URL
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your photo-url"
                  className="w-full px-4 py-3 border rounded-md text-base"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-[#2ECC71]">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-md text-base"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium text-[#2ECC71]">
                  Password
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-md text-base"
                />
                {error.password && (
                  <p className="text-red-500 mt-2">{error.password}</p>
                )}
              </div>
  
              <button
                type="submit"
                className="w-full py-3 bg-[#3498DB] text-white font-semibold rounded-lg hover:bg-[#F39C12]"
              >
                Sign Up
              </button>
              <button
                className="mt-6 flex items-center justify-center gap-3 w-full bg-[#DB4437] text-white font-semibold text-base py-3 px-6 rounded-lg hover:bg-[#C1351D] transition-colors"
              >
                <FaGoogle className="w-6 h-6" />
                <span>Sign in with Google</span>
              </button>
            </form>
            <p className="mt-4 text-base text-center">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-[#3498DB] hover:text-[#F39C12]"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  };
  
  export default SignUpPage;
  