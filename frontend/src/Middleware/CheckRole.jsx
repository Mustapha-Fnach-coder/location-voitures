import {Navigate,useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Cookies from 'js-cookie';




const MySwal = withReactContent(Swal);

export function PrivateRoute({ children }) {
    const token = Cookies.get('token');
    console.log(token);
    const navigate = useNavigate();
    if (!token) {
        return children; 
    } else {
        MySwal.fire({
            title: "Warning!",
            text: "You are already signed in.",
            icon: "warning"
        }).then(() => {
            navigate(-1);
        }); 
    }
}

export function RoleBasedRoute({ children, role  }) {
    const token = Cookies.get('token');
    const userRole = Cookies.get('role');
    return token && userRole === role  ? children : <Navigate to="/home" />;
}


