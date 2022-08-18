import { useState, useEffect } from "react";
export interface WindowSize {
    height: number | null;
    width: number| null
}
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        height: null,
        width: null
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth || document.body.clientWidth,
                height: window.innerHeight || document.body.clientHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return windowSize
}

export default useWindowSize;