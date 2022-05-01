import {createContext, useState} from "react";

const Context = createContext(null);

export const Provider = ({children}) => {
    const [error, setError] = useState("");

    const apps = [
        {
            "name": "About",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/about"
        },
        {
            "name": "Education",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/education"
        },
        {
            "name": "Technologies",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/technologies"
        },
        {
            "name": "Front-End",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/front-end"
        },
        {
            "name": "Backend",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/back-end"
        },
        {
            "name": "Blockchain",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/about"
        },
        {
            "name": "Game Dev",
            "icon": "https://64.media.tumblr.com/1adf2f6dde559e2524a07dbcd2df493c/01bfaf22d29afd6c-7c/s540x810/b0d01254bfd9a0d52243de8b4adea26bacfee6e9.png",
            "to": "/about"
        }
    ];


    const values = {
        error,
        apps
    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Context;