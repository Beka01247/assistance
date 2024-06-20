import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../MainHeader";
import BurgerMenu from "../BurgerMenu";
import ContentCard from "./ContentCard";

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

  const exampleContent = {
    icon: "https://via.placeholder.com/40",
    title: "Экстренная помощь и спасение",
    author: "Андрей Голубев",
    comments: 120,
    time: "25 мин. назад",
  };

  return (
    <div>
      <MainHeader toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-7 ml-8">
        {[
          exampleContent,
          exampleContent,
          exampleContent,
          exampleContent,
          exampleContent,
          exampleContent,
        ].map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
}

export default ContentControl;
