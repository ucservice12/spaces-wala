import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage';

export default function PrivateRoute({ children }) {
    const { user, loading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (loading) return <LoadingPage />;

    if (!user) {
        // Store original path using location.state
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
