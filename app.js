//app.js;

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sneaker = document.querySelector('.nike img')
const sizes = document.querySelector('.sizes')


container.addEventListener('mousemove', (e) => {
    //pageX is numberical value basses on location(x axis) in the window
    let xAxis = ((window.innerWidth / 2 - e.pageX) / 20)
    let yAxis = ((window.innerHeight / 2 - e.pageY) / 20)

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//when mouse enters container

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(220px) rotateZ(-330deg)';
    description.style.transform = 'translateZ(100px';
    purchase.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(100px)';
    // sizes.style.transform = 'translateZ(150px)'
    // description.style.transform = 'translateZ(150px)'
    // purchase.style.transform = 'translateZ(150px)'

})


// mouse leaving container goes back to normal
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';


    title.style.transform = 'rotateY(0deg)';
    title.style.transform = 'translateZ(0)';

    sneaker.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'rotateY(0deg) rotateX(0deg)';

    purchase.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';


})

