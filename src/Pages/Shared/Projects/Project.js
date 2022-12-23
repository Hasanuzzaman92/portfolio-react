import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { name, img, link } = project;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="bg-rose-100">
        <img className="w-full h-52" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <div className="card-actions justify-between mt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-outline text-white w-40"
          >
            {" "}
            visit
          </a>
          <Link to={`/project/${project.id}`}>
            <button className="btn btn-outline btn-success w-40">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
