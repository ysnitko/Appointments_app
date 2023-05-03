loadMore();

async function loadFact() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0]);
    return data.results[0];
  }

  async function loadMore() {
    const spinner = document.querySelector('.spinner');
    const usersContainer = document.querySelector('.users-container');
    spinner.classList.add('show');
    const promises = [loadFact(), loadFact(), loadFact(), loadFact(), loadFact()];
    const facts = await Promise.all(promises);

    facts.map(user => {
      const li = document.createElement('li');
      html = `<img src="${user.picture.thumbnail}" alt="">
      <span class="user-name">${user.name.title} ${user.name.first} ${user.name.last}</span>
      <span class="age">${user.dob.age}</span>
      <span class="email">${user.email}</span>
      <span class="address">${user.location.country} ${user.location.state} ${user.location.city} ${user.location.city} ${user.location.street.name} ${user.location.street.number}</span>
      <span class="phone">${user.phone}</span>`
      li.innerHTML = html;
      return li;
    })
      .forEach(user => usersContainer.append(user));
    document.querySelector('#loadMore').scrollIntoView();
    spinner.classList.remove('show');
  }