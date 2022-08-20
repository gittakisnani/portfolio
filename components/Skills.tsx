import JS from '../public/assets/JS.png';
import TS from '../public/assets/TS.png'
import Tailwind from '../public/assets/Tailwind.png'
import React from '../public/assets/React-icon.svg.png'
import Next from '../public/assets/next.png'
import Node from '../public/assets/NodeJS.png'
import Sass from '../public/assets/SCSS.png'
import Express from '../public/assets/Express.png'
import MangoDB from '../public/assets/MangoDB.png'
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h3 className='heading'><span className='hash'>#</span>MY_SKILLS</h3>

        <div className='skills-wrapper'>
            <div className='skill'>
                <Image src={JS} alt='Javascript' height='150' width='150' />
                <p className='skill-name'>JavaScript (ES6+)</p>
            </div>
            <div className='skill'>
                <Image src={TS} alt='TypeScript' height='150' width='150' />
                <p className='skill-name'>TypeScript (TS)</p>
            </div>
            <div className='skill'>
                <Image src={React} alt='React JS' height='150' width='150' />
                <p className='skill-name'>React Js</p>
            </div>
            <div className='skill'>
                <Image src={Next} alt='Next JS' height='150' width='150' />
                <p className='skill-name'>Next JS</p>
            </div>
            <div className='skill'>
                <Image src={Sass} alt='SASS | SCSS' height='150' width='150' />
                <p className='skill-name'>SASS | SCSS</p>
            </div>
            <div className='skill'>
                <Image src={Tailwind} alt='Tailwindcss' height='150' width='150' />
                <p className='skill-name'>Tailwindcss</p>
            </div>
            <div className='skill'>
                <Image src={Node} alt='Node JS' height='150' width='150' />
                <p className='skill-name'>Node JS</p>
            </div>
            <div className='skill'>
                <Image src={Express} alt='Express JS' height='150' width='150' />
                <p className='skill-name'>Express JS</p>
            </div>
            <div className='skill'>
                <Image src={MangoDB} alt='Mango DB' height='150' width='150' />
                <p className='skill-name'>Mango DB</p>
            </div>
        </div>
    </div>
  )
}

export default Skills