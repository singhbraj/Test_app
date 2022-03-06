import {useEffect} from 'react'

const useDocumenTitle = (count) => {
    useEffect(()=>{
        document.title = `count - ${count}`
    })
}

export default useDocumenTitle