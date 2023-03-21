import React from 'react';

const MainScreen = () => {
    return (
        <div>
            Hello, welcome to my website! My name is Semi Yönet, I'm a currently working as a lead developer/ Backend
            developer in CloudVentures, in the Desty Project. Some examples of the product we've built
            are <a href={'https://good.travel'} className={'text-red-600'}>good.travel </a>
            I've been coding since I was 14 and coding is something I've started to have fun. That's why even though
            it's
            my job, I do coding on my spare time as well. That's why I love new technologies and it's the main reason I
            created this website!
            <br/><br/>
            If you would like to talk with me feel free to press the Contact button at left bottom of this screen. Press
            the applications on the desktop to learn them further.
            <br/><br/>
            This website has been written in react to act as a Windows XP Clone, with my portfolio in it. You can view
            this projects code through <a className={'text-red-600'} href={"https://github.com/semihyonet/portfolio-site"}> this link.</a>
        </div>
    );
};

export default MainScreen;