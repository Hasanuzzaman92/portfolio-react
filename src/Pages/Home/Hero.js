import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import ProfilePhoto from '../../Assets/profile-pic.png'


const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="lg:w-1/2 sm:w-full">
        <img
          src={ProfilePhoto}
          alt="hasanuzzaman img"
          className=" rounded-lg mx-auto shadow-2xl opacity-75"
        />
        </figure>
        <div className="lg:w-1/2 sm:w-full p-5">
          <h1 className="text-5xl font-bold">Hi! <br/> I am <span className="text-amber-500">Md: Hasanuzzaman</span></h1>
          <h1 className="text-5xl font-bold my-5">A 
            <span className="text-amber-500">{' '}
            <Typewriter
            words={['Web Developer', 'Front-end Developer', 'React developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </span>
          </h1>
          <p className="py-6 text-justify">
            I am web developer with an amazing ability to develop website. I am self-motivated, energetic, passionate, quick-learner and ever ready to learn new thing. I am
confident to ensure the highest level of professionalism. I have a good understanding with web standard and best practice.
          </p>
          <a href='https://drive.google.com/file/d/1Im9xq6vd1tR66mwiM_6wOg1TyRVq7aCJ/view?usp=sharing' download='https://drive.google.com/file/d/1Im9xq6vd1tR66mwiM_6wOg1TyRVq7aCJ/view?usp=sharing' target='_blank' className="btn btn-ghost btn-outline text-white">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
