let ul = document.querySelector('ul');
got.houses.forEach((elm)=>{
    let li = document.createElement('li');
    elm.people.forEach((peo)=> {
        let img = document.createElement('img');
        img.src = peo.image;
        let name = document.createElement('span');
        name.innerText = peo.name;
        let discription = document.createElement('h2');
        discription.innerText = peo.description;
        let button = document.createElement('button');

        li.append(img,name,discription,button);
    })    
});