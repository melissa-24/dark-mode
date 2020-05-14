import React, { useEffect} from 'react'

import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
const [value, setValue] = useLocalStorage('on')

useEffect(() => {
    let body = document.querySelector('body')
     return value ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');
    },[value]
);

return [value,setValue]
}
export default useDarkMode;