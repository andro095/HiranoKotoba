import { useEffect, useState } from "react"
import { breakpoints } from "../theme";
import { IsBreakpoint } from "../interfaces";
        
const breakpointKeys : string[] = Object.keys(breakpoints)
const reversedBreakpointKeys : string[] = [...breakpointKeys].reverse();



const initIsBreakpoint = () : IsBreakpoint => {
    const isBreakpoint : IsBreakpoint = {} as IsBreakpoint;

    breakpointKeys.forEach((key) => {
        isBreakpoint[key] = false;
    })

    return isBreakpoint;
}

export const useBreakpoints = () => {
    // Hacer el hook
    const [breakpoint, setBreakpoint] = useState<number>(window.innerWidth);

    const [isBreakpoints, setIsBreakpoints] = useState<IsBreakpoint>(initIsBreakpoint());

    const onResize = () => {
        setBreakpoint(window.innerWidth);
    }

    const updateIsBreakpoints = () => {      
        for (const element of reversedBreakpointKeys) {
            if (breakpoint >= breakpoints[element]) {
                setIsBreakpoints({
                    ...initIsBreakpoint(),
                    [element]: true
                })
                break;
            }
        } 
    }

    useEffect(() => {
        updateIsBreakpoints();
    }, [breakpoint])
    
    

    useEffect(() => {
      window.addEventListener('resize', onResize);
    
      return () => {
        window.removeEventListener('resize', onResize);
      }
    }, [])

    


    return { breakpoint, isBreakpoints }

}
