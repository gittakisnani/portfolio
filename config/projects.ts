import Dark from '../public/assets/Projects/Dark.jpeg'
import Light from '../public/assets/Projects/Light.png'
import GroceriesAppVisible from '../public/assets/Projects/ECommerce/GroceriesAppVisible.png'
import GroceriesAppProduct from '../public/assets/Projects/ECommerce/GroceriesAppProduct.png'
import QuizApp from '../public/assets/Projects/Quiz/QuizApp.png'
import Categories from '../public/assets/Projects/Quiz/Categories.png'
import Fahrenheit from '../public/assets/Projects/Weather/Fahrenheit.png'
import Degrees from '../public/assets/Projects/Weather/Degrees.png'
import Personal1 from '../public/assets/Projects/Personal/Personal1.png'
import Personal2 from '../public/assets/Projects/Personal/Personal2.png'
import Cuisine1 from '../public/assets/Projects/ShaifsCuisine/Cuisine1.png'
import Cuisine2 from '../public/assets/Projects/ShaifsCuisine/Cuisine2.png'
import { WorkProps } from '../components/Work'


type projectsType = WorkProps[] 


const projects: projectsType = [
    {
        index: 1,
        src: [GroceriesAppVisible, GroceriesAppProduct],
        workName: 'Groceries App',
        workDesc: 'A small e-commerce groceries website with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.Login and a register page are provided to allow you register and add like some products and add them to your shopping cart' ,
        feature: 'Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.',
        role: 'Helping customers find & buy their favorite groceries',
        techs: ['React Js (Next Js)', 'Tailwindcss', 'MongoDB', 'Express'] ,
        demoLink: 'https://groceries-app-be.vercel.app/'
    },
    {
        index: 2,
        src: [Dark, Light],
        workName: 'E-Book App',
        workDesc: 'A small E-Books website (Only Front-end) provides multiple books in various categories: Popular, Trends, Just Landing..., Books authors and some of their releases, A Search Bar with filters :Category, Release date, author..., Appearance Settings that can apply using DB: Dark/Light/System preferences Themes, color palette...',
        feature: 'Browsing Books In various categories, Filterable Search bar to get special Books, Toggle theme Settings',
        role: 'Helping readers and authors read, write, Books in various categories',
        techs: ['React Js (Next Js)', 'Tailwindcss'],
        demoLink: 'https://ebook-app.vercel.app/',
    },
    {
        index: 3,
        src: [QuizApp, Categories],
        workName: 'Quiz App',
        workDesc: 'A small quiz app made using react, Just type your name and start the game. The game come with multiple categories: Medical, History...., every category has 10 question, 4 suggestions per question and just one suggestion is correct, every question takes 10 seconds, and you get your score out of 10 in the end.',
        feature: 'Multiple quizzes in different Categories, Get your score and share it to tweeter',
        role: 'Test your knowledge in various categories with simple questions',
        techs: ['React js'],
        demoLink: 'https://gittakisnani.github.io/quiz-app/'
    },
    {
        index: 4,
        src: [Fahrenheit, Degrees],
        workName: 'Weather Forecast App',
        workDesc: 'A Vanilla JS app made using openWeatherAPI, Allow you to get your home (saved) location\'s weather conditions: today\'s temperature in both Fahrenheit and Degree Celsius, min and max temp, wind speed in both mph and m/s, humidity and current status (cloudy, sun...), Also you get next six days min and max temperatures in both mph and m/s. You can change metrics, refresh the current conditions, get your location (if you allow), and save your home location.',
        feature: 'Get and save your location, get today forecast conditions: Temperature, wind & humidity, and the next 6 days temperature.',
        role: 'Helping people get their locations weather conditions.',
        techs: ['Javascript', 'SASS (SCSS)'],
        demoLink: 'https://weather-forecast-gules-zeta.vercel.app/'
    },
    {
        index: 5,
        src: [Cuisine1, Cuisine2],
        workName: 'Shaif\'s Cuisine App',
        workDesc: 'A Cuisine website made using HTML, CSS and Vanilla JS, With 5 pages, Home page, Menu page, About page, Contact page and Booking table page',
        feature: 'Book Foods with booking table, Also Booking for events.',
        role: 'Helping customers buying Foods for events',
        techs: ['HTML', 'CSS', 'Javascript'],
        demoLink: 'https://cuisine-website.vercel.app/'
    },
    {
        index: 6,
        src: [Personal1, Personal2],
        workName: 'Personal template website',
        workDesc: 'A small project to improve my css',
        feature: 'Multiple sections, great animations',
        role: 'Multiple sections, great animations',
        techs: ['HTML', 'CSS'],
        demoLink: 'https://personal-template-three.vercel.app/'
    }
]

export default projects