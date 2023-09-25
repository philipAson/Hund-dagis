import React, { useEffect, useState } from "react";

const DogsGrid = () => {
  const apiUrl = "https://api.jsonbin.io/v3/b/650d780d0574da7622aeb34a";

  const [dogData, setDogData] = useState([]);
  //   const [view, setView] = useState(0);

  useEffect(() => {
    // SET DOG DATA!!!
    console.log("API LOADED (setView) ?");
    loadPage();
  }, []);

  useEffect(() => {
    // SET DOG DATA!!!
    // console.log("data => " + JSON.stringify(dogData, null, 2));
    updateUi(dogData);
  }, [dogData]);

  const loadPage = async () => {
    const response = await fetch(apiUrl);
    console.log("got response", response);

    const data = await response.json();
    setDogData(data.record);
  };

  const updateUi = (data) => {
    const dogGrid = document.getElementById("dog-grid");
    dogGrid.innerHTML = "";

    data.forEach((dog) => {
      const dogTag = document.createElement("div");
      dogTag.className = "dog-tag";

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

  return <div id="dog-grid"></div>;
};

export default DogsGrid;
