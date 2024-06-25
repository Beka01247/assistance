import React from "react";

function TabSwitcher({ tab, setTab }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-center mb-6 rounded-full w-max px-16 shadow-lg h-16 mt-8 bg-white gap-4 border-2 border-gray-200">
        <button
          className={
            `text-lg mr-4 ` +
            (tab === 0 ? "text-red-500 font-semibold" : "text-red-300")
          }
          onClick={() => setTab(0)}
        >
          Действующие центры
        </button>
        <button
          className={
            `text-lg mr-4 ` +
            (tab === 1 ? "text-red-500 font-semibold" : "text-red-300")
          }
          onClick={() => setTab(1)}
        >
          Добавить центр
        </button>
      </div>
    </div>
  );
}

export default TabSwitcher;
