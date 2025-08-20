import React from "react";

export function Container({
    id = "",
    type = "div",
    background='',
    className='',
    children
}) {
    return (
        <div
            id={id}
            className={` w-full h-auto flex justify-start flex-col items-center ${background}`}
        >
            {React.createElement(type, { className: className + ' max-w-400 w-full' }, children)}
        </div>
    );
}
