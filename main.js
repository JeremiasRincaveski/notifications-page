fetch('./data.json')
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    const numberNotifications = document.querySelector('.header__notifications')
    numberNotifications.innerHTML = document.querySelectorAll('.notification.new').length
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    let club = item.description ? item.description.split(' ')[item.description.split(' ').length - 1].toLowerCase() : ''
    regexClub = (/club/).test(club)
    li.className = `notification ${item.new ? 'new' : ''}`
    li.innerHTML = `
      <img src="${item.avatar}" alt="avatar" class="notification__img">
      <div class="notification__container">
      <p class="notification__paragraph"><a href='#' class='name'>${item.name}</a> ${item.action}${item.description ? ` <a href='#' class='description ${regexClub ? 'club' : ''}'>${item.description}</a>` : ''} ${item.new ? "<span class='new'></span>" : ''} </p>
      <p class='time'>${item.time}</p>
      ${item.message ? `<div class='message'><p>${item.message}</p></div>` 
        : ''}
      </div>
      ${item.picture ? `<img class='img' src='${item.picture}' alt=''/>` : ''}
    `;
    ul.appendChild(li)
  })
  const list = Array.from(document.querySelectorAll('li'))
  list.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('new')
      if (item.querySelector('.new')) {item.querySelector('.new').remove()}
      const numberNotifications = document.querySelector('.header__notifications')
      numberNotifications.innerHTML = document.querySelectorAll('.notification.new').length
    })
  })
})

const button = document.querySelector('.header__button')
button.addEventListener('click', (e) => {
  const list = Array.from(document.querySelectorAll('li'))
  list.forEach(item => {
    item.classList.remove('new')
    if (item.querySelector('.new')) {item.querySelector('.new').remove()}
    const numberNotifications = document.querySelector('.header__notifications')
    numberNotifications.innerHTML = document.querySelectorAll('.notification.new').length
  })
})