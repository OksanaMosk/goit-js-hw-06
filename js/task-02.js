const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');
  ingredients.map((i) => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = i;
  liIngredient.classList = "item";
    listIngredients.appendChild(liIngredient);
 
});

