import React from 'react';
import BinaryToHex from './BinaryToHex';
import HexToBinary from './HexToBinary';

function BinaryAndHex() {
    return (
        <div>
            <h2>Binary and Hexadecimal</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    marginBottom: "30px",
                }}
            >
                <BinaryToHex />
                <HexToBinary />
            </div>
        </div>
    );
}

export default BinaryAndHex
