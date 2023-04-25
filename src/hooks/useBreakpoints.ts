// React Libraries
import { useEffect, useState } from "react"

// Third Party Libraries
import { capitalize, keys, map, reverse } from "lodash";

// Interfaces
import { BreakpointTypes, IsBreakpoint, isBreakpointTypes } from "@interfaces";

// Hooks

// Theme
import { breakpoints } from "@theme";


const revBreakpointKeys : BreakpointTypes[] = reverse(keys(breakpoints)) as BreakpointTypes[];
const isBreakpointKeys : isBreakpointTypes[] = map(breakpoints, (_, key) => `is${capitalize(key)}`) as isBreakpointTypes[];


const initIsBreakpoint = () : IsBreakpoint => {
    const isBreakpoint : IsBreakpoint = {} as IsBreakpoint;

    isBreakpointKeys.forEach(key => isBreakpoint[key] = false)

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
        for (const element of revBreakpointKeys) {
            if (breakpoint >= breakpoints[element]) {
                setIsBreakpoints({
                    ...initIsBreakpoint(),
                    [`is${capitalize(element)}`]: true
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

    


    return { breakpoint, isBreakpoints, ...isBreakpoints }

}
