/*
1. input
2. add : enter + plus
3. delete : trash icon
*/

const items = document.querySelector("items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd(){
    //1. 텍스트 받아오기
    const text = input.value;
    //2. 아이템 만들기
    const item = createItem(text);
    //3. 아이템 추가
    //4. input 내용 reset
    
    
    // items.appendChild
    input.value = "";
    input.focus();
}
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item__divider')
}
function onDelete(){}


addBtn.addEventListener('click', ()=>{
    onAdd()
})