const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function render() {
  const listGallery = document.querySelector('.gallery');
  listGallery.style.display = 'flex'; 
listGallery.style.flexDirection = 'row';
  listGallery.style.flexWrap = 'wrap';
  listGallery.style.paddingLeft = '0';
  listGallery.style.justifyContent = "space-between"
  listGallery.style.columnGap = '((100% - 600px) / 2)';
  listGallery.style.listStyle = 'none';
  listGallery.style.backgroundColor = '#999999'
  listGallery.style.lineHeight = '0';
  
  const allGallery = images.map(
    (
      item
    ) =>
      `<li><img width = 300px height = 200px src = "${item.url}" alt = "${item.alt}"/></li>`
  )
    .join('');
  listGallery.insertAdjacentHTML("afterbegin", allGallery);
 
}
render();

/*const titleGalery = document.createElement('h1');
titleGalery.textContent = `${Галерея тварин}`;
  document.append(titleGalery);*/
