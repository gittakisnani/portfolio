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
import Clothes1 from '../public/assets/Projects/Clothes/Clothes1.png'
import Clothes2 from '../public/assets/Projects/Clothes/Clothes2.png'
import Images1 from '../public/assets/Projects/Images/Images1.png'
import Images2 from '../public/assets/Projects/Images/Images2.png'
import Images3 from '../public/assets/Projects/Images/Images3.png'
import Author1 from '../public/assets/Projects/Author/Author1.png'
import Author2 from '../public/assets/Projects/Author/Author2.png'
import Imagine1 from '../public/assets/Projects/Imagine/Imagine1.png'
import Imagine2 from '../public/assets/Projects/Imagine/Imagine2.png'
import { WorkProps } from '../components/Work'
import { FiltersType } from '../components/Works'


type projectsType = (WorkProps & { type: FiltersType })[] 


const projects: projectsType = [
    {
        src: [GroceriesAppVisible, GroceriesAppProduct],
        workName: 'Groceries App',
        workDesc: 'A small e-commerce groceries website with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.Login and a register page are provided to allow you register and add like some products and add them to your shopping cart' ,
        feature: 'Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.',
        role: 'Helping customers find & buy their favorite groceries',
        techs: ['React Js (Next Js)', 'Tailwindcss', 'MongoDB', 'Express'] ,
        demoLink: 'https://groceries-app-be.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/groceries-app-be',
        type: 'Full-stack',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fgroceries-app-be'
    },
    {
        src: [Clothes1, Clothes2],
        workName: 'Clothes e-commerce website',
        workDesc: 'Man clothes e-commerce website built using Reactjs, React Router Typescript, Tailwindcss. Currently this project is only Front-end but (I will add the backend soon), This project has multiple pages, Page to add product for sellers, and other page to edit already added products, login and registration page, in multiple cases user will forget their passwords, so I added Forgot password page that has email input to sent resetCode, also has resetCode password to enter the sent code, and create new password code that requires two inputs: Password & confirmPassword. I have also provided this project with an awesome 404 page, Products page and single product page.',
        feature: 'Reveal animations, Modal routing, Search bar with filters, Fully responsive',
        role: 'You can use this website to: browse, buy & sell products',
        techs: ['React js', 'Typescript', 'Tailwindcss', 'React Router', 'Node js', 'Express js', 'MongoDB'],
        demoLink: 'https://clothes-e-commerce.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/clothes-e-commerce-client',
        type: 'Full-stack',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fclothes-e-commerce-client'
    },
    {
        src: [Images1, Images2, Images3],
        workName: 'Image gallery website',
        workDesc: 'This project built using React js, Next js, Typescript, Tailwindcss. This Project comes up with multiple pages: Homepage which contains all the pictures posted and searchbar section to search products, Picture page where you can like, collect & download picture, see picture infos and share it to Facebook, tumblr, pinterest, twitter, linkedIn or you can just copy its link with copy button, you can also follow its creator, see related pictures and related topics, Creator page where you can see some related stats of the creator and a button to follow the creator (replaced by edit profile if you are the creator himself), Edit page which contains few settings to change: Name, social links, bio, profile picture..., upload page that allow REGISTERED users to upload pictures, Login and registration page, Reset Password page and 404 page',
        feature: 'Portals, Modal routing, Like, collect, download and upload pictures',
        role: 'Browse hundreds of High-Quality pictures, upload pictures, follow creators',
        techs: ['React js', 'Next js', 'Typescript', 'Tailwindcss', 'Node js', 'Express js', 'MongoDB'],
        demoLink: 'https://zingy-yeot-c28d58.netlify.app/',
        srcCode: 'https://github.com/gittakisnani/image-gallery',
        type: 'Full-stack',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fimage-gallery'
    },
    {
        src: [Dark, Light],
        workName: 'E-Book App',
        workDesc: 'A small E-Books website (Only Front-end) provides multiple books in various categories: Popular, Trends, Just Landing..., Books authors and some of their releases, A Search Bar with filters :Category, Release date, author..., Appearance Settings that can apply using DB: Dark/Light/System preferences Themes, color palette...',
        feature: 'Browsing Books In various categories, Filterable Search bar to get special Books, Toggle theme Settings',
        role: 'Helping readers and authors read, write, Books in various categories',
        techs: ['React Js (Next Js)', 'Tailwindcss'],
        demoLink: 'https://ebook-app.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/ebook-app',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Febook-app'
    },
    {
        src: [QuizApp, Categories],
        workName: 'Quiz App',
        workDesc: 'A small quiz app made using react, Just type your name and start the game. The game come with multiple categories: Medical, History...., every category has 10 question, 4 suggestions per question and just one suggestion is correct, every question takes 10 seconds, and you get your score out of 10 in the end.',
        feature: 'Multiple quizzes in different Categories, Get your score and share it to tweeter',
        role: 'Test your knowledge in various categories with simple questions',
        techs: ['React js'],
        demoLink: 'https://gittakisnani.github.io/quiz-app/',
        srcCode: 'https://github.com/gittakisnani/quiz-app',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fquiz-app'
    },
    {
        src: [Fahrenheit, Degrees],
        workName: 'Weather Forecast App',
        workDesc: 'A Vanilla JS app made using openWeatherAPI, Allow you to get your home (saved) location\'s weather conditions: today\'s temperature in both Fahrenheit and Degree Celsius, min and max temp, wind speed in both mph and m/s, humidity and current status (cloudy, sun...), Also you get next six days min and max temperatures in both mph and m/s. You can change metrics, refresh the current conditions, get your location (if you allow), and save your home location.',
        feature: 'Get and save your location, get today forecast conditions: Temperature, wind & humidity, and the next 6 days temperature.',
        role: 'Helping people get their locations weather conditions.',
        techs: ['Javascript', 'SASS (SCSS)', 'HTML'],
        demoLink: 'https://weather-forecast-gules-zeta.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/Weather-Forecast',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2FWeather-Forecast'
    },
    {
        src: [Author1, Author2],
        workName: 'Landing page',
        workDesc: 'This landing page made using React js, Next js, Typescript and Tailwindcss. Has multiple sections, Header adn footer and a nav bar inside the header',
        feature: 'Reveal animations, Intersection observer that changes navbar links color, pagination swiper',
        role: 'Landing page to represent your website',
        techs: ['React js', 'Next js', 'Tailwindcss', 'Typescript'],
        demoLink: 'https://author-landing-page.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/author-landing-page',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fauthor-landing-page'
    },
    {
        src: [Imagine1, Imagine2],
        workName: 'Landing page',
        workDesc: 'This landing page made using React js, Next js, Typescript and Tailwindcss. Has multiple sections, Header adn footer and a nav bar inside the header',
        feature: 'Reveal animations, Intersection observer that changes navbar links color, pagination swiper',
        role: 'Landing page to represent your website',
        techs: ['React js', 'Next js', 'Tailwindcss', 'Typescript'],
        demoLink: 'https://next-ts-landing-page.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/next-ts-landing-page',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fnext-ts-landing-page'
    },
    {
        src: [Cuisine1, Cuisine2],
        workName: 'Shaif\'s Cuisine App',
        workDesc: 'A Cuisine website made using HTML, CSS and Vanilla JS, With 5 pages, Home page, Menu page, About page, Contact page and Booking table page',
        feature: 'Book Foods with booking table, Also Booking for events.',
        role: 'Helping customers buying Foods for events',
        techs: ['HTML', 'CSS', 'Javascript'],
        demoLink: 'https://cuisine-website.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/cuisine-website',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fcuisine-website'
    },
    {
        src: [Personal1, Personal2],
        workName: 'Personal template website',
        workDesc: 'A small project to improve my css',
        feature: 'Multiple sections, great animations',
        role: 'Multiple sections, great animations',
        techs: ['HTML', 'CSS'],
        demoLink: 'https://personal-template-three.vercel.app/',
        srcCode: 'https://github.com/gittakisnani/personal-template',
        type: 'Front-end',
        contribute: 'https://github.com/login?return_to=%2Fgittakisnani%2Fpersonal-template'
    },
    
    
]

export default projects