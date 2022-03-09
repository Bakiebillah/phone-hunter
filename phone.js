
const lodePhone = () =>{
    const search = document.getElementById('search');
    const searchText =  search.value;
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => loding(data.data));

    const loding = phones => {
        const container = document.getElementById('displayPhone');
        let i = 0;
         phones.forEach(phone => {
             i++;
             if(i <= 20){
                const div = document.createElement('div');
                div.classList.add('phone')
                div.innerHTML =  `
                <img src="${phone.image}" alt="">
                <h3>${phone.phone_name}</h3>
                <p>${phone.brand}</p>
                <button>Click her</button>`
                console.log(phone)
               container.appendChild(div)
             }
         
         });
    }
}

