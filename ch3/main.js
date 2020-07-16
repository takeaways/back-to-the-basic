/*
1. input
2. add : enter + plus
3. delete : trash icon
*/

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd(){
    //1. 텍스트 받아오기
    const text = input.value;
    //2. 아이템 만들기
    const item = createItem(text);
    //3. 아이템 추가
    items.appendChild(item)
    //4. input 내용 reset
    input.value = "";
    input.focus();
}
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class','item__name');
    itemName.textContent = text;

    const itemDelete =document.createElement('button');
    itemDelete.setAttribute('class','item__delete');
    const icon = document.createElement('i');
    icon.setAttribute('class','fa fa-trash-o')
    icon.setAttribute('aria-hidden','true')

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item__divider');

    item.appendChild(itemName)
    itemDelete.appendChild(icon);
    item.appendChild(itemDelete)
    itemRow.appendChild(item)
    itemRow.appendChild(itemDivider);
    return itemRow;
}


function onDelete(){}


addBtn.addEventListener('click', ()=>{
    onAdd()
})