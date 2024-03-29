import React, {useContext, useState} from 'react';
import OpenApplicationUi from "./openApplicationUi";
import StartModal from "../components/startModal";
import Context from "../context/Context";
import DesktopItem from "../components/desktopItem";

import image from "../assets/Karp.png"

const StartButton = ({onClick}) => {
    return (
        <button onClick={onClick}
                className={"bg-green-600 hover:bg-green-400 p-2 text-gray-200 font-extrabold pl-1 pr-6 rounded-r-xl flex"}>
            <img src={image} alt={"logo"} className={"w-6 mr-2"}/>CONTACT
        </button>
    )
}

const TimeSection = () => {
    return (
        <div className={"text-white flex items-center pr-2 font-extrabold"}>
            Semih Yönet
        </div>
    )
}

const Apps = ({apps, openAppCb}) => {
    return <div className={"grid grid-rows-6 grid-cols-2 w-60 lg:w-1/6 h-[45rem]"}>
        {apps.map((element, i) => {
            return (
                <DesktopItem cb={openAppCb} key={`${i}`} {...element} />
            );
        })}
    </div>
}

const DesktopUi = ({children}) => {
    const [startModalOpen, setStartModalOpen] = useState();
    const {apps, setIsAppOpen} = useContext(Context);

    return (
        <div className={"ui-container h-screen w-screen relative overflow-y-hidden"}>
            <OpenApplicationUi>
                {children}
            </OpenApplicationUi>

            <StartModal isOpen={startModalOpen}/>

            <div className={'pl-8'}>
                <Apps openAppCb={() => {
                    setIsAppOpen(true)
                }} apps={apps}/>
            </div>

            <div
                className={"fixed bottom-0  border-t-win-border bg-gradient-to-t from-win-blue to-win-border shadow-2xl w-screen flex justify-between"}>
                <StartButton onClick={() => {
                    setStartModalOpen(!startModalOpen)
                }}/>
                <TimeSection/>
            </div>
        </div>
    );
};

export default DesktopUi;