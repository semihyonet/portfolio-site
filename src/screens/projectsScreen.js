import React from 'react';

const Project = ({header, text, link}) => {
    return (
        <div className={"border-b"}>
            <a href={"https://"+link} className={"text-gray-500 text-sm "}>
                {link}
            </a>
            <h1 className={"text-lg font-extrabold"}>{header}</h1>
            <p className={"text-md "}>
                {text}
            </p>
        </div>
    )
}

const ProjectsScreen = () => {
    return (
        <div>
            <Project
                text={"Founded a crypto gaming project called Exotic UFO Party. It's an ambitious competitive fighting game! " +
                    "Click the link to learn more!"}
                link={"exoticufoparty.com"}
                header={"Exotic UFO Party"}
            />
            <Project
                text={"A Provisioning System to Allocate space and resources. Optimize IaaS systems using the system."}
                link={"github.com/semihyonet/datacenter-algo"}
                header={"Datacenter Resource Provisioning System"}
            />

            <Project
                text={"Created an Advanced Grade Planning app that helped me to achieve 3.40 GPA during my Education at Binghamton University! " +
                    "Sadly, I deleted my published apps so it's not downloadable."}
                header={"Gradeiator: GPA Planner Application"}
                link={"https://appadvice.com/app/gradeiator/1539500826"}/>
            <Project
                text={"Do you know life? Did you ever think if it was a simulation or not? " +
                    "Check my implementation of Game of Life, to return to the basic's of life. Eat, multiply and die."}
                link={"gol.semihyo.net"}
                header={"Game of Life"}
            />
        </div>

    );
};

export default ProjectsScreen;