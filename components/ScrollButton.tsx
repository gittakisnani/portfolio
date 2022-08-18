import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
const ScrollButton = () => {
    const scrollBtnRef = useRef<null | HTMLButtonElement>(null!);

    const handleScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    useEffect(() => {
        const handleScroll = () => {
         const { pageYOffset, scrollY } = window;
            pageYOffset > 200 || scrollY > 200 ? scrollBtnRef.current?.classList.remove('hide') : scrollBtnRef.current?.classList.add('hide')
        };

        document.addEventListener("scroll", handleScroll);
        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", handleScroll);
    }, []);

    
  return (
    <button title='Scroll to top' ref={scrollBtnRef} onClick={handleScrollToTop} className='scroll'>
        <FontAwesomeIcon icon={faAngleUp} />
    </button>
  )
}

export default ScrollButton