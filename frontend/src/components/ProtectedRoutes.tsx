import {useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import axios from "axios";

export default function ProtectedRoutes(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the user is authenticated by calling an endpoint
        axios.get("api/check-auth", { withCredentials: true }) // Assuming session cookies
            .then((res) => {
                setIsAuthenticated(res.status === 200);
                setLoading(false);
            })
            .catch(() => {
                setIsAuthenticated(false);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}