// // import  { useState } from "react";
// // import axios from "axios";
// // import Swal from "sweetalert2";
// // import "./login.css";
// // import Cookies from 'js-cookie';
// // import { useNavigate } from "react-router-dom";

// function Login() {
//     // const navigate = useNavigate();
//     // const [formData, setFormData] = useState({
//     //     UserName: "",
//     //     password: "",
//     //     password_confirmation: "",
//     //     nom: "",
//     //     prenom: "",
//     //     adresse: "",
//     //     telephone: "",
//     //     email: "",
//     //     date_naissance: "",
//     //     ville: "",
//     // });

//     // const [errors, setErrors] = useState({});

//     // const handleChange = (e) => {
//     //     setFormData({
//     //         ...formData,
//     //         [e.target.name]: e.target.value,
//     //     });
//     // };

//     // const validateForm = () => {
//     //     const newErrors = {};

//     //     if (!formData.UserName) {
//     //         newErrors.UserName = "User name is required.";
//     //     }

//     //     if (!formData.password) {
//     //         newErrors.password = "Password is required.";
//     //     } else if (formData.password.length < 8) {
//     //         newErrors.password = "Password must be at least 8 characters.";
//     //     }

//     //     if (formData.password !== formData.password_confirmation) {
//     //         newErrors.password_confirmation = "Passwords do not match.";
//     //     }

//     //     if (!formData.nom) {
//     //         newErrors.nom = "Nom is required.";
//     //     }

//     //     if (!formData.prenom) {
//     //         newErrors.prenom = "Prenom is required.";
//     //     }

//     //     if (!formData.adresse) {
//     //         newErrors.adresse = "Adresse is required.";
//     //     }

//     //     if (!formData.telephone) {
//     //         newErrors.telephone = "Telephone is required.";
//     //     } else if (!/^\+?[0-9]{7,15}$/.test(formData.telephone)) {
//     //         newErrors.telephone = "Invalid phone number format.";
//     //     }

//     //     if (!formData.email) {
//     //         newErrors.email = "Email is required.";
//     //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//     //         newErrors.email = "Invalid email format.";
//     //     }

//     //     setErrors(newErrors);
//     //     return Object.keys(newErrors).length === 0;
//     // };

//     // const handleRegister = async (e) => {
//     //     e.preventDefault();
//     //     if (!validateForm()) {
//     //         return;
//     //     }
//     //     try {
//     //         const response = await axios.post("http://127.0.0.1:8000/api/register", formData);
//     //         Swal.fire({
//     //             icon: "success",
//     //             title: "Registration Successful!",
//     //             text: "You have successfully registered.",
//     //         });
//     //     } catch (error) {
//     //         Swal.fire({
//     //             icon: "error",
//     //             title: "Registration Failed",
//     //             text: error.response?.data.message || error.message,
//     //         });
//     //     }
//     // };

//     // const handleLogin = async (e) => {
//     //     e.preventDefault();
//     //     if (!formData.UserName || !formData.password) {
//     //         setErrors({ login: "Username and Password are required." });
//     //         return;
//     //     }
//     //     try {
//     //         const response = await axios.post("http://127.0.0.1:8000/api/login", {
//     //             UserName: formData.UserName,
//     //             password: formData.password,
//     //         });
//     //         Cookies.set('token', response.data.token, { secure: true, sameSite: 'Strict' });
//     //         Cookies.set('role', response.data.role, { secure: true, sameSite: 'Strict' });
//     //         Cookies.set('user', JSON.stringify(response.data.user), { secure: true, sameSite: 'Strict' });
//     //         console.log(response.data.role === "user");
//     //         console.log(response.data.role);
//     //         if (response.data.role === "user") {
//     //             navigate("/home-client");
//     //         } else if (response.data.role === "admin") {
//     //             navigate("/dashboard");
//     //         } else if (response.data.role === "superAdmin") {
//     //             navigate("/superDashboard");
//     //         }

//     //         Swal.fire({
//     //             icon: "success",
//     //             title: "Login Successful!",
//     //             text: "You have successfully logged in.",
//     //         });
//     //     } catch (error) {
//     //         Swal.fire({
//     //             icon: "error",
//     //             title: "Login Failed",
//     //             text: error.response?.data.message || error.message,
//     //         });
//     //     }
//     // };

//     const handleRegister = async () => {};
//     const handleLogin = async () => {};

//     return (
//         <div className="main">
//             <input type="checkbox" id="chk" aria-hidden="true" />

//             <div className="signup">
//                 <form onSubmit={handleRegister}>
//                     <label htmlFor="chk" aria-hidden="true">Sign up</label>
//                     <input
//                         type="text"
//                         name="UserName"
//                         placeholder="User name"
//                         value={formData.UserName}
//                         onChange={handleChange}
//                     />
//                     {errors.UserName && <span className="error">{errors.UserName}</span>}

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     {errors.password && <span className="error">{errors.password}</span>}

//                     <input
//                         type="password"
//                         name="password_confirmation"
//                         placeholder="Confirm Password"
//                         value={formData.password_confirmation}
//                         onChange={handleChange}
//                     />
//                     {errors.password_confirmation && <span className="error">{errors.password_confirmation}</span>}

//                     <input
//                         type="text"
//                         name="nom"
//                         placeholder="Nom"
//                         value={formData.nom}
//                         onChange={handleChange}
//                     />
//                     {errors.nom && <span className="error">{errors.nom}</span>}

//                     <input
//                         type="text"
//                         name="prenom"
//                         placeholder="Prenom"
//                         value={formData.prenom}
//                         onChange={handleChange}
//                     />
//                     {errors.prenom && <span className="error">{errors.prenom}</span>}

//                     <input
//                         type="text"
//                         name="adresse"
//                         placeholder="Adresse"
//                         value={formData.adresse}
//                         onChange={handleChange}
//                     />
//                     {errors.adresse && <span className="error">{errors.adresse}</span>}

//                     <input
//                         type="text"
//                         name="telephone"
//                         placeholder="Telephone"
//                         value={formData.telephone}
//                         onChange={handleChange}
//                     />
//                     {errors.telephone && <span className="error">{errors.telephone}</span>}

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <span className="error">{errors.email}</span>}

//                     <input
//                         type="date"
//                         name="date_naissance"
//                         placeholder="Date de Naissance"
//                         value={formData.date_naissance}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="text"
//                         name="ville"
//                         placeholder="Ville"
//                         value={formData.ville}
//                         onChange={handleChange}
//                     />

//                     <button type="submit">Sign up</button>
//                 </form>
//             </div>

//             <div className="login">
//                 <form onSubmit={handleLogin}>
//                     <label htmlFor="chk" aria-hidden="true">Login</label>
//                     <input
//                         type="text"
//                         name="UserName"
//                         placeholder="UserName"
//                         value={formData.UserName}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     {errors.login && <span className="error">{errors.login}</span>}
//                     <button type="submit">Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;
