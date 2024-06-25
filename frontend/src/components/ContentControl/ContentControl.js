import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../MainHeader";
import BurgerMenu from "../BurgerMenu";
import Themes from "./Themes/Themes";
import ExpandedForumTheme from "./Themes/ExpandedForumTheme";
import Back from "./../../assets/images/back";
import Messages from "./Messages/Messages";
import WordFilter from "./WordFilter/WordFilter";
import Certificates from "./Certificates/Certificates";

function ContentControl() {
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
        {(tab === 5 || tab === 3) && (
          <div
            className="absolute left-32 top-8 font-medium text-lg flex items-center gap-4 cursor-pointer"
            onClick={() => setTab((prev) => (prev === 5 ? 0 : 0))}
          >
            <Back />
            Назад
          </div>
        )}
        <div className="w-max flex mx-auto my-8 text-xl text-[#1F1F1F] gap-6 font-medium">
          <span
            onClick={() => setTab(0)}
            className={
              "cursor-pointer px-2 " +
              (tab === 0 || tab === 5
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Темы
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
            Сообщения
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
            Сертификаты
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
            Фильтрация слов
          </span>
        </div>
      </div>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      {tab === 0 && <Themes setTab={setTab} />}
      {tab === 2 && <Certificates />}
      {tab === 1 && <Messages />}
      {tab === 3 && <WordFilter />}
      {tab === 5 && <ExpandedForumTheme />}
    </div>
  );
}

export default ContentControl;
