'use strict'

require('dotenv').config()
const { mongoose, models: { Course } } = require('data')

const { env: { DB_URL } } = process

const addAllCoursestoDB = (data) => {
    return elsgerds.courses.insert([
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204568/2-20_tuna-tataki.jpg',
        dishName: 'Tuna tataki',
        temp: 'cold',
        baseFood: 'fish',
        dayAvail: '1'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-19_trinxat.jpg',
        dishName: 'Trinxat',
        temp: 'hot',
        baseFood: 'green',
        dayAvail: '3'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-12_paella-mar-muntanya.jpg',
        dishName: 'Paella',
        temp: 'hot',
        baseFood: 'rice',
        dayAvail: '5'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-17_salmon-teryaki.jpg',
        dishName: 'Teriyaki Salmon',
        temp: 'hot',
        baseFood: 'fish',
        dayAvail: '3'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-10_gall-peix.jpg',
        dishName: 'Chicken',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '5'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-18_tomato-pasta.jpg',
        dishName: 'Pasta tomato',
        temp: 'hot',
        baseFood: 'pasta',
        dayAvail: '2'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-16_romesco-de-conill.jpg',
        dishName: 'Rabbit romesco',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '4'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-15_potaje.jpg',
        dishName: 'Garbanzos & meatballs ',
        temp: 'hot',
        baseFood: 'bean',
        dayAvail: '2'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-14_peus-de-porc.jpg',
        dishName: 'Pork feet',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '2'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-13_pasta-truffle-carbonara.jpg',
        dishName: 'Truffle carbonara',
        temp: 'hot',
        baseFood: 'pasta',
        dayAvail: '4'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204567/2-11_mandonguilles.jpg',
        dishName: 'Meatballs & peas',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '1'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-9_fricando.jpg',
        dishName: 'Fricandó',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '4'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-8_fideua.jpg',
        dishName: 'Fideuà',
        temp: 'hot',
        baseFood: 'pasta',
        dayAvail: '3'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-6_cargols-a-la-launa.jpg',
        dishName: '"Canned" snails',
        temp: 'hot',
        baseFood: 'pasta',
        dayAvail: '5'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-4_black-rice.jpg',
        dishName: 'Black rice',
        temp: 'hot',
        baseFood: 'rice',
        dayAvail: '1'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-7_conil-amb-cargols-allioli.jpg',
        dishName: 'Rabbit & snails',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '5'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-3_bacalla.jpg',
        dishName: 'Coat fish',
        temp: 'hot',
        baseFood: 'fish',
        dayAvail: '2'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-5_botifarra-mongetes.jpg',
        dishName: 'Botifarra & white beans',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '5'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/2-2_bacalla-amb-samfaina.jpg',
        dishName: 'Coat fish & veggies',
        temp: 'hot',
        baseFood: 'fish',
        dayAvail: '3'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204566/1-20_salmon-salad-and-sauce.jpg',
        dishName: 'Salmon salad',
        temp: 'cold',
        baseFood: 'meat',
        dayAvail: '4'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/1-18_salad_plate.jpg',
        dishName: 'Green salad',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '3'
    },
    {
        category: 'secondCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/2-1_bacalla-amb-escabetx-de-rovellons.jpg',
        dishName: 'Marinated coat fish',
        temp: 'cold',
        baseFood: 'fish',
        dayAvail: '1'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/1-17_risotto.png',
        dishName: 'Risotto',
        temp: 'hot',
        baseFood: 'rice',
        dayAvail: '3'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/1-14_kinoa-salad.jpg',
        dishName: 'Kinoa salad',
        temp: 'cold',
        baseFood: 'rice',
        dayAvail: '5'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/1-19_salad-pomegranate.jpg',
        dishName: 'Pomegranate salad',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '3'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/1-15_macaroni-salad.jpg',
        dishName: 'Macaroni salad',
        temp: 'cold',
        baseFood: 'pasta',
        dayAvail: '2'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204565/1-16_mango-salad.jpg',
        dishName: 'Mango salad',
        temp: 'cold',
        baseFood: 'pasta',
        dayAvail: '2'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-12_green-pasta.jpg',
        dishName: 'Pesto pasta',
        temp: 'cold',
        baseFood: 'pasta',
        dayAvail: '1'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-11_gazpacho.jpg',
        dishName: 'Gazpacho',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '1'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-13_green-spagetthi-salad.jpg',
        dishName: 'Spaghetti salad',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '2'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-9_esqueixada-bacalla.jpg',
        dishName: 'Coat esqueixada',
        temp: 'cold',
        baseFood: 'fish',
        dayAvail: '4'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-6_ensaladilla-rusa.jpg',
        dishName: 'Ensaladilla rusa',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '5'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-10_faves-ofegades-menta.jpg',
        dishName: 'Green broad beans',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '1'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-5_eggplant-goatcheese.jpg',
        dishName: 'Eggplant & goatcheese',
        temp: 'hot',
        baseFood: 'green',
        dayAvail: '2'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-8_esparrecs-verds-al-forn.jpg',
        dishName: 'Green asparagus',
        temp: 'hot',
        baseFood: 'green',
        dayAvail: '5'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-4_carpaccio.jpg',
        dishName: 'Carpaccio',
        temp: 'cold',
        baseFood: 'meat',
        dayAvail: '4'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-3_canelons.jpg',
        dishName: 'Canelonni',
        temp: 'hot',
        baseFood: 'meat',
        dayAvail: '4'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204564/1-7_escudella-carn-olla.jpg',
        dishName: 'Escudella',
        temp: 'hot',
        baseFood: 'pasta',
        dayAvail: '5'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204552/1-1_basmati-salad.jpg',
        dishName: 'Basmati rice salad',
        temp: 'cold',
        baseFood: 'rice',
        dayAvail: '1'
    },
    {
        category: 'firstCourse',
        image: 'https://res.cloudinary.com/elsgerds/image/upload/v1528204552/1-2_beetroot-salad.jpg',
        dishName: 'Beetroot salad',
        temp: 'cold',
        baseFood: 'green',
        dayAvail: '3'
    }
])}