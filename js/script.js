// mostro a video la struttura dati
const user_container = document.getElementById('card');
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
// stampo in console.log le proprietà di ciasun object
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
// ciclo l'array
for (let i = 0; i < users.length; i++) {
    const card = createCard();
    // creo codice html per contenere le proprietà di ciascun utente
    card.innerHTML = `<h2 id="name">${users[i].name}</h2>
            <p id="role">${users[i].role}</p>
            <img src="./img/${users[i].img}" alt="" id="img">`
    user_container.innerHTML = `${users[i].name} ${users[i].role} ${users[i].img}`;
}