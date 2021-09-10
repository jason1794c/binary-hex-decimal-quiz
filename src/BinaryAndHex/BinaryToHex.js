import React, { useState, useEffect } from "react";

function BinaryToHex() {
    const [binary, setBinary] = useState([]);
    const [hexAns, setHexAns] = useState();
    const [userGuess, setUserGuess] = useState("");
    const binaryArrLen = Math.floor(Math.random() * 10 + 3);
    const hexConversion = {
        "0000": "0",
        "0001": "1",
        "0010": "2",
        "0011": "3",
        "0100": "4",
        "0101": "5",
        "0110": "6",
        "0111": "7",
        "1000": "8",
        "1001": "9",
        "1010": "a",
        "1011": "b",
        "1100": "c",
        "1101": "d",
        "1110": "e",
        "1111": "f"
    }

    // Randomly generate a binary number
    useEffect(() => {
        let tempBinArr = [];
        for (let i = 0; i < binaryArrLen; i++) {
            tempBinArr.unshift(Math.round(Math.random()));
        }

        setBinary(tempBinArr);
    }, []);

    // Get the decimal number of the randomly generated binary number
    useEffect(() => {
        hexAnswer(binary);
    }, [binary]);

    const hexAnswer = (binNum) => {
        let tempArr = binNum;
        let fourBit = [];
        let hexStr = "";
        
        while (tempArr.length > 0) {
            if (tempArr.length >= 4) {
                for (let i = tempArr.length - 1; i >= tempArr.length - 4; i--) {
                    fourBit.unshift(tempArr[i]);
                }

                hexStr = hexConversion[fourBit.join("")] + hexStr;
             
                // Clear the fourBit array
                fourBit = [];

                // Pop the last 4 bits of the tempArr (binary array)
                for (let i = 0; i < 4; i++) {
                    tempArr.pop();
                }
            } else {
                // Add leading 0s to the tempArr
                for (let i = 0; i < 4 - tempArr.length; i++) {
                    tempArr.unshift(0);
                }
            }
        }
        
        // Remove leading 0 in the hexStr
        if (hexStr[0] === "0" && hexStr !== "0") {
            hexStr = hexStr.slice(1)
        }

        setHexAns(hexStr);
    };

    const checkAns = () => {
        userGuess === hexAns
            ? alert("Correct!")
            : alert("Wrong. Please try again.");
    };

    const giveUp = () => {
        setUserGuess(hexAns);
    };

    return (
        <div>
            <h3>Convert the binary value below to hexadecimal:</h3>
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

export default BinaryToHex;
