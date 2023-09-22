import React, { useEffect, useState } from "react";

const DogsGrid = () => {
  
  const apiUrl = "https://api.jsonbin.io/v3/b/650d780d0574da7622aeb34a";


  const getDogs = async () => {};

  const imgUrl = (img) => {};

  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    // SET DOG DATA!!!
    
  }, []);

  const updateUi = (data) => {
    data.dogs.dog.forEach((dog) => {
      const dogElement = document.createElement("div");
      dogElement.setAttribute("class", dog - element);

      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", ImgUrl);
    });
  };

  const loadPage = async () => {};

  return (
    <div className="dog-grid">
      <div>DogsGrid</div>
    </div>
  );
};

export default DogsGrid;
