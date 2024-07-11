// mostro a video la struttura dati
// const user_container = document.getElementById('card');
const card_list_container = document.getElementById('card-list');
function createCard() {
    let card = document.createElement('div');
    return card;
}
// creo array di objects
const users = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Carroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Babara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];
// ciclo l'array
for (let i = 0; i <= users.length; i++) {
    // stampo in console.log le proprietà di ciasun object
    console.log(`${users[i].name} ${users[i].role} ${users[i].img}`);
    const card = createCard();
    // creo codice html per contenere le proprietà di ciascun utente
    card.innerHTML = `<h2 id="name" class="mt-5">${users[i].name}</h2>
            <p id="role">${users[i].role}</p>
            <img src="./img/${users[i].img}" alt="" id="img">`
    // card_list_container.innerHTML = `${users[i].name} ${users[i].role} ${users[i].img}`;
    // appendo la card al tag html nel dom
    card_list_container.append(card);
}
