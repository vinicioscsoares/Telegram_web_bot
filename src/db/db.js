import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import icecreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData(){
    return [
        { title: "Pizza", price: 17.99, Image: pizzaImg },
        { title: "Hamburger", price: 15, Image: burgerImg },
        { title: "coca", price: 5.50 , Image: cocaImg },
        { title: "Salada", price: 12.30, Image: saladImg },
        { title: "Garrafa de água", price: 2.99, Image: waterImg },
        { title: "Sorvete", price: 12.99, Image: icecreamImg },
        { title: "Kebab", price: 15.99, Image: kebabImg },
    ];
}