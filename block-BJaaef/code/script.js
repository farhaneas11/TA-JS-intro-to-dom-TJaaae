let ul = document.querySelector('.innercent');
let peopleAll = got.houses.reduce((acc,cv)=>{
    acc = acc.concat(cv.people);
    return acc;
},[]);
let allpeople = peopleAll.map((person)=> {
    return `<li>
    <div class="spanned">
      <img src=${person.image} alt=${person.name}>
      <h2>${person.name}</h2>
    </div>
    <p>${person.description}</p>
    <a href=${person.wikiLink}>Learn More</a>
  </li>`;
});
ul.innerHTML = allpeople.join("");