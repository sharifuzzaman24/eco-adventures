import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfilePage = () => {
    const { user, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
    
        try {
            await updateUserProfile({ displayName: name, photoURL: photo });
    
            // Update the local `user` context to trigger a UI update
            setUser((prev) => ({
                ...prev,
                displayName: name,
                photoURL: photo,
            }));
            e.target.reset();
            navigate('/profile')
        } catch (error) {
            console.error("Failed to update profile", error);
            // Handle error appropriately
        }
    };
    


    return (
        <>
            <Navbar></Navbar>
            <div className="pt-32 pb-40 min-h-screen bg-[#E6F9F1] flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-semibold text-[#2ECC71] mb-4">Update Your Profile, {user && user.displayName}!</h1>
                        <p className="text-lg text-gray-700">Update your profile details here.</p>
                    </div>

                    <div className="flex flex-col items-center space-y-6">
                        {/* Profile Image */}
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#3498DB] mb-4">
                            <img
                                src={user.photoURL} // Show updated or existing profile picture
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div className="w-full mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    name="name"
                                    placeholder="Enter your name"
                                    type="text"
                                    id="name"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="w-full mb-4">
                                <label htmlFor="photo" className="block text-sm font-semibold text-gray-700">Photo-URL</label>
                                <input
                                    name="photo"
                                    placeholder="Enter your photo url"
                                    type="text"
                                    id="photo"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            {/* Save Changes Button */}
                            <button
                                type="submit"
                                className="bg-[#3498DB] text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-[#F39C12] transition-colors mt-6"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UpdateProfilePage;
