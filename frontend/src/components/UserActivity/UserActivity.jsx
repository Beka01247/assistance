import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../MainHeader";
import BurgerMenu from "../BurgerMenu";
import Messages from "./../ContentControl/Messages/Messages";
import Themes from "./../ContentControl/Themes/Themes";
import AllDisasters from "../CategoryControl/All/AllDisasters";
import Incidents from "./../IncidentModeration/Incidents";

function UserActivity() {
  const [contents, setContents] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchContents();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchContents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4010/api/admin/contents",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setContents(response.data);
    } catch (error) {
      console.error("Error fetching contents:", error);
    }
  };

  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col">
      <MainHeader toggleMenu={toggleMenu} />
      <div className="w-full flex items-center relative">
        <div className="w-max flex mx-auto mt-8 text-lg text-[#1F1F1F] gap-6 font-medium">
          <span
            onClick={() => setTab(0)}
            className={
              "cursor-pointer px-2 " +
              (tab === 0
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Сообщения на форуме
          </span>
          <span
            onClick={() => setTab(1)}
            className={
              "cursor-pointer px-2 " +
              (tab === 1
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Статьи на форуме
          </span>
          <span
            onClick={() => setTab(2)}
            className={
              "cursor-pointer px-2 " +
              (tab === 2
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Объявления
          </span>
          <span
            onClick={() => setTab(3)}
            className={
              "cursor-pointer px-2 " +
              (tab === 3
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Сообщения о бедствии
          </span>
          <span
            onClick={() => setTab(4)}
            className={
              "cursor-pointer px-2 " +
              (tab === 4
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Запрошенные инциденты
          </span>
          <span
            onClick={() => setTab(5)}
            className={
              "cursor-pointer px-2 " +
              (tab === 5
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Отклики на происшествия
          </span>
        </div>
      </div>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      {tab === 0 && <Messages />}
      {tab === 1 && <Themes />}
      {tab === 2 && <AllDisasters />}
      {tab === 3 && <AllDisasters />}
      {tab === 4 && <Incidents />}
    </div>
  );
}

export default UserActivity;
