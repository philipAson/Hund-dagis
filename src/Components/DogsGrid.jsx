import React, { useEffect, useState } from "react";

const DogsGrid = () => {
  const apiUrl = "https://api.jsonbin.io/v3/b/650d780d0574da7622aeb34a";

  const [dogData, setDogData] = useState([]);

  const overlay = document.getElementById("overlay");
  const overlayImg = document.querySelector("#overlay img");
  const overlayTitle = document.querySelector("#overlay h2");
  const overlayText = document.querySelector("#overlay textarea");

  useEffect(() => {
    loadPage();
  }, []);

  useEffect(() => {
    updateUi(dogData);
  }, [dogData]);

  const loadPage = async () => {
    const response = await fetch(apiUrl);

    const data = await response.json();
    setDogData(data.record);
  };

  const openLightBox = (dog) => {
    console.log("click" + dog.name);
    overlay.classList.toggle("show");
  };

  const updateUi = (data) => {
    const dogGrid = document.getElementById("dog-grid");
    dogGrid.innerHTML = "";

    data.forEach((dog) => {
      const dogTag = document.createElement("div");
      dogTag.className = "dog-tag";
      dogTag.addEventListener("click", () => {
        openLightBox(dog);
      });

      const imgElement = document.createElement("img");
      imgElement.src = dog.img;
      imgElement.alt = dog.name;
      imgElement.className = "dog-img";

      const dogName = document.createElement("h1");
      dogName.innerHTML = dog.name;

      dogTag.append(imgElement, dogName);

      dogGrid.appendChild(dogTag);
    });
  };

  return (
    <div id="dog-grid">
      <section id="overlay">
        <h2></h2>
        <img src="" alt="" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </section>
    </div>
  );
};

export default DogsGrid;
