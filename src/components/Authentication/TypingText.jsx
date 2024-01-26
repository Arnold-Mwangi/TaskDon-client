import React, { useState, useEffect, } from 'react';


const TypingText = ({ paragraphs, interval = 100, onComplete }) => {
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (currentParagraph >= paragraphs.length) {
            return;
        }

        const currentParagraphText = paragraphs[currentParagraph];

        if (currentLetter < currentParagraphText.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayedText((prevText) => prevText + currentParagraphText[currentLetter]);
                setCurrentLetter((prevLetter) => prevLetter + 1);
            }, interval);

            return () => {
                clearTimeout(typingTimeout);
            };
        } else {
            setCurrentParagraph((prevParagraph) => prevParagraph + 1);
            setCurrentLetter(0);
            setDisplayedText((prevText) => prevText + '\n');
        }
    }, [paragraphs, currentParagraph, currentLetter, interval]);

    return (
        <div className='animate-blink'>
            <div className='p-5 text-[#68e55d]' style={{ whiteSpace: 'pre-line' }}>{displayedText}</div>
        </div>
    );
};

export default TypingText;