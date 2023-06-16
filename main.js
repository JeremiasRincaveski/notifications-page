const ul = document.querySelector('ul')

fetch('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  data.forEach(item => {
    const li = document.createElement('li');
    li.className = `notification ${item.new ? 'new' : ''}`;
    li.innerHTML = `
      <img src="${item.avatar}" alt="avatar" class="notification__img">
      <div class="notification__container">
      <p class="notification__paragraph"><span class='name'>${item.name}</span> ${item.action} <span class='description'>${item.description}</span>${item.new ? "<span class='new'></span>" : ''} </p>
      <span>${item.time}</span>
      ${item.message ? `
        <div class='message'>
          <p>${item.message}</p>
        </div>
        ` 
        : ''}
      </div>
      ${item.picture ? `<img class='img' src='${item.picture}' alt=''/>` : ''}
    `;
    ul.appendChild(li);
  });
});