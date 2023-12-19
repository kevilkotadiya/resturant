import React, { useEffect } from 'react'

const Pattern = () => {

    let n = 5
    let string = '';

    // for (let i = 0; i < n; i++) {
    //     for (let j = 5; j > i; j++) {
    //         string += '*'
    //     }
    //     string += "\n"
    // }



    useEffect(() => {
        console.log("STRING = ", string);
    }, [])





    return (
        <div>
            <h1>{string}</h1>
        </div>
    )
}

export default Pattern
