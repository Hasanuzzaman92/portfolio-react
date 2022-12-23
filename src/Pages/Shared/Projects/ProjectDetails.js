import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((product) => product.id == id);
        return setProjects(result);
      });
  }, [id]);

  return (
    <div className="my-10 border-2 rounded shadow-slate-500 shadow-md p-10 w-[80%] mx-auto">
      <h1 className="text-center text-4xl text-amber-500 font-bold">
        {projects.name}
      </h1>
      <h2 className="text-center text-2xl mt-4 font-semibold">
        {projects.detailsDesc}
      </h2>
      <div className="relative w-full flex gap-4 py-6 my-6 overflow-x-auto">
        {projects?.detailsImg?.map((img) => (
          <img
            className="h-72 aspect-video rounded-sm object-cover object-center dark:dark:bg-gray-500"
            src={img}
            alt=""
          />
        ))}
      </div>
      <p className="text-xl">
        <span className="font-semibold text-amber-500">Features:</span>{" "}
        {projects.features}
      </p>
      <div className="my-6">
        <p className="font-semibold text-amber-500 text-xl mb-6">
          Technologies:
        </p>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects?.technologies?.map((tech) => (
            <p className="border p-2 text-center">{tech}</p>
          ))}
        </div>
        <div className="my-6">
          <p className="font-semibold text-amber-500 text-xl mb-6">
            Github Link:
          </p>
          <div className="flex justify-around">
            <a
              href={projects.clientLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-outline text-white w-40"
            >
              {" "}
              Client Side
            </a>
            {projects.serverLink && (
              <a
                href={projects.serverLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-outline text-white w-40"
              >
                {" "}
                Server Side
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
