let page = localStorage.getItem('pages')
  ? JSON.parse(localStorage.getItem('pages'))
  : 1;
let records_per_page = localStorage.getItem('changeCount')
  ? parseInt(localStorage.getItem('changeCount'))
  : 1;

let pages = restore();
console.log(pages);
let listing_table = document.querySelector('#listingTable');
changePage(pages);

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
    console.log(page);
    changePage(page);
    store();

    // localStorage.setItem('pages',  page)
  }
}

async function changePage(page) {
  let btn_next = document.querySelector('#btn_next');
  let btn_prev = document.querySelector('#btn_prev');
  let page_span = document.querySelector('#page');
  let firstPage = document.querySelector('#first-page');

  // Validate page
  if (page < 1) page = 1;
  if (page > 10) page = 10;

  listing_table.innerHTML = '';

  for (
    let i = (page - 1) * records_per_page;
    i < page * records_per_page;
    i++
  ) {
    loadMore();
  }

  page_span.innerHTML = page;

  if (page == 1) {
    btn_prev.style.visibility = 'hidden';
    firstPage.style.visibility = 'hidden';
  } else {
    btn_prev.style.visibility = 'visible';
    firstPage.style.visibility = 'visible';
  }

  if (page == 10) {
    btn_next.style.visibility = 'hidden';
  } else {
    btn_next.style.visibility = 'visible';
  }
}

// window.onload = function () {
//   changePage(pages);
//   console.log(pages);
// };

function ChooseRowsCount(chosen) {
  let listing_table = document.querySelector('#listingTable');
  if (chosen === '5') {
    records_per_page = 1;
    listing_table.style.minHeight = '500px';
    changePage(page);
    localStorage.setItem('changeCount', records_per_page);
  }
  if (chosen === '10') {
    records_per_page = 2;
    listing_table.style.minHeight = '900px';
    changePage(page);
    localStorage.setItem('changeCount', records_per_page);
  }
}

function store() {
  localStorage.setItem('pages', JSON.stringify(page));
}

function restore() {
  return JSON.parse(localStorage.getItem('pages'));
}
