import React from 'react';
import Draggable from "react-draggable";

const HeaderButton = () => {
    return (
        <div
            className={"bg-red-700 hover:bg-red-600 hover:text-white font-extrabold border-2 rounded-l  h-6 w-6 flex items-center justify-center cursor-not-allowed"}>
            x
        </div>
    )
}

const OpenApplicationUi = ({children}) => {
    return (
        <Draggable>

            <div className={"absolute border-4 bg-teal-50 border-win-border rounded-l left-4 top-2  lg:w-2/3 cursor-move "}>
                <div className={"bg-gradient-to-b from-win-border to-win-blue flex justify-between"}>
                    <div className={"text-white"}>
                        Semih Yönet
                    </div>
                    <div>
                        <HeaderButton/>
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