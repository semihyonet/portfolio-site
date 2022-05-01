import React from 'react';

const StartModalContent = () => {
    return (
        <div>
            <div className={"bg-gradient-to-b from-win-border to-win-blue flex p-2 items-center font-extrabold text-white shadow-2xl"}>
                <img className={"w-1/5 rounded-2xl mr-2 border-2"}
                     src={"https://avatars.githubusercontent.com/u/56456840?v=4"} alt={"SemihYonetPicture"}/>
                Semih Yönet
            </div>
        </div>
    );
}

const SocialsContainer = ({icon, name, username}) => {
    return (
        <div className={"flex border-b-2  max-h-14"}>
            <img
                className={"w-20 mr-3 py-2 rounded-xl pl-2"}
                src={icon}
                alt={"social"}
            />
            <div className={"flex flex-col justify-center"}>
                <div className={"font-extrabold text-xl"}>
                    {name}
                </div>
                <div className={"text-gray-600"}>
                    {username}
                </div>
            </div>
        </div>
    )
}

const StartModal = ({isOpen}) => {
    return (
        <div
            className={`absolute left-0 bottom-0 transition-all duration-500 bg-white border-win-border border-t-8 border-r-8 rounded-tr-xl ${(isOpen) ? 
                " h-2/3 w-screen md:w-1/2 lg:w-1/3 xl:w-1/5 " 
                : "h-0 w-1/5"}`}>
            {isOpen &&
                (
                    <div>
                        <StartModalContent/>
                        <SocialsContainer
                            icon={"https://brandpalettes.com/wp-content/uploads/2021/06/gmail-old-color-codes.svg"}
                            name={"E-Mail"} username={"semihyonet@gmail.com"}/>

                        <SocialsContainer
                            icon={"https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-2008-2013.png"}
                            name={"Github"} username={"github.com/semihyonet"}/>

                        <SocialsContainer
                            icon={"https://cdn.dribbble.com/users/1927379/screenshots/13680429/telegram.png"}
                            name={"Telegram"} username={"@semihyonet"}/>


                    </div>
                )
            }
        </div>
    );
};

export default StartModal;