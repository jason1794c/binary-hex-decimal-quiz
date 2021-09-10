import React, { useEffect, useState } from 'react';

function DecimalToBinary() {
    const [ decNum, setDecNum] = useState(Math.floor(Math.random() * 9999 + 1));
    const [ binary, setBinary ] = useState();
    const [ userGuess, setUserGuess ] = useState("");
    
    useEffect(() => {
        decimalToBinaryAns(decNum);
    }, []);

    const decimalToBinaryAns = (num) => {
        let strBinary = "";
        const binArray = [];    // Create empty array to store bits
        
        // Do first division and put the remainder in the binArray
        let quotient = Math.floor(num / 2);
        let remainder = num % 2;
        binArray.unshift(remainder);

        while (quotient > 0) {
            remainder = quotient % 2;
            binArray.unshift(remainder);
            quotient = Math.floor(quotient / 2);
        }

        for (const bit of binArray) {
            strBinary += bit;
        }
        
        setBinary(parseInt(strBinary));
    }

    const checkAns = () => {
        try {
            parseInt(userGuess) === binary ? alert("Correct!") : alert("Wrong. Please try again.")
        }
        catch(err) {
            alert("Wrong. Please try again.")
        }
    }

    const giveUp = () => {
        setUserGuess(binary);
    }

    return (
        <div>
            <h3>Convert the decimal value below to binary:</h3>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <h4 style={{marginRight: "10px"}}>{decNum}:</h4>
                <input  
                    value={userGuess}
                    onChange={e => {
                        setUserGuess(e.target.value)
                    }}
                />
            </div>
            <div style={{marginTop: "10px"}}>
                <button 
                    style={{marginRight: "10px"}}
                    onClick={checkAns}
                >Check Answer</button>
                <button onClick={giveUp}>Give Up</button>
            </div>
        </div>
    )
}

export default DecimalToBinary
