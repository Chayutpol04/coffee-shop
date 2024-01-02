import coffeeant from '../imgs/coffeecup/coffeant.jpg';
import coffeebee from '../imgs/coffeecup/coffeebee.jpg';
import coffeebettle from '../imgs/coffeecup/coffeebettle.jpg';
import coffeebutterfly from '../imgs/coffeecup/coffeebutterfly.jpg';
import coffeeladybug from '../imgs/coffeecup/coffeeladybug.jpg';
import coffeedragonfly from '../imgs/coffeecup/coffeedragonfly.jpg'
import coffeescorpion from '../imgs/coffeecup/coffeescorpion.jpg';
import coffeespider from '../imgs/coffeecup/coffeespider.jpg';
import coffeeworm from '../imgs/coffeecup/coffeeworm.jpg';
import antcake from '../imgs/cake/antcake.jpg'
import beecake from '../imgs/cake/beecake.jpg'
import scropioncake from '../imgs/cake/scropioncake.jpg'
import spidercake from '../imgs/cake/spidercake.jpg'
const MenuData =
[
    {
        id: 1,
        imageUrl: coffeebettle,
        title: 'Bettle Coffee',
        description: "Coffee is made from beetles from Suan Lum Park.",
        price: 15,
        isPromotion: true,
        type :'Coffee'  
      },
      {
        id: 2,
        imageUrl: coffeeladybug,
        title: 'Ladybug Coffee',
        description: 'Coffee is made in a neighboring house in a village.',
        price: 20,
        isPromotion: true,
        type :'Coffee'
      },
      {
        id: 3,
        imageUrl: coffeebutterfly,
        title: 'Butterfly Coffee',
        description: 'Coffee is brewed in a glasshouse located at the Amazon headquarters.',
        price: 30,
        isPromotion: true,
        type :'Coffee'
      },
      {
        id: 4,
        imageUrl: coffeeant,
        title: 'Ant Coffee',
        description: 'Coffee crafted with an Indiana Jones flair, brewed on location.',
        price: 25,
        isPromotion: true,
        type :'Coffee'
      },
      {
        id: 5,
        imageUrl: coffeebee,
        title: 'Bee Coffee',
        description: 'Made from a queen bee stolen from a local garden.',
        price: 12,
        isPromotion: false,
        type :'Coffee'
      },
      {
        id: 6,
        imageUrl: coffeedragonfly,
        title: 'DragonFly Coffee',
        description: 'It was made by a neighborhood kid catching dragonflies.',
        price: 10,
        isPromotion: false,
        type :'Coffee'
      },
      {
        id: 7,
        imageUrl: coffeespider,
        title: 'Spider Coffee',
        description: 'Made from spiders found in an abandoned house.',
        price: 10,
        isPromotion: false,
        type :'Coffee'
      },
      {
        id: 8,
        imageUrl: coffeeworm,
        title: 'Worm Coffee',
        description: 'Its made from green tea worms that inhabit the leaves around your house.',
        price: 5,
        isPromotion: false,
        type :'Coffee'
      },
      {
        id: 9,
        imageUrl: coffeescorpion,
        title: 'Scorpion Coffee',
        description: 'Made from scorpions sourced from the Sahara Desert.',
        price: 30,
        isPromotion: false,
        type :'Coffee'
      },
      {
        id: 10,
        imageUrl: antcake,
        title: 'Ant Cake',
        description: "Sweet strawberry flavor from ants falling into the syrup.",
        price: 40,
        isPromotion: false,
        type :'Cake' 
      },
      {
        id: 11,
        imageUrl: beecake,
        title: 'Bee Cake',
        description: "Lemon flavor from the tree where the bees live.",
        price: 30,
        isPromotion: false,
        type :'Cake'  
      },
      {
        id: 12,
        imageUrl: scropioncake,
        title: 'Scropion Cake',
        description: "Chocolate flavor from scorpion excrement in desert",
        price: 20,
        isPromotion: false,
        type :'Cake'  
      },
      {
        id: 13,
        imageUrl: spidercake,
        title: 'Spider Cake',
        description: "Blueberry flavor from spider eggs in an abandoned mine.",
        price: 35,
        isPromotion: false,
        type :'Cake'  
      },
]
export default MenuData;