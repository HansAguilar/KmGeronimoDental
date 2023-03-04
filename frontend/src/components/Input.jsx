import React from "react";
import { useState } from "react";

const Input = ({ input_type, input_placeholder }) => {
    return (
        <input
            type={input_type}
            placeholder={input_placeholder}
            value={username_input}
            onChange
            className="w-80 p-3 rounded border-2 border-[#0AC1C9]"
        />
    );
}

export default Input;