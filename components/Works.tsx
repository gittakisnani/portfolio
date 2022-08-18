import React from 'react'
import Work from './Work'
import Dark from '../public/assets/Projects/Dark.jpeg'
const Works = () => {
  return (
    <div className='works' id='works'>
        <h3 className='heading'><span className='hash'>#</span>PROJECTS I{'\''}VE BUILT</h3>
        <div className='works-wrapper'>
            <Work 
            index={1}
            src={Dark}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website (Only front-End) with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.' 
            />
            <Work 
            index={1}
            src={Dark}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website (Only front-End) with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.' 
            />
            <Work 
            index={1}
            src={Dark}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website (Only front-End) with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.' 
            />
            <Work 
            index={1}
            src={Dark}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website (Only front-End) with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.' 
            />
            <Work 
            index={1}
            src={Dark}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website (Only front-End) with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.' 
            />
            <Work 
            index={1}
            src={Dark}
            workName='Groceries-App' 
            feature='Shopping cart, Find Liked Items, Products with discount and end time, Newsletter registration with custom discount.'
            techs={['React Js (Next Js)', 'Tailwindcss']}
            role='Helping customers find & buy their favorite groceries'
            workDesc='A small e-commerce groceries website (Only front-End) with a mock DATA that provides various types of groceries, many products are available, we provide a shopping cart and a liked products page to help you save your favorite groceries.' 
            />
        </div>
    </div>
  )
}

export default Works