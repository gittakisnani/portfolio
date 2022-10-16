import { useRef, useEffect } from 'react'
import { BiArrowToTop } from 'react-icons/bi'


const ScrollButton = () => {
    const scrollBtnRef = useRef<null | HTMLButtonElement>(null!);

    const handleScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }

    useEffect(() => {
        const handleScroll = () => {
         const { pageYOffset, scrollY } = window;
            pageYOffset >= 300 || scrollY > 300 ? scrollBtnRef.current?.classList.remove('hide') : scrollBtnRef.current?.classList.add('hide')
        };

        document.addEventListener("scroll", handleScroll);
        // remove event on unmount to prevent a memory leak
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    
  return (
    <button title='Scroll to top' ref={scrollBtnRef} onClick={handleScrollToTop} className='scroll hide'>
        <BiArrowToTop />
    </button>
  )
}

export default ScrollButton