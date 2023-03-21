import React, {useEffect, useState} from 'react';

import {useNavigate} from "react-router";

const DesktopItem = ({name, icon, to, cb}) => {
    const [focus, setFocus] = useState(false);
    useEffect(() => {
        if (focus === true) {
            setInterval(() => {
                setFocus(false);
            }, 3000);
        }
    }, [focus]);
    let navigate = useNavigate();

    return (
        <div className={`text-center flex flex-col w-20  `}>
            <button className={focus ? "bg-win-blue animate-pulse" : ""} onClick={() => {
                if (focus === false) {
                    setFocus(!focus);
                } else {
                    cb()
                    if (to.includes('https')) {
                        window.open(to, '_blank');
                    } else {
                        navigate(to)

                    }
                }

            }}>
                <img src={icon} alt={name} className={""}/>
            </button>
            <span className={`text-center ${focus && "bg-win-blue animate-pulse"}`}>{name}</span>
        </div>
    );
};

export default DesktopItem;