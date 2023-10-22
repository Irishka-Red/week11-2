const element1 = document.getElementById('input');
const element2 = document.getElementById('button');
const element3 = document.getElementById('ul');
function newElement(){
const newElement = element1.value;
const newElement2 = document.createElement('li');
newElement2.textContent = newElement;
element3.append(newElement2);
input.value = '';
}
element2.addEventListener('click',newElement );
function checkTask(newElement2){
if (newElement2.target.tagName==="LI"){
    newElement2.target.classList.toggle('checked');
}
};
element3.addEventListener('click', checkTask);