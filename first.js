const newEl = document.createElement("h2");
newEl.textContent = "Strike is comming";
newEl.id = "second";

const element = document.getElementById("first");
element.after(newEl);

const newel2 = document.createElement('h3');
newel2.textContent = "Diwali coming";
newel2.id = "third"
newel2.className = "third1"; 
newel2.style.backgroundColor = "red";
newEl.after(newel2);

const list = document.createElement('li');
list.textContent = "Milk";
const list2 = document.createElement('li');
list2.textContent = "Bread";
const ul = document.getElementById("listing");
ul.append(list);
ul.prepend(list2)

const arr1 = ["Milk","Pneer","Tofu","Tea"]

const ul1 = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let food of arr1)
{
    const listt = document.createElement('li');
    listt.textContent = food;
    fragment.append(listt);

}
ul1.append(fragment);
const s1 = document.getElementById("first");
s1.remove();