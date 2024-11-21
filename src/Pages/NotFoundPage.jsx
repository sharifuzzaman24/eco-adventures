import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#E6F9F1]">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-5xl font-semibold text-[#2ECC71] mb-4">404</h1>
                <p className="text-xl text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-[#3498DB] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#F39C12] transition-colors">
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;
