//app.js;

const card = document.querySelector('.card');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');

const title = document.querySelector('.title');
const title2 = document.querySelector('.title2');
const title3 = document.querySelector('.title3');

const purchase = document.querySelector('.purchase button');
const purchase2 = document.querySelector('.purchase2 button');
const purchase3 = document.querySelector('.purchase3 button');

const description = document.querySelector('.info h3');
const description2 = document.querySelector('.info2 h3');
const description3 = document.querySelector('.info3 h3');

const sneaker = document.querySelector('.nike img');
const sneaker2 = document.querySelector('.nike2 img');
const sneaker3 = document.querySelector('.nike3 img');

const sizes = document.querySelector('.sizes');
const sizes2 = document.querySelector('.sizes2');
const sizes3 = document.querySelector('.sizes3');

// when the mouse moves, the card moves in respect to x and y axis
container.addEventListener('mousemove', (e) => {
    //pageX is numberical value bassed on location(x axis) in the window
    let xAxis = ((window.innerWidth / 2 - e.pageX) / 20)
    let yAxis = ((window.innerHeight / 2 - e.pageY) / 20)

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container2.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2 - e.pageX) / 20)
    let yAxis = ((window.innerHeight / 2 - e.pageY) / 20)

    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container3.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2 - e.pageX) / 20)
    let yAxis = ((window.innerHeight / 2 - e.pageY) / 20)

    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})


//when mouse enters container, container transforms on z axix
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(220px) rotateZ(-330deg)';
    description.style.transform = 'translateZ(100px';
    purchase.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(100px)';

})

container2.addEventListener('mouseenter', (e) => {
    card2.style.transition = 'none';
    title2.style.transform = 'translateZ(150px)';
    sneaker2.style.transform = 'translateZ(220px) rotateZ(-330deg)';
    description2.style.transform = 'translateZ(100px';
    purchase2.style.transform = 'translateZ(100px)';
    sizes2.style.transform = 'translateZ(100px)';

})

container3.addEventListener('mouseenter', (e) => {
    card3.style.transition = 'none';
    title3.style.transform = 'translateZ(150px)';
    sneaker3.style.transform = 'translateZ(220px) rotateZ(-330deg)';
    description3.style.transform = 'translateZ(100px';
    purchase3.style.transform = 'translateZ(100px)';
    sizes3.style.transform = 'translateZ(100px)';

})


// mouse leaving container transitions back to normal
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    //rotates card to 0 degrees x,y (back to normal)
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';


    title.style.transform = 'rotateY(0deg)';
    title.style.transform = 'translateZ(0)';

    sneaker.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'rotateY(0deg) rotateX(0deg)';

    purchase.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
})

container2.addEventListener('mouseleave', (e) => {
    card2.style.transition = 'all 0.5s ease';
    card2.style.transform = 'rotateY(0deg) rotateX(0deg)';


    title2.style.transform = 'rotateY(0deg)';
    title2.style.transform = 'translateZ(0)';

    sneaker2.style.transform = 'translateZ(0)';
    sneaker2.style.transform = 'rotateY(0deg) rotateX(0deg)';

    purchase2.style.transform = 'translateZ(0)';
    description2.style.transform = 'translateZ(0)';
    sizes2.style.transform = 'translateZ(0)';
})

container3.addEventListener('mouseleave', (e) => {
    card3.style.transition = 'all 0.5s ease';
    card3.style.transform = 'rotateY(0deg) rotateX(0deg)';


    title3.style.transform = 'rotateY(0deg)';
    title3.style.transform = 'translateZ(0)';

    sneaker3.style.transform = 'translateZ(0)';
    sneaker3.style.transform = 'rotateY(0deg) rotateX(0deg)';

    purchase3.style.transform = 'translateZ(0)';
    description3.style.transform = 'translateZ(0)';
    sizes3.style.transform = 'translateZ(0)';
})

