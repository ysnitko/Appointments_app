let page = 1;
let records_per_page = 1;
let pages = localStorage.getItem('pages')
let listing_table = document.querySelector('#listingTable');
changePage(pages)
myFunction('5')

function prevPage() {
  if (page > 1) {
    page--;
    changePage(page);
    return
    // localStorage.setItem('pages',  page)
  }
}

function nextPage() {
  if (page < 10) {
    page++;
    changePage(page);
    return
    // localStorage.setItem('pages',  page)
  }
  
}

async function changePage(page) {
  let btn_next = document.querySelector('#btn_next');
  let btn_prev = document.querySelector('#btn_prev');
  let page_span = document.querySelector('#page');

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
    localStorage.setItem('pages',  page)
  }

  page_span.innerHTML = page;

  if (page == 1) {
    btn_prev.style.visibility = 'hidden';
  } else {
    btn_prev.style.visibility = 'visible';
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
