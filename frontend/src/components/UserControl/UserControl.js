import React, { useState, useEffect } from "react";
import axios from "axios";
import BurgerMenu from "../BurgerMenu";
import MainHeader from "../MainHeader";
import UserCard from "./UserCard";

function UserControl() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4010/api/admin/users",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  const user = {
    photo: "https://picsum.photos/200",
    id: "12345",
    name: "John",
    secondname: "Doe",
    phone: "123-456-7890",
    email: "johndoe@example.com",
  };

  return (
    <div>
      <MainHeader toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      {/* 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
          </div>
        ))}
      </div> 
*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 ml-[50px] mt-3">
        {[user, user, user, user, user].map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserControl;
