let page = restore() || 1;
let recordsOnPage = restoreRows() || 1;
console.log(page);
const listingTable = document.querySelector('#listingTable');
const select = document.querySelector('#select-value');
changePage(page);

function prevPage() {
  if (page > 1) {
    page--;
    changePage(page);
    store();
  }
}

function nextPage() {
  if (page < 10) {
    page++;
    changePage(page);
    store();
  }
}

function changePage(page) {
  let pageSpan = document.querySelector('#page');
  if (page < 1) page = 1;
  if (page > 10) page = 10;
  listingTable.innerHTML = '';
  for (let i = (page - 1) * recordsOnPage; i < page * recordsOnPage; i++) {
    loadMore();
  }
  pageSpan.innerHTML = page;
  btnControl();
}

function btnControl() {
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
  if (select.value === '5') {
    recordsOnPage = 1;
    listingTable.style.minHeight = '500px';
    changePage(page);
    storeRows();
  }
  if (select.value === '10') {
    recordsOnPage = 2;
    listingTable.style.minHeight = '900px';
    changePage(page);
    storeRows();
  }
}

function store() {
  localStorage.setItem('pages', JSON.stringify(page));
}

function restore() {
  return JSON.parse(localStorage.getItem('pages'));
}

function storeRows() {
  localStorage.setItem('rows', JSON.stringify(recordsOnPage));
}

function restoreRows() {
  return JSON.parse(localStorage.getItem('rows'));
}
