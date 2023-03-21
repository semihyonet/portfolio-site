import React, {useContext} from 'react';
import Draggable from "react-draggable";
import Context from "../context/Context";

const HeaderButton = ({cb}) => {
    return (
        <button onClick={cb}
                className={"bg-red-700 hover:bg-red-600 hover:text-white font-extrabold border-2 rounded-l  h-6 w-12 flex items-center justify-center"}>
            x
        </button>
    )
}

const OpenApplicationUi = ({children}) => {
    const {isAppOpen, setIsAppOpen} = useContext(Context)

    return (
        <Draggable>

            <div
                className={` absolute border-4 bg-teal-50 border-win-border rounded-l ${isAppOpen ? 'left-0 top-0 lg:left-[20%] lg:top-[5%]' : 'transition-all duration-700 -left-[20rem] -bottom-[60rem]'}  lg:w-2/3 cursor-move m-auto`}>
                <div className={"bg-gradient-to-b from-win-border to-win-blue flex justify-between"}>
                    <div className={"text-white"}>
                        Semih Yönet
                    </div>
                    <div>
                        <HeaderButton cb={() => {
                            setIsAppOpen(false)
                        }}/>
                    </div>
                </div>
                <div className={
                    "scroll-auto"
                }>
                    {children}
                </div>
            </div>
        </Draggable>

    );
};

export default OpenApplicationUi;