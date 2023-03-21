import React from 'react';

const VideosScreen = () => {
    return (
        <div className={"flex max-w-screen justify-center"}>
            <iframe width="921" height="518"
                    src="https://www.youtube.com/embed/Zy8MmMmpLvo?list=PLsL_qghN-mdE2cQMv-PfDYL5Egqn6LUUE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default VideosScreen;