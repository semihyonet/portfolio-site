import React, {useContext, useState} from 'react';
import OpenApplicationUi from "./openApplicationUi";
import StartModal from "../components/startModal";
import Context from "../context/Context";
import DesktopItem from "../components/desktopItem";

const StartButton = ({onClick}) => {
    return (
        <button onClick={onClick}
                className={"bg-green-600 hover:bg-green-400 p-2 text-gray-200 font-extrabold pl-5    pr-6 rounded-r-xl"}>
            CONTACT
        </button>
    )
}

const TimeSection = () => {
    return (
        <div>
            Time
        </div>
    )
}

const Apps = ({apps}) => {
    return <div className={"grid grid-rows-6 grid-cols-2 w-60 xl:w-1/6 h-2/3"}>
        {apps.map((element, i) => {
            return (
                <DesktopItem key={`${i}`} {...element} />
            );
        })}
    </div>
}

const DesktopUi = ({children}) => {
    const [startModalOpen, setStartModalOpen] = useState();
    const {apps} = useContext(Context);

    return (
        <div className={"ui-container h-screen w-screen relative overflow-y-hidden"}>
            <OpenApplicationUi>
                {children}
            </OpenApplicationUi>
            <StartModal isOpen={startModalOpen}/>

            <Apps apps={apps}/>

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