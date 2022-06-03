import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';

function Wordle({ solution }) {

    const { currentGuess, handleKeyUp } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    return (<>
        <div>solution - {solution}</div>
        <div>current guess - {currentGuess}</div>
    </>);
}

export default Wordle;