import React, { useState, useEffect, useRef } from 'react';

const CHARACTERS = '{}[]()<>/\\;="+-*01';

const ScrambleText = ({ text, className, ...props }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Reset display text if the source text prop changes
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (isHovered) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter) => {
              if (letter === ' ') return ' ';
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('')
        );
      }, 50);
    } else {
      clearInterval(intervalRef.current);
      let iteration = 0;
      intervalRef.current = setInterval(() => {
        setDisplayText((prev) => {
          const nextStr = text
            .split('')
            .map((letter, index) => {
              if (index < Math.floor(iteration)) {
                return text[index];
              }
              if (letter === ' ') return ' ';
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('');
          return nextStr;
        });

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
        }
        
        // Adjust speed of descrambling based on text length to keep it feeling snappy
        const step = Math.max(1, text.length / 10);
        iteration += step;
      }, 30);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, text]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
