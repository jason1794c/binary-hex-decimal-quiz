import React, { useState, useEffect } from 'react'

function DecimalToHex() {
    const [decNum, setDecNum] = useState(Math.floor(Math.random() * 9999 + 1));
    const [hexNum, setHexNum] = useState();
    const [userGuess, setUserGuess] = useState("");
    const decToHexConversion = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "a",
        11: "b",
        12: "c",
        13: "d",
        14: "e",
        15: "f"
    }

    useEffect(() => {
        decimalToHexAns(decNum);
    }, [decNum]);

    const decimalToHexAns = (hex) => {
        const hexArray = []; // Create empty array to store hex digits

        // Do first division and put the remainder in the binArray
        let quotient = Math.floor(hex / 16);
        let remainder = hex % 16;
        hexArray.unshift(decToHexConversion[remainder]);

        while (quotient > 0) {
            remainder = quotient % 16;
            hexArray.unshift(decToHexConversion[remainder]);
            quotient = Math.floor(quotient / 16);
        }

        setHexNum(hexArray.join(""));
    };

    const checkAns = () => {
        userGuess === hexNum
            ? alert("Correct!")
            : alert("Wrong. Please try again.");
    };

    const giveUp = () => {
        setUserGuess(hexNum);
    };

    return (
        <div>
            <h3>Convert the decimal value below to hexadecimal:</h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <h4 style={{ marginRight: "10px" }}>{decNum}:</h4>
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

export default DecimalToHex
