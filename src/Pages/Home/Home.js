import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../Shared/ContactMe/ContactMe';
import Projects from '../Shared/Projects/Projects';
import Skills from '../Shared/Skills/Skills';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <Skills></Skills>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;