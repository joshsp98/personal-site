import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const CodeDelimiter = () => <span id='code-start'>&gt;</span>;

const TypedHeader = ({children}) => (
    <h2 className='typed-header'>
        <CodeDelimiter/>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString(children)
                    .changeDelay(60)
                    .start();
            }}
        />
    </h2>
);

const NameContainer = () => (
    <div id='name'>
        <h1>Josh Spindler</h1>
    </div>
);

const RoleContainer = () => (
    <div id='role'>
        <TypedHeader>Software Engineer based in the UK</TypedHeader>
    </div>
);

const LinkContainer = () => {
    const links = [
        {
            icon: faGithub,
            address: 'https://github.com/joshsp98',
            key: 'gh-icon'
        },
        {
            icon: faLinkedin,
            address: 'https://linkedin.com/in/joshspindler',
            key: 'li-icon'
        },
        {
            icon: faEnvelope,
            address: 'mailto://hi@joshspindler.dev',
            key: 'env-icon'
        }
    ];


    return (
        <div id='icon-holder'>
            {
                links.map(link => (
                    <a className='icon-hyperlink' href={link.address} target='_blank'><FontAwesomeIcon icon={link.icon} size={'3x'}/></a>
                ))
            }
        </div>
    )
};

const App = () => {
    return (
        <div className={'container'}>
            <NameContainer/>
            <RoleContainer/>
            <LinkContainer/>
            {/*    make it all bullet points? put something about some projects? put something about portswigger?*/}
            {/*links to github, linkedin, email?*/}
            {/*need more stuff on here too*/}
            {/*scroll down thing to go to projects - blinking arrow*/}
            {/*header - 'about', 'some projects', links, on scroll*/}
            {/*responsive*/}
            {/*put on cv, linkedin, github*/}
            {/*chsnge conshare docs to be the dommain/conshare*/}
            {/*<div class="links">*/}
            {/*    <a href="https://github.com/komaira"><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a>*/}
            {/*    <a href="https://linkedin.com/in/ahmed-komaira"> <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"*/}
            {/*                                                        alt="linkedin"></i></a>*/}
            {/*    <i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i>*/}
            {/*    <a href="https://twitter.com/akomaira"> <i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>*/}
            {/*    <a href="/cdn-cgi/l/email-protection#67060c080a060e150627000a060e0b4904080a"><i class="fa fa-envelope fa-3x"*/}
            {/*                                                                                    aria-hidden="true"></i></a>*/}
            {/*</div>*/}
            {/*<div class="links">*/}
            {/*    <a href="https://github.com/komaira"><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a>*/}
            {/*    <a href="https://linkedin.com/in/ahmed-komaira"> <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"*/}
            {/*                                                        alt="linkedin"></i></a>*/}
            {/*    <i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i>*/}
            {/*    <a href="https://twitter.com/akomaira"> <i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>*/}
            {/*    <a href="/cdn-cgi/l/email-protection#67060c080a060e150627000a060e0b4904080a"><i class="fa fa-envelope fa-3x"*/}
            {/*                                                                                    aria-hidden="true"></i></a>*/}
            {/*</div>*/}
        </div>
    )
}

export default App;
