const container = document.querySelector('.list');
let uuid = 0;
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
  itemRow.setAttribute('data-id', uuid);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class='fa fa-trash-o' aria-hidden='true' data-id=${uuid}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  uuid++;
  return itemRow;
}

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id='${id}']`);
    toBeDeleted.remove();
  }
});
addBtn.addEventListener('click', (event) => {
  onAdd();
});
container.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
