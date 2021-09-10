import React from 'react';
import BinaryToDecimal from "./BinaryToDecimal";
import DecimalToBinary from "./DecimalToBinary";

function BinaryAndDecimal() {
    return (
        <div>
            <h2>Binary and Decimal</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    marginBottom: "30px",
                }}
            >
                <DecimalToBinary />
                <BinaryToDecimal />
            </div>
        </div>
    );
}

export default BinaryAndDecimal
