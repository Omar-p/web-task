const pageOne = document.getElementById('page-1')
const pageTwo = document.getElementById('page-2')

const pageView = document.getElementById('page-view')
console.log("============")
console.log(pageView)
console.log(pageOne)
console.log(pageTwo)


const pageOneContent = `<div class="col-lg-4 col-md-6 py-3 px-5">
<div class="card w-100 h-50">
    <img src="img/latte.jpg" class="card-img-top img-fluid h-100" alt="latte">
    <div class="card-body px-5">
        <h5 class="card-title">Latte</h5>
        <p class="card-text">Cappuccino with a double portion of milk and a more liquid foam.</p>
    </div>
</div>
</div>
<div class="col-lg-4 col-md-6 py-3 px-5">
<div class="card w-100 h-50">
    <img src="img/cappuccino.jpg" class="card-img-top img-fluid h-100" alt="cappuccino">
    <div class="card-body px-5">
        <h5 class="card-title">Cappuccino</h5>
        <p class="card-text">This is espresso with whipped foam. Drink it without sugar, savoring the natural milky sweetness.</p>
    </div>
</div>
</div>
<div class="col-lg-4 col-md-6 py-3 px-5">
<div class="card w-100 h-50">
    <img src="img/pumpkin-raf.jpg" class="card-img-top img-fluid h-100" alt="pumpkin raf">
    <div class="card-body px-5">
        <h5 class="card-title">Pumpkin raf</h5>
        <p class="card-text">A drink with whipped cream foam and vanilla sugar and pumpkin syrup in the base.</p>
    </div>
</div>
</div>`

const pageTwoContent = `<div class="col-lg-4 col-md-6 py-3 px-5">
<div class="card w-100 h-50">
    <img src="img/Turkish-coffee.jpg" class="card-img-top img-fluid h-100" alt="turkish coffee">
    <div class="card-body px-5">
        <h5 class="card-title">Turkish coffee</h5>
        <p class="card-text">Сoffee prepared by boiling ground coffee beans in a turk, sometimes with added sugar.</p>
    </div>
</div>
</div>
<div class="col-lg-4 col-md-6 py-3 px-5">
<div class="card w-100 h-50">
    <img src="img/expresso.jpg" class="card-img-top img-fluid h-100" alt="espresso">
    <div class="card-body px-5">
        <h5 class="card-title">Espresso</h5>
        <p class="card-text">A drink for which hot water under high pressure is passed through a filter with ground coffee.</p>
    </div>
</div>
</div>
<div class="col-lg-4 col-md-6 py-3 px-5">
<div class="card w-100 h-50">
    <img src="img/iced-coffe.jpg" class="card-img-top img-fluid h-100" alt="ice coffee">
    <div class="card-body px-5">
        <h5 class="card-title">Ice coffee</h5>
        <p class="card-text">Ice coffee a cold drink based on coffee with ice cream. </p>
    </div>
</div>
</div>`

pageOne.addEventListener('click', () => {
    pageView.innerHTML = pageOneContent
    pageOne.classList.add('active')
    pageTwo.classList.remove('active')
})

pageTwo.addEventListener('click', () => {
    pageView.innerHTML = pageTwoContent
    pageOne.classList.remove('active')
    pageTwo.classList.add('active')
})