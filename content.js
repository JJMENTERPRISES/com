
products.forEach( (phones) => {
    const HTML = `
        <div class="phone">
            <img src="${phones.img}" alt="Phone Model ${products.length}">
            <h3>${phones.name}</h3>
            <p>
              ${phones.info}
            </p>
        </div>
    `
    
    const root = document.querySelector('.phones');
    root.innerHTML += HTML;
})