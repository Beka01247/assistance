import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../MainHeader";
import BurgerMenu from "../BurgerMenu";
import Back from "./../../assets/images/back";
import SystemDisasters from "./System/SystemDisasters";
import CreateArticle from "./CreateArticle";
import UserDisasters from "./User/UserDisasters";
import ExtendedArticle from "./ExtendedArticle";

function CategoryControl() {
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
      <h1 className="text-center text-2xl font-semibold mt-8 mb-2">
        Стихийные бедствия
      </h1>
      <div className="w-full flex items-center relative">
        {(tab === 5 || tab === 3) && (
          <div
            className="absolute left-32 -top-0 font-medium text-lg flex items-center gap-4 cursor-pointer"
            onClick={() => setTab((prev) => (prev === 5 ? 0 : 0))}
          >
            <Back />
            Назад
          </div>
        )}
        <div className="w-max flex mx-auto mb-8 text-xl text-[#1F1F1F] gap-6 font-medium relative">
          <span
            onClick={() => setTab(0)}
            className={
              "cursor-pointer px-2 " +
              (tab === 0 || tab === 5
                ? `opacity-100 border-b-2 border-[#1F1F1F]`
                : `opacity-40`)
            }
          >
            Системные
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
            Пользовательские
          </span>
        </div>
        <button
          className="bg-[#E13737] absolute text-white px-16 py-2 rounded-2xl mt-4 right-[19.5%] -top-4"
          onClick={() => setTab(3)}
        >
          Создать статью
        </button>
      </div>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      {tab === 0 && <SystemDisasters setTab={setTab} />}
      {tab === 1 && <UserDisasters setTab={setTab} />}
      {tab === 3 && <CreateArticle />}
      {tab === 5 && <ExtendedArticle />}
    </div>
  );
}

export default CategoryControl;
