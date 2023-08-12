const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function render(images) {
  const listGallery = document.querySelector(".gallery");
  listGallery.style.display = "flex";
  listGallery.style.flexDirection = "row";
  listGallery.style.flexWrap = "wrap";
  listGallery.style.paddingLeft = "0";
  listGallery.style.justifyContent = "space-between";
  listGallery.style.listStyle = "none";
  listGallery.style.backgroundColor = "#3d787d";
  listGallery.style.lineHeight = "0";

  const allGallery = images
    .map(
      (item) =>
        `<li><img width = '400' height = '250' src = "${item.url}" alt = "${item.alt}"/></li>`
    )
    .join("");
  listGallery.insertAdjacentHTML("afterbegin", allGallery);
}
render(images);

/*const titleGalery = document.createElement('h1');
titleGalery.textContent = `${Галерея тварин}`;
  document.append(titleGalery);*/
