import React from 'react';

const Education = ({schoolName, status, degree}) => {
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

const EducationScreen = () => {
    return (
        <div>
            <Education degree={"Bachelor of Science in Computer Science"} schoolName={"Vrije University of Amsterdam"}
                       status={"2021-2023"}/>

            <Education degree={"Bachelor of Science in Information Systems (Dual Diploma) "}
                       schoolName={"Binghamton University"}
                       status={"2017 - Transferred Aug 2021"}/>

            <Education degree={"Bachelor of Engineering in Information Systems Engineering (Dual Diploma) "}
                       schoolName={"Istanbul Technical University"}
                       status={"2017 - 2021"}/>

            <Education degree={"84. Istanbul Early Bird Front-End Talent Bootcamp "} schoolName={"Kodluyoruz Bootcamp"}
                       status={"Feb 2021"}/>

        </div>
    );
};

export default EducationScreen;