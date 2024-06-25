import './style.css';
import shop from './shop.jpg';
import logo from './logo.jpg';
import noodle1 from './noodle1.jpg';
import noodle2 from './noodle2.jpg';
import noodle3 from './noodle3.jpg';
import noodle4 from './noodle4.jpg';
import MenuImg1 from './menu1.jpg';
import MenuImg2 from './menu2.jpg';
import MenuImg3 from './menu3.jpg';
import MenuImg4 from './menu4.jpg';
import MenuImg5 from './menu5.jpg';
import MenuImg6 from './menu6.jpg';
import MenuImg7 from './menu7.jpg';
import MenuImg8 from './menu8.jpg';

console.log("This means the webpack is running correctly")

const container = document.querySelector('#container')

const main = document.createElement('div')
const middle = document.createElement('div')
const last = document.createElement('div')

main.classList.add('main')
middle.classList.add('middle')
last.classList.add('last')

container.appendChild(main)
container.appendChild(middle)
container.appendChild(last)

// main section

main.innerHTML = '<nav> <button class="Home">Home</button><button class ="Menu">Menu</button><button class ="Contact">Contact</button></nav>'

const welcome = document.createElement('h2')
welcome.textContent = "Welcome to our ramen shop!"
welcome.classList.add('welcoming')
main.appendChild(welcome)

const home = document.querySelector('.Home')
home.addEventListener('click', MainPage)

const menu = document.querySelector('.Menu')
menu.addEventListener('click', MenuPage)

const contact = document.querySelector('.Contact')
contact.addEventListener('click', ContactPage)

// middle section

const middletext = document.createElement('h2')
middletext.textContent = "Welcome to our ramen shop!, we sell multiple types of ramens and our shop is inspired mainly by naruto ramen shop as we do love the idea of that shop we try to make the ramen in best quality and closest to naruto whether its flavors or looks feel free to order whatever u want and leave a review :)."


const Mylogo = new Image();
Mylogo.src = logo;

middle.appendChild(middletext)
middle.appendChild(Mylogo)

const foods = document.createElement('div')
foods.classList.add('foods')

const food1 = document.createElement('div')
const food2 = document.createElement('div')
const food3 = document.createElement('div')
const food4 = document.createElement('div')

food1.classList.add('food')
food2.classList.add('food')
food3.classList.add('food')
food4.classList.add('food')

foods.appendChild(food1)
foods.appendChild(food2)
foods.appendChild(food3)
foods.appendChild(food4)

const noodleone = new Image()
noodleone.src = noodle1

const noodletwo = new Image()
noodletwo.src = noodle2

const noodlethree = new Image()
noodlethree.src = noodle3

const noodlefour = new Image()
noodlefour.src = noodle4

const f1 = document.createElement('h3')
const f2 = document.createElement('h3')
const f3 = document.createElement('h3')
const f4 = document.createElement('h3')

f1.textContent = "Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have."
f2.textContent = "Second ramen also have egg but it got more type of meats which taste very different when combined with the ramen sauce definitely best protein one we have"
f3.textContent = "Our third ramen would be a ramen very close to naruto one but not quite as it does have quite a bit less things in it"
f4.textContent = "last but not least we have naruto ramen everyone's favorite one always its the most popular option for most people too"

food1.appendChild(noodleone)
food2.appendChild(noodletwo)
food3.appendChild(noodlethree)
food4.appendChild(noodlefour)

food1.appendChild(f1)
food2.appendChild(f2)
food3.appendChild(f3)
food4.appendChild(f4)

middle.appendChild(foods)

function MainPage(){
   
    middle.innerHTML = ""

const middletext = document.createElement('h2')
middletext.textContent = "Welcome to our ramen shop!, we sell multiple types of ramens and our shop is inspired mainly by naruto ramen shop as we do love the idea of that shop we try to make the ramen in best quality and closest to naruto whether its flavors or looks feel free to order whatever u want and leave a review :)."


const Mylogo = new Image();
Mylogo.src = logo;

middle.appendChild(middletext)
middle.appendChild(Mylogo)

const foods = document.createElement('div')
foods.classList.add('foods')

const food1 = document.createElement('div')
const food2 = document.createElement('div')
const food3 = document.createElement('div')
const food4 = document.createElement('div')

food1.classList.add('food')
food2.classList.add('food')
food3.classList.add('food')
food4.classList.add('food')

foods.appendChild(food1)
foods.appendChild(food2)
foods.appendChild(food3)
foods.appendChild(food4)

const noodleone = new Image()
noodleone.src = noodle1

const noodletwo = new Image()
noodletwo.src = noodle2

const noodlethree = new Image()
noodlethree.src = noodle3

const noodlefour = new Image()
noodlefour.src = noodle4

const f1 = document.createElement('h3')
const f2 = document.createElement('h3')
const f3 = document.createElement('h3')
const f4 = document.createElement('h3')

f1.textContent = "Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have."
f2.textContent = "Second ramen also have egg but it got more type of meats which taste very different when combined with the ramen sauce definitely best protein one we have"
f3.textContent = "Our third ramen would be a ramen very close to naruto one but not quite as it does have quite a bit less things in it"
f4.textContent = "last but not least we have naruto ramen everyone's favorite one always its the most popular option for most people too"

food1.appendChild(noodleone)
food2.appendChild(noodletwo)
food3.appendChild(noodlethree)
food4.appendChild(noodlefour)

food1.appendChild(f1)
food2.appendChild(f2)
food3.appendChild(f3)
food4.appendChild(f4)

middle.appendChild(foods)

}

const appreciation = document.createElement('h2')
appreciation.textContent = "Thanks for visiting our website <3, Make sure to leave a review!"
last.appendChild(appreciation)

//last section

function MenuPage(){
    middle.innerHTML = ""
    const MiddleContainer = document.createElement('div')
MiddleContainer.classList.add('MidContainer')

const menu1 = document.createElement('div')
const menu2 = document.createElement('div')
const menu3 = document.createElement('div')
const menu4 = document.createElement('div')
const menu5 = document.createElement('div')
const menu6 = document.createElement('div')
const menu7 = document.createElement('div')
const menu8 = document.createElement('div')

menu1.classList.add('menu')
menu2.classList.add('menu')
menu3.classList.add('menu')
menu4.classList.add('menu')
menu5.classList.add('menu')
menu6.classList.add('menu')
menu7.classList.add('menu')
menu8.classList.add('menu')


menu1.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu2.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu3.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu4.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu5.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu6.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu7.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"
menu8.innerHTML = "<h3>Our first ramen is a nice ramen with some eggs and a lot of unique spices in it, it is also the healthiest one we have. <br><br><br><br><br><br>&nbsp;&nbsp;&nbsp; At the cost of 15$</h3>"

MiddleContainer.appendChild(menu1)
MiddleContainer.appendChild(menu2)
MiddleContainer.appendChild(menu3)
MiddleContainer.appendChild(menu4)
MiddleContainer.appendChild(menu5)
MiddleContainer.appendChild(menu6)
MiddleContainer.appendChild(menu7)
MiddleContainer.appendChild(menu8)

const Ramen1 = new Image()
Ramen1.src = MenuImg1
const Ramen2 = new Image()
Ramen2.src = MenuImg2
const Ramen3 = new Image()
Ramen3.src =  MenuImg3
const Ramen4 = new Image()
Ramen4.src = MenuImg4
const Ramen5 = new Image()
Ramen5.src = MenuImg5
const Ramen6 = new Image()
Ramen6.src = MenuImg6
const Ramen7 = new Image()
Ramen7.src = MenuImg7
const Ramen8 = new Image()
Ramen8.src = MenuImg8

menu1.appendChild(Ramen1)
menu2.appendChild(Ramen2)
menu3.appendChild(Ramen3)
menu4.appendChild(Ramen4)
menu5.appendChild(Ramen5)
menu6.appendChild(Ramen6)
menu7.appendChild(Ramen7)
menu8.appendChild(Ramen8)

middle.appendChild(MiddleContainer)
  
    }

function ContactPage(){
    middle.innerHTML = ""
    const ContactMiddle = document.createElement('div')
ContactMiddle.classList.add('ContactMid')

middle.appendChild(ContactMiddle)

ContactMiddle.innerHTML = "<h3> Hello and thanks again for visiting our website. <br><br> If u want more infos about anything heres our email:<br><br> email@gmail.com <br><br> If you do happen to prefer contacting us with phone heres our number: <br><br> 1234567890 <br><br> And yeah we will make sure to respond to your requests :)</h3>" 

const Shop = new Image()
Shop.src = shop

ContactMiddle.appendChild(Shop)
    }
    
    

