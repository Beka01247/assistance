import React, { useState } from "react";
import MoreVertical from "./../../assets/images/morevertical";
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleDelete = () => {
    console.log("Delete");
  };
  const navigate = useNavigate();
  return (
    <div className="flex items-center p-4">
      <img
        src="https://via.placeholder.com/40" // Replace with actual profile image URL
        alt="Profile"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <div className="text-gray-900 font-semibold">Андрей Голубев</div>
        <div className="text-gray-500 text-sm">Очевидец</div>
      </div>
      <div className="ml-auto relative">
        <MoreVertical toggleMenu={toggleMenu} />
        {menuVisible && (
          <div className="absolute right-0 top-12 w-56 bg-white border rounded-lg shadow-xl z-10">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
                onClick={handleEdit}
              >
                Посмотреть профиль
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
                onClick={() => navigate("/admin/user-control/activity")}
              >
                Посмотреть активность
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 text-center"
                onClick={handleDelete}
              >
                Удалить
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="p-4">
      <div className="text-gray-500 text-sm mb-2 -mt-4">
        Дата создания: 17 апр в 18:23
      </div>
      <div className="text-gray-900 font-semibold text-lg mb-2">
        Предупреждение
      </div>
      <img
        src="https://via.placeholder.com/400x200" // Replace with actual image URL
        alt="Content"
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="text-gray-700">
        Уважаемые жители Алматы,
        <br />
        <br />
        Служба гражданской обороны сообщает о возможном наступлении
        землетрясения в вашем районе. Просим вас принять необходимые меры
        предосторожности и следовать рекомендациям экстренных служб:
        <br />
        <br />
        1. Сохраните спокойствие: Помните, что спокойное поведение может спасти
        жизнь. Попытайтесь оставаться спокойными и помогите остальным сохранить
        хладнокровие.
        <br />
        2. Укройтесь под прочной мебелью: Если вы в помещении, укройтесь под
        прочным столом или стойте под косяком двери.
        <br />
        3. Избегайте поврежденных объектов: Если вы находитесь на улице, не
        входите внутрь поврежденных зданий, не подходите близко к поврежденным
        сооружениям.
        <br />
        4. Следите за новостями: Если вы находитесь в безопасном месте,
        оставайтесь там и следите за новостями.
      </div>
    </div>
  );
};

const NotificationCard = () => {
  return (
    <div className="max-w-md mx-auto">
      <ProfileSection />
      <ContentSection />
    </div>
  );
};

const ExtendedArticle = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <NotificationCard />
    </div>
  );
};

export default ExtendedArticle;
