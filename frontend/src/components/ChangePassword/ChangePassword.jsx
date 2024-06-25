import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu";
import MainHeader from "../MainHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:4010/api/user/login",
    //       { email, password }
    //     );
    //     localStorage.setItem("token", response.data.token);
    //     localStorage.setItem("userId", response.data.user_id);
    //     navigate("/user/natural-disasters");
    //   } catch (error) {
    //     console.error("Login failed:", error);
    //   }
  };

  return (
    <div className="w-full h-full">
      <MainHeader toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="flex items-center justify-center min-h-screen">
        <div className="p-6 bg-white shadow-md rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
