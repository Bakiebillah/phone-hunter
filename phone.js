// search result
const searchResult = () => {
    const search = document.getElementById('search');
    const searchText =  search.value;
    // clear data 
    search.value = '';
    
     if(searchText == ''){
        document.getElementById('empty').style.display = 'block';
     }
     else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
    
        // displaySearchResult
        const displaySearchResult = phones => {
            const container = document.getElementById('displayPhone');
            container.textContent = '';
            console.log(phones)
            if(phones.length == 0){
            document.getElementById('noresult').style.display = 'block';
            }
            else{
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
                       <button onclick="displaydetails('${phone.slug}')">Click her</button>`
                       // console.log(phone)
                      container.appendChild(div)
                    }
                
                });
            }
     
        }
     }

}

// phone details
const displaydetails = details =>{
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data => phonedetails(data.data));

    const detailscontainer = document.getElementById('phonedetails');
    detailscontainer.textContent = '';
    const phonedetails = detail =>{
        console.log(detail);
        const div = document.createElement('div');
        div.classList.add('phone','detail');
        div.innerHTML = `
        <img src="${detail.image}" alt="">
        <h3>${detail.name}</h3>
        <p>${detail.brand}</p>
        <ul>
        <li>Chip-Set:- ${detail.mainFeatures.chipSet},</li>
        <li>Display Size:- ${detail.mainFeatures.displaySize},</li>
        <li>Memory:- ${detail.mainFeatures.memory}</li>
        <li>Release Date:- ${detail.releaseDate}</li>
    </ul>
        `
        detailscontainer.appendChild(div)

    }


 
}

