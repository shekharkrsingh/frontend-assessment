import React, {useState, useEffect} from 'react';

const Button = ({cloudColor}) => {
    const [isTransformed, setTransformed] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTransformed(true);
        }, 2000);
        return() => clearTimeout(timeoutId);
    }, []);

    const buttonStyle = {
        backgroundColor: cloudColor,
        transition: 'transform 1000ms ease-in-out 0s',
        transform: !isTransformed
            ? 'translateY(0)'
            : 'translateY(150px)'
    };

    return (
        <div>
            <button
                className={`text-black px-6 py-3 rounded-md text-sm font-semibold duration-200`}
                style={buttonStyle}>
                Claim Ticket
            </button>
        </div>
    );
};

export default Button;
