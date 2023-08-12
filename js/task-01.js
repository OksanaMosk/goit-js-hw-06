const allCategories = document.getElementById("categories").children.length;
console.dir(`Number of categories: ${allCategories}`);
const everyCategory = Array.from(document.querySelectorAll(".item > h2"));
everyCategory.forEach((element) => {
  console.dir(`Category: ${element.textContent}`);
  console.dir(`Elements: ${element.nextElementSibling.children.length}`);
});
