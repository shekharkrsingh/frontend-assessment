import React, { useState, useEffect } from 'react';
import "./App.css";
import gradient from './assets/gradient.svg';
import Button from "./components/Button";
import logo1 from "./assets/logo1.webp";
import crome from "./assets/crome.svg";
import logo from "./assets/logo.png";
import Timer from "./components/Timer";
import mobile from "./assets/mobile.svg";
import desktop from './assets/desktop.svg';
import designer from './assets/designer.svg';

function App() {
    const [cloudColor, setCloudColor] = useState('#fde047');
    const [img, setImg] = useState(crome);
    const [designStyle, setDesignStyle] = useState(0);

    const designStyles = [
        {
            color: 'transparent',
            top: '-100px',
            left: '-100px',
        },
        {
            color: 'transparent',
            top: '427.312px',
            left: '50vw',
        },
        {
            color: 'transparent',
            top: '577.312px',
            left: '50vw',
        },
        {
            color: 'transparent',
            top: '-100px',
            left: '95vw',
        },
    ];

    useEffect(() => {
        const designInterval = setInterval(() => {
            if (designStyle < designStyles.length - 1) {
                setDesignStyle(prevStyle => prevStyle + 1);
            } else {
                clearInterval(designInterval);
            }
        }, 1000);

        return () => clearInterval(designInterval);
    }, [designStyle, designStyles.length]);

    useEffect(() => {
        const colorInterval = setInterval(() => {
            setCloudColor((prevColor) => {
                switch (prevColor) {
                    case '#fde047':
                        return '#fca5a5';
                    case '#fca5a5':
                        return '#d4d4d4';
                    case '#d4d4d4':
                        return '#fde047';
                    default:
                        return '#fde047';
                }
            });
            setImg((prev) => {
                switch (prev) {
                    case crome:
                        return mobile;
                    case mobile:
                        return desktop;
                    case desktop:
                        return crome;
                    default:
                        return mobile;
                }
            });
        }, 2000);

        return () => clearInterval(colorInterval);
    }, []);

    const textCloudStyle = {
        color: cloudColor
    };

    const appStyle = {
        backgroundImage: `url(${gradient})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="bg-black h-lvh text-white w-full flex flex-col opacity-855" style={appStyle}>
            <div className="text-7xl font-bold flex justify-center flex-wrap items-center mt-20">
                <img src={logo1} alt="logo1" className="h-24 mx-5"/>
                <p>for</p>
                <img className="w-20 mx-5 h-20" src={img} alt=""/>
                <p style={textCloudStyle}>
                    & Cloud</p>
            </div>
            <div className="flex text-7xl mb-12 font-bold justify-center">
                <p style={textCloudStyle}>gaming</p>
            </div>
            <div className="flex justify-center items-center mb-8 text-sm text-slate-300 font-medium">
                <p>Join us on the launch of gartcod by</p>
                <img src={logo} alt="logo"/>
            </div>
            <div className="flex justify-center mb-4 ">
                <Button cloudColor={cloudColor}/>
            </div>
            <div className="flex justify-center">
                <Timer textCloudStyle={textCloudStyle}/>
            </div>
            <img
                alt="Cursor"
                loading="lazy"
                width="80"
                height="50"
                decoding="async"
                data-nimg="1"
                className="duration-500 absolute transition-all ease-in-out z-50"
                style={designStyles[designStyle]}
                src={designer}></img>
        </div>
    );
}

export default App;
