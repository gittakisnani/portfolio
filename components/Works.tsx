import React from 'react'
import Work from './Work'
import Dark from '../public/assets/Projects/Dark.jpeg'
import Light from '../public/assets/Projects/Light.png'
import GroceriesAppVisible from '../public/assets/Projects/Ecommerce/GroceriesAppVisible.png'
import GroceriesAppProduct from '../public/assets/Projects/Ecommerce/GroceriesAppProduct.png'
import QuizApp from '../public/assets/Projects/Quiz/QuizApp.png'
import Categories from '../public/assets/Projects/Quiz/Categories.png'
import Fahrenheit from '../public/assets/Projects/Weather/Fahrenheit.png'
import Degrees from '../public/assets/Projects/Weather/Degrees.png'
const Works = () => {
  return (
    <div className='works' id='works'>
        <h3 className='heading'>
          <span className='hash'>#</span>PROJECTS I{'\''}VE BUILT
          </h3>
        <div className='works-wrapper'>
            <Work 
            index={1}
            src={[GroceriesAppVisible, GroceriesAppProduct]}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss', 'MongoDB', 'Express']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.
            Login and a register page are provided to allow you register and add like some products and add them to your shopping cart' 
            demoLink='https://groceries-app-be.vercel.app/'
            />
            <Work 
            index={2}
            src={[Dark, Light]}
            workName='E-Book App' 
            feature='Browsing Books In various categories, Filterable Search bar to get special Books, Toggle theme Settings'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping readers and authors read, write, Books in various categories'
            workDesc='A small E-Books website (Only Front-end) provides multiple books in various categories: Popular, Trends, Just Landing..., Books authors and some of their releases, A Search Bar with filters :Category, Release date, author..., Appearance Settings that can apply using DB: Dark/Light/System preferences Themes, color palette...' 
            demoLink='https://ebook-app.vercel.app/'
            />
            <Work 
            src={[QuizApp, Categories]}
            index={3}
            workName='Quiz App' 
            feature='Multiple quizzes in different Categories, Get your score and share it to tweeter'
            techs={['React']}
            role='Test your knowledge in various categories with simple questions'
            workDesc='A small quiz app made using react, Just type your name and start the game. The game come with multiple categories: Medical, History...., every category has 10 question, 4 suggestions per question and just one suggestion is correct, every question takes 10 seconds, and you get your score out of 10 in the end.' 
            demoLink='https://gittakisnani.github.io/quiz-app/'
            />
            <Work 
            index={4}
            src={[Fahrenheit, Degrees]}
            workName='Weather Forecast app' 
            feature='Get and save your location, get today forecast conditions: Temperature, wind & humidity, and the next 6 days temperature.'
            techs={['Vanilla JS', 'SASS']}
            role='Helping people get their locations weather conditions.'
            workDesc={'A Vanilla JS app made using openWeatherAPI, Allow you to get your home (saved) location\'s weather conditions: today\'s temperature in both Fahrenheit and Degree Celsius, min and max temp, wind speed in both mph and m/s, humidity and current status (cloudy, sun...), Also you get next six days min and max temperatures in both mph and m/s. You can change metrics, refresh the current conditions, get your location (if you allow), and save your home location.'} 
            demoLink='https://weather-forecast-gules-zeta.vercel.app/'
            />
        </div>
    </div>
  )
}

export default Works