let current_page = 1;
let records_per_page = 1;

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < 10) {
    current_page++;
    changePage(current_page);
  }
}

async function changePage(page) {
  let btn_next = document.getElementById('btn_next');
  let btn_prev = document.getElementById('btn_prev');
  let listing_table = document.getElementById('listingTable');
  let page_span = document.getElementById('page');

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
  } else {
    btn_prev.style.visibility = 'visible';
  }

  if (page == 10) {
    btn_next.style.visibility = 'hidden';
  } else {
    btn_next.style.visibility = 'visible';
  }
}

window.onload = async function () {
  changePage(1);
};
