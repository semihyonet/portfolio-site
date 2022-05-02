import React from 'react';


const JobHeader = ({schoolName, status, degree}) => {
    return (
        <div className={"text-xl"}>
            <h1 className={"font-extrabold"}>
                {schoolName}
            </h1>
            <div className={"flex flex-col"}>
                <div>{degree}</div>
                <div className={"text-gray-600"}>{status}</div>
            </div>
        </div>
    );
}
const JobText = ({text}) => {

    return (
        <div>
            {text}
        </div>
    );
}

const JobsScreen = () => {
    return (
        <div>
            <JobHeader status={"2021 Feb- Continuing"} schoolName={"PlusClouds"}
                       degree={"Full-Time Backend Developer & Project Manager"}/>
            <JobText
                text={"Responsible for R & D processes of products assigned to me. Did specific analyses for planning and team creation to convert ideas to a\n" +
                    "service. Then proceeded to lead a team of Front-end, UI Designers and Marketing people to integrate the product as a service\n" +
                    "to our system."}/>
            <JobText text={`Designed API’s and backend technologies to enrich our API collections, solved optimization and security issues using
            Test-driven development and backend development methodologies. Designed and integrated databases with Normalization
            methods.`}/>
            <JobText text={`Designed a migration for the Monolith API structure to a micro-service structure. Went out of my comfort zone to learn about
            new technologies such as Machine Learning and Chatbot mechanisms to develop an Autonomous ChatBot that operates with
            customers.`}/>
            <JobText
                text={"Helped enlarge the community by filming tutorial videos, writing detailed documentation and blog posts."}/>

            <JobHeader status={"August 2020- February 2021"}
                       schoolName={"New York, Binghamton University Professional Internship Program"}
                       degree={"Career Development Internship"}/>
            <JobText
                text={`Improved soft skills like planning, problem solving and communication. Researched unique ways of Career Development while developing 
                         the Student Office bulletin website!`}
            />

            <JobHeader status={"Summer 2020"} schoolName={"adesso"}
                       degree={"Database Engineering Intern"}/>
            <JobText
                text={`Worked on a major project about developing a new website for a well-known real estate company, using agile methods on a big team
                    worked as a Test development engineer while also creating minor components and styling changes for the project.`}/>

        </div>
    );
};

export default JobsScreen;

