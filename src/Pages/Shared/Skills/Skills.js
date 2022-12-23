import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="my-20">
      <h2 className="text-3xl font-semibold text-amber-400 mb-12">My Skills</h2>
      <div className="lg:flex sm:block justify-between">
        <div class="flex flex-col gap-4 lg:w-1/2 sm:w-full">
            <h2 className="text-2xl font-semibold">Front-end Development</h2>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-sm font-semibold inline-block py-1 px-2 uppercase ">
                  html-5
                </span>
              </div>
                <progress className="h-4 progress progress-primary" value="85" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  css-3
                </span>
              </div>
              <progress className="h-4 progress progress-secondary" value="85" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  Bootstrap
                </span>
              </div>
              <progress className="h-4 progress progress-accent" value="80" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  tailwind-css
                </span>
              </div>
              <progress className="h-4 progress progress-warning" value="80" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  react js
                </span>
              </div>
              <progress className="h-4 progress progress-error" value="85" max="100"></progress>
            </div>
          </div>
          
        </div>
        <div class="flex flex-col gap-4 lg:w-1/2 sm:w-full">
            <h2 className="text-2xl font-semibold">Back-end Development</h2>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-sm font-semibold inline-block py-1 px-2 uppercase ">
                  Javascript
                </span>
              </div>
                <progress className="h-4 progress progress-primary" value="70" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  node js
                </span>
              </div>
              <progress className="h-4 progress progress-secondary" value="50" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  express js
                </span>
              </div>
              <progress className="h-4 progress progress-accent" value="50" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  mongodb
                </span>
              </div>
              <progress className="h-4 progress progress-warning" value="60" max="100"></progress>
            </div>
          </div>
          <div>
            <div class="block p-4 bg-slate-600 rounded-lg shadow w-[90%]">
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase ">
                  JWT
                </span>
              </div>
              <progress className="h-4 progress progress-error" value="35" max="100"></progress>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
