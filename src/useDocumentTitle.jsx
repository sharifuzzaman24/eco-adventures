import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;

      
        if (pathname === "/") {
            document.title = "Home | Eco Adventures";
        } else if (pathname === "/login") {
            document.title = "Login | Eco Adventures";
        } else if (pathname === "/register") {
            document.title = "Register | Eco Adventures";
        } else if (pathname === "/profile") {
            document.title = "Profile | Eco Adventures";
        } else if (pathname === "/update-profile") {
            document.title = "Update Profile | Eco Adventures";
        } else if (pathname === "/forgot-password") {
            document.title = "Forgot Password | Eco Adventures";
        } else {
            document.title = "Adventure | Eco Adventures";
        }
    }, [location]);
};

export default useDocumentTitle;
