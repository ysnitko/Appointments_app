let page = (restore() && restore().page) || 1;
let elements = (restore() && restore().rows) || 5;
const listingTable = document.querySelector('#listingTable');
const select = document.querySelector('#select-value');
currentPage(page, elements);

function prevPage() {
  if (page > 1) {
    page--;
    currentPage(page, elements);
    store();
  }
}

function nextPage() {
  if (page < 10) {
    page++;
    currentPage(page, elements);
    store();
  }
}

function goToFirst() {
  page = 1;
  store();
  currentPage(page, elements);
}

function currentPage(page, elements) {
  const pageSpan = document.querySelector('#page');
  select.selectedIndex = (restore() && restore().selected) || 0;
  store();
  if (page < 1) page = 1;
  if (page > 10) page = 10;
  listingTable.innerHTML = '';
  for (let index = page - 1; index < page; index++) {
    renderList(elements);
  }
  pageSpan.innerHTML = page;
  btnControls();
}

function btnControls() {
  let btnNext = document.querySelector('#btn_next');
  let btnPrev = document.querySelector('#btn_prev');
  let firstPage = document.querySelector('#first-page');
  if (page == 1) {
    btnPrev.classList.add('hidden');
    firstPage.classList.add('hidden');
  } else {
    btnPrev.classList.remove('hidden');
    firstPage.classList.remove('hidden');
  }

  if (page == 10) {
    btnNext.classList.add('hidden');
  } else {
    btnNext.classList.remove('hidden');
  }
}

function ChooseRowsCount() {
  if (select.value === '1') {
    elements = 5;
    select.selectedIndex = 0;
    store();
    currentPage(page, elements);
  }
  if (select.value === '2') {
    elements = 10;
    select.selectedIndex = 1;
    store();
    currentPage(page, elements);
  }
}

function store() {
  localStorage.setItem(
    'pages',
    JSON.stringify({
      page: page,
      rows: elements,
      selected: select.selectedIndex,
    })
  );
}

function restore() {
  return JSON.parse(localStorage.getItem('pages'));
}
