import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useDocumentTitle from "../useDocumentTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgotPasswordPage = () => {
    useDocumentTitle();
    const location = useLocation();
    const navigate = useNavigate();
    const { resetPassword } = useContext(AuthContext);

    const [email, setEmail] = useState(location?.state?.email || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleResetPassword = () => {
        setLoading(true);
        setError("");

        resetPassword(email)
            .then(() => {
                setLoading(false);

                window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
                navigate("/login");
            })
            .catch((err) => {
                setLoading(false);
                setError("Error sending reset email: " + err.message);
            });
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Reset Password</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label className="block mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md mb-4"
                            placeholder="Enter your email"
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="button"
                            onClick={handleResetPassword}
                            disabled={loading}
                            className={`w-full py-2 rounded-md ${loading ? "bg-gray-500" : "bg-blue-500"} text-white`}
                        >
                            {loading ? "Sending..." : "Reset Password"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ForgotPasswordPage;
