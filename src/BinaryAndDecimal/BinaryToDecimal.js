import React, { useState, useEffect } from 'react';

function BinaryToDecimal() {
    const [ binary, setBinary ] = useState([]);
    const [ decAns, setDecAns ] = useState();
    const [ userGuess, setUserGuess ] = useState("");
    const binaryArrLen = Math.floor(Math.random() * 10 + 3);
    
    // Randomly generate a binary number
    useEffect(() => {
        let tempBinArr = [];
        for (let i = 0; i < binaryArrLen; i++) {
            tempBinArr.unshift(Math.round(Math.random()))
        }

        setBinary(tempBinArr);
    }, [])

    // Get the decimal number of the randomly generated binary number
    useEffect(() => {
        decimalAnswer(binary);
    }, [binary])

    const decimalAnswer = (binNum) => {
        // Convert binary number to string
        const strBin = binNum.join("");
        let sum = 0;
        let j = 0;
        
        for (let i = strBin.length-1; i >= 0; i--) {
            sum += parseInt(strBin[i]) * (2**j)
            j += 1
        }

        setDecAns(sum);
    }

    const checkAns = () => {
        try {
            parseInt(userGuess) === decAns
                ? alert("Correct!")
                : alert("Wrong. Please try again.");
        } catch (err) {
            alert("Wrong. Please try again.");
        }
    };

    const giveUp = () => {
        setUserGuess(decAns);
    };

    return (
        <div>
            <h3>Convert the binary value below to decimal:</h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <h4 style={{ marginRight: "10px" }}>{binary}:</h4>
                <input
                    value={userGuess}
                    onChange={(e) => {
                        setUserGuess(e.target.value);
                    }}
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <button style={{ marginRight: "10px" }} onClick={checkAns}>
                    Check Answer
                </button>
                <button onClick={giveUp}>Show Answer</button>
            </div>
        </div>
    );
}

export default BinaryToDecimal
