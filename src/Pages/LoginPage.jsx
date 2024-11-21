import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const LoginPage = () => {

    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen flex justify-center items-center bg-[#E6F9F1]">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-4xl font-semibold text-center text-[#2ECC71] mb-6">Login</h2>
                    {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-[#2ECC71]">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded-md text-base"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-[#2ECC71]">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border rounded-md text-base"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 text-lg bg-[#3498DB] text-white font-semibold rounded-lg hover:bg-[#F39C12]"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-base text-center">
                        Don't have an account? <Link to={'/register'} className="text-[#3498DB] hover:text-[#F39C12]">Sign Up</Link>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default LoginPage;
