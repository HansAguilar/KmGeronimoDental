import React from "react";

const Button = ({ button_value }) => {
    return (
        <button className="w-80 p-3 rounded bg-[#0AC1C9] text-white font-semibold hover:bg-[#24d8e2] transition-all duration-200 ease-in">{button_value}</button>
    );
}

export default Button;