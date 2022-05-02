import React, {useEffect, useState} from 'react';

import {useNavigate} from "react-router";

const DesktopItem = ({name, icon, to}) => {
    const [focus, setFocus] = useState(false);
    useEffect(() => {
        if(focus === true ){
            setInterval(() => {
                setFocus(false);
                }, 3000);
        }
    }, [focus]);
    let navigate = useNavigate();

    return (
        <div className={`text-center flex flex-col w-20 ${focus && "bg-win-blue"}`}>
            <button onClick={() => {
                if(focus === false)
                {
                    setFocus(!focus);
                }
                else{
                    navigate(to)
                }

            }}>
                <img src={icon} alt={name} className={""}/>
            </button>
            {name}
        </div>
    );
};

export default DesktopItem;