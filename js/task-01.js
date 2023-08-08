// variant 1
const allCategories = Array.from(document.querySelectorAll('#categories > li'));
  allCategories.forEach(element => {
  console.dir(`Number of categories: ${allCategories.length}`);    
 });

const everyCategory = Array.from (document.querySelectorAll('.item > h2'));
 everyCategory.forEach (element => {
    console.dir(`Category: ${element.textContent}`);
    console.dir(`Elements: ${element.nextElementSibling.children.length}`);
 }); 
   
// variant 2
 /* 
const allCategories = Array.from(document.querySelectorAll('#categories'));
allCategories.forEach(element => {
    console.log(`Number of categories: ${element.children.length}`)
}
);
const everyCategory = Array.from(document.querySelectorAll('.item > ul'))
everyCategory.forEach(element => {
  console.log(`Category: ${element.previousElementSibling.textContent}`)
    console.log(`Elements: ${element.children.length}`)
})
*/

