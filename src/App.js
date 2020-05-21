import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDev, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
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
            address: 'https://github.com/joshspindler',
            key: 'gh'
        },
        {
            icon: faDev,
            address: 'https://dev.to/joshspindler',
            key: 'db'
        },
        {
            icon: faLinkedin,
            address: 'https://linkedin.com/in/joshspindler',
            key: 'li'
        },
        {
            icon: faEnvelope,
            address: 'mailto:hi@joshspindler.dev',
            key: 'env'
        }
    ];

    return (
        <div id='icon-holder'>
            {
                links.map(link => (
                    <a key={`${link.key}-icon`} href={link.address} className='icon-hyperlink' rel='noopener noreferrer' target='_blank'>
                        <FontAwesomeIcon icon={link.icon} size={'3x'}/>
                    </a>
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
        </div>
    )
};

export default App;
