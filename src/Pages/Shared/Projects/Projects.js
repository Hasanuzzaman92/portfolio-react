import React, { useEffect, useState } from 'react';
import Project from './Project';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects)

    useEffect(() => {
    fetch("projects.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
    
    return (
        <section id='projects' className='my-20'>
            <h2 className='text-3xl font-semibold text-amber-400 mb-12'>My Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects?.map(project => <Project 
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </section>
    );
};

export default Projects;