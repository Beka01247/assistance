import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu";
import MainHeader from "../MainHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Password from "../../assets/images/password";
import User from "../../assets/images/user";

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
      <div className="flex flex-col items-center">
        <MainHeader toggleMenu={toggleMenu} />
        <div className="font-semibold mt-16 flex flex-col justify-center items-center w-[146px] h-max justify-self-start text-xl">
          Смена данных
        </div>
      </div>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="flex flex-col h-full justify-start items-center mt-32">
        <div className="mt-10">
          <div className="w-[320px] h-[53px] border-b-[1px]">
            <span className="text-[rgba(125,143,157,1)]">Новый логин</span>
            <div className="flex flex-row w-full ">
              <input className="w-full" placeholder="admin"></input>
              <div className="ml-auto mr-2">
                <User />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px] h-[53px] border-b-[1px] mt-7">
          <span className="text-[rgba(125,143,157,1)]">Новый пароль</span>
          <div className="flex flex-row w-full ">
            <input className="w-full" placeholder="root"></input>
            <div className="ml-auto mr-2">
              <Password />
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="rounded-[39px] bg-[rgba(225,55,55,1)] w-[320px] h-[50px] mt-[32px] text-white"
        >
          Войти
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
