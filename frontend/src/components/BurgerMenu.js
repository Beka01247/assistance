import { useState } from "react";
import Logo from "../assets/images/logo.jsx";

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`flex flex-column fixed inset-y-0 left-0 bg-white w-[437px] z-50 transform ${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } transition-transform duration-300`}
      >
        <nav className="flex flex-col items-start ml-4 mt-3">
          <NavItem className="mb-4" text="Управление контентом" />
          <NavItem className="mb-4" text="Модерация контента" />
          <NavItem className="mb-4" text="Оповещения" />
          <NavItem className="mb-4" text="Управление категориями ситуаций" />
          <NavItem className="mb-4" text="Модерация поступающих происшествий" />
          <NavItem className="mb-4" text="Чат с модерацией" />
          <NavItem className="mb-4" text="Учебные центры" />
          <NavItem className="mb-4" text="Смена пароля" />
          <div className="ml-4 flex flex-row items-center mt-auto mb-4">
            <Logo />
            <div className="bebas-neue-regular h-[34px] ml-2 text-[rgba(225,55,55,1)] mt-2">
              СПАСАТИЛИ
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ text, className }) => {
  return (
    <a
      href="#"
      className={`text-gray-800 py-2 px-4 block hover:bg-gray-100 ${className}`}
    >
      {text}
    </a>
  );
};

export default BurgerMenu;
