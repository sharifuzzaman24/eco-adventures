import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import useDocumentTitle from "../useDocumentTitle";

const ProfilePage = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        
        navigate("/update-profile");
    };
    useDocumentTitle();

    return (
        <>
            <Navbar></Navbar>
            <div className="pt-32 pb-40 min-h-screen bg-[#E6F9F1] flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-[#2ECC71] mb-4">Welcome, {user && user.displayName}!</h1>
                    <p className="text-lg text-gray-700">Here’s your profile information.</p>
                </div>

                <div className="flex flex-col items-center space-y-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#3498DB] mb-4">
                        <img src={user && user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4 text-center">
                        <p className="text-xl text-gray-800 font-semibold">Name: {user && user.displayName}</p>
                        <p className="text-xl text-gray-800 font-semibold">Email: {user && user.email}</p>
                    </div>
                    <button
                        onClick={handleUpdateProfile}
                        className="bg-[#3498DB] text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-[#F39C12] transition-colors mt-6">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ProfilePage;
