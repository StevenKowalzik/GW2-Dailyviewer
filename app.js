
const baseUrl = 'https://api.guildwars2.com/v2/achievements';

fetch(`${baseUrl}/daily`)
  .then(res => res.json())
  .then(data => Object.keys(data).map((type) => {
    const el = document.querySelector(`.today .${type}`);
    Promise.all(data[type].map(am => fetch(`${baseUrl}?ids=${am.id}`)
      .then(res => res.json())))
      .then(achie => achie.map((x) => {
        el.innerHTML += `${x[0].name} <br />`;
      }));
  }))
  .catch(err => console.log(err));

  fetch(`${baseUrl}/daily/tomorrow`)
    .then(res => res.json())
    .then(data => Object.keys(data).map((type) => {
      const el = document.querySelector(`.tomorrow .${type}`);
      Promise.all(data[type].map(am => fetch(`${baseUrl}?ids=${am.id}`)
        .then(res => res.json())))
        .then(achie => achie.map((x) => {
          el.innerHTML += `${x[0].name} <br />`;
        }));
    }))
    .catch(err => console.log(err));
