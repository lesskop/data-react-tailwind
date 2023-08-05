import React from 'react';

const TextButton = ({ text, type }) => {
    const bg_color = type === 'primary' ? ' bg-gray-950' : ' bg-emerald-400';
    const text_color = type === 'primary' ? ' text-white' : ' text-black';
    const hover_color = type === 'primary' ? ' hover:bg-gray-700' : ' hover:bg-emerald-500';
    const active_color = type === 'primary' ? ' active:bg-gray-500' : ' active:bg-emerald-600';

    const style = 'w-[200px] mx-auto py-3 px-10 rounded-xl font-bold mt-4 md:text-xl transition ease-in-out hover:scale-105' +
        bg_color + text_color + hover_color + active_color;

    return (
        <button className={style}>
            {text}
        </button>
    );
}

export default TextButton;