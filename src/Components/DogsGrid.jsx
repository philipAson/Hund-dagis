import React, { useEffect, useState } from "react";

const DogsGrid = () => {
  const apiUrl = "https://api.jsonbin.io/v3/b/650d780d0574da7622aeb34a";

  const [dogData, setDogData] = useState([]);
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [dogToShow, setDogToShow] = useState(null);

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
    setDogToShow(dog);
    setLightboxDisplay(true);
  };

  const hideLightBox = () => {
    setLightboxDisplay(false);
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
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <img id="lightbox-img" src={dogToShow.img}></img>
          <h3>{dogToShow.name}</h3>
          <p>
            Sex: {dogToShow.sex} <br />
            Breed: {dogToShow.breed} <br />
            Age: {dogToShow.age} <br />
            Chip: {dogToShow.chipNumber}
          </p>
          <h3>Owner</h3>
          <p>
            Name: {dogToShow.owner.name} {dogToShow.owner.lastName} <br />
            Phone: {dogToShow.owner.phoneNumber}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DogsGrid;
