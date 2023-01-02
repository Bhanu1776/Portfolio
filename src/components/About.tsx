import React from "react";

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 border sm:grid-row-2  border-orange-500">
        <div className="border border-green-600 flex flex-col justify-center">
          <h1 className="text-5xl font-headings tracking-wide font-semibold leading-tight ">
            A Bit About Me
          </h1>
          <p className="font-sans tracking-wide">
            Hello! My name is Bhanu Sunka. I am a hard-working engineering
            student specializing in Information Technology from Xavier Institute
            of engineering, Mumbai University.
          </p>
          <p>
            I love to explore new technologies and leverage them to solve
            real-life problems. I'm a passionate learner who's always willing to
            learn and work across various technologies and domains. In my spare
            time, I love contributing to open-source projects.
          </p>
          <p>
            I am highly proficient in web development. I love to build
            responsive user-friendly websites that look visually appealing, with
            nice and fluid interactions, and close attention to User Experience.
            I constantly strive for the best outcome on any project I take on.
          </p>
        </div>
        {/* <div className="border border-yellow-600 flex flex-wrap h-[50rem]">
          <div className="min-h-16 h-[25rem] border-b-rose-900 border-2 mr-4 mb-4 min-w-[2rem] w-[27rem] gap-2">
            Languages
          </div>
          <div className="min-h-16 h-[25rem] border-b-rose-400 border-2 mb-4 min-w-[2rem] w-[27rem] mt-16">
            Tools
          </div>
          <div className="min-h-16 h-[25rem] border-b-rose-900 border-2 mr-4 min-w-[2rem] mb-4 w-[27rem] gap-2">
            Extra1
          </div>
          <div className="min-h-16 h-[25rem] border-b-rose-400 border-2 mb-4 min-w-[2rem] w-[27rem] mt-16">
            Extra2
          </div>
        </div> */}

        <div className="border border-yellow-600 grid sm:grid-cols-2 gap-3 sm:grid-rows-2 xsm:grid-cols-1">
          <div className="border-2 h-[20rem] text-2xl bg-[#F1EFF8]">
            <h1 className="flex justify-center mt-6 font-bold">
              Programming Languages
            </h1>
            <div className="flex space-x-7 space-y-4 mt-8 flex-wrap mx-8">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                width="40"
              />
            </div>
          </div>
          <div className="border-2 h-[20rem] text-2xl bg-[#FBE6D4]">
            <h1 className="flex justify-center mt-6 font-bold">
              Web Development
            </h1>
            <div className="flex space-x-4 space-y-4 mt-8 flex-wrap mx-4">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="html5"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                alt="css3"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="40"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind-css"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                alt="bootstrap"
                width="40"
              />
              <img
                src="https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png"
                alt="Styled-Components"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                alt="NodeJs"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="Express"
                width="45"
              />
            </div>
          </div>
          <div className="border-2 h-[20rem] text-2xl bg-[#F0FFFC]">
            <h1 className="flex justify-center mt-6 font-bold"> Tools </h1>
            <div className="flex space-x-8 space-y-4 mt-8 flex-wrap mx-8">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                alt="Git"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
                alt="VsCode"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vim/vim-original.svg"
                alt="Vim"
                width="40"
              />
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="Vim"
                width="40"
              />
              {/* <img
                src="https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg"
                alt="Jupyter"
                width="60"
                height="60"
              /> */}
            </div>
          </div>
          <div className="border-2 h-[20rem] text-2xl bg-[#F8E1EB]">
            <h1 className="flex justify-center mt-6 font-bold font-mono">
              Other
            </h1>
            <div className="flex space-x-6 space-y-4 mt-8 flex-wrap mx-7">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="aws"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg"
                alt="jenkins"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg"
                alt="bash"
                width="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="linux"
                width="40"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/pug.svg"
                alt="pugjs"
                width="40"
              />
              <img src="https://mui.com/static/logo.png" alt="MUI" width="40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
