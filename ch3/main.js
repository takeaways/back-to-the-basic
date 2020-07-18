/*
1. input
2. add : enter + plus
3. delete : trash icon
*/

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  //1. 텍스트 받아오기
  const text = input.value;
  if (!text.trim()) {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  input.value = '';
  input.focus();

  item.scrollIntoView({ block: 'center' });
}
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerText = text;

  const itemDelete = document.createElement('button');
  itemDelete.setAttribute('class', 'item__delete');
  itemDelete.innerHTML = "<i class='fa fa-trash-o' aria-hidden='true'></i>";
  itemDelete.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(itemName);
  item.appendChild(itemDelete);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

function onDelete() {}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
