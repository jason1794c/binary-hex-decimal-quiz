import React, { useState, useEffect } from 'react';
import { randomHex } from '../BinaryAndHex/HexToBinary';

function HexToDecimal() {
    const [decAns, setDecAns] = useState();
    const [userGuess, setUserGuess] = useState("");
    const [hexNum, setHexNum] = useState(randomHex());

    useEffect(() => {
        decimalAns(hexNum);
    }, [hexNum])

    const decimalAns = (hex) => {
        let sum = 0;
        let j = 0;

        for (let i = hex.length - 1; i >= 0; i--) {
            switch (hex[i]) {
                case "a":
                    sum += 10 * 16 ** j;
                    break;
                case "b":
                    sum += 11 * 16 ** j;
                    break;
                case "c":
                    sum += 12 * 16 ** j;
                    break;
                case "d":
                    sum += 13 * 16 ** j;
                    break;
                case "e":
                    sum += 14 * 16 ** j;
                    break;
                case "f":
                    sum += 15 * 16 ** j;
                    break;
                default:
                    sum += parseInt(hex[i]) * 16 ** j;
                    break;
            }

            j++;
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
            <h3>Convert the hexadecimal value below to decimal:</h3>
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

export default HexToDecimal
