async function loadUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data.results[0];
}

async function loadMore(elements) {
  const spinner = document.querySelector('.spinner');
  const usersContainer = document.querySelector('#listingTable');
  spinner.classList.add('show');
  const indexes = Array.from({ length: elements }, (_, i) => i);
  const promises = indexes.map(() => loadUser());
  // console.log(promises);
  let userList = await Promise.all(promises);
  userList
    .map((user) => {
      const li = document.createElement('li');
      html = `<div class="user-name"><img src="${user.picture.thumbnail}" alt=""><span> ${user.name.title} ${user.name.first} ${user.name.last}</span></div>
      <div class="age">${user.dob.age}</div>
      <div class="email">${user.email}</div>
      <div class="address">${user.location.country} ${user.location.state} ${user.location.city} ${user.location.street.name} ${user.location.street.number}</div>
      <div class="phone">${user.phone}</div>`;
      li.innerHTML = html;
      return li;
    })
    .forEach((user) => usersContainer.appendChild(user));
  spinner.classList.remove('show');
  document.querySelector('#first-page').scrollIntoView();
}

// function storeUser() {
//   localStorage.setItem('userList', JSON.stringify(userList));
// }

// function restoreUsers() {
//   return JSON.parse(localStorage.getItem('userList'));

// }
