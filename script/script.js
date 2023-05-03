async function loadFact() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  // console.log(data.results[0]);
  return data.results[0];
}

async function loadMore() {
  const spinner = document.querySelector('.spinner');
  const usersContainer = document.querySelector('#listingTable');
  spinner.classList.add('show');
  const promises = [loadFact(), loadFact(), loadFact(), loadFact(), loadFact()];
  const facts = await Promise.all(promises);
  facts
    .map((user) => {
      const li = document.createElement('li');
      html = `<div class="user-name"><img src="${user.picture.thumbnail}" alt=""><span> ${user.name.title} ${user.name.first} ${user.name.last}</span></div>
      <span class="age">${user.dob.age}</span>
      <span class="email">${user.email}</span>
      <span class="address">${user.location.country} ${user.location.city} ${user.location.street.name} ${user.location.street.number}</span>
      <span class="phone">${user.phone}</span>`;
      li.innerHTML = html;
      return li;
    })
    .forEach((user) => usersContainer.append(user));
  spinner.classList.remove('show');
}
