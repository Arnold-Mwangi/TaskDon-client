
import React, {useState, useEffect, useCallback} from 
'react';

const signup = () =>{
    const [formData, setFormData] = useState({});

    
}

const TypeWriter = ({text, delay})=>{
     const [currentText, setText] = useState('')
     const [currentIndex, setIndex] = useState(0);

     useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setText(prevText => prevText + text[currentIndex]);
                setIndex(prevIndex => prevIndex +1 )
            }, delay);
            return () => clearTimeout(timeout)
        }
     },  [currentIndex, delay, text])

     return (
        <p>{currentText}</p>
     )

}

export default TypeWriter