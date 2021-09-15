import React, { useState, useEffect } from 'react'

export const randomHex = () => {
    let tempHex = "";
    const hexLength = Math.floor(Math.random() * 4 + 1);
    const hexDigits = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];

    for (let i = 0; i < hexLength; i++) {
        tempHex += hexDigits[Math.floor(Math.random() * hexDigits.length)];
    }

    return tempHex;
};

function HexToBinary() {
    const [hexNum, setHexNum] = useState(randomHex());
    const [binary, setBinary] = useState();
    const [userGuess, setUserGuess] = useState("");
    const binaryConversion = {
        "0": "0000",
        "1": "0001",
        "2": "0010",
        "3": "0011",
        "4": "0100",
        "5": "0101",
        "6": "0110",
        "7": "0111",
        "8": "1000",
        "9": "1001",
        "a": "1010",
        "b": "1011",
        "c": "1100",
        "d": "1101",
        "e": "1110",
        "f": "1111",
    };

    useEffect(() => {
        hexToBinaryAns(hexNum);
    }, []);

    const hexToBinaryAns = (num) => {
        let strBinary = "";

        for (let i = 0; i < num.length; i++) {
            strBinary += binaryConversion[num[i]];
        }
        
        setBinary(parseInt(strBinary));
    };

    const checkAns = () => {
        try {
            parseInt(userGuess) === binary
                ? alert("Correct!")
                : alert("Wrong. Please try again.");
        } catch (err) {
            alert("Wrong. Please try again.");
        }
    };

    const giveUp = () => {
        setUserGuess(binary);
    };

    return (
        <div>
            <h3>Convert the hexadecimal value below to binary:</h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <h4 style={{ marginRight: "10px" }}>{hexNum}:</h4>
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

export default HexToBinary
