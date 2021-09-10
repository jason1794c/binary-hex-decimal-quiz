import React from 'react'
import DecimalToHex from './DecimalToHex';
import HexToDecimal from './HexToDecimal';

function HexAndDecimal() {
    return (
        <div>
            <h2>Hexadecimal and Decimal</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    marginBottom: "30px",
                }}
            >
                <HexToDecimal />
                <DecimalToHex />
            </div>
        </div>
    );
}

export default HexAndDecimal
