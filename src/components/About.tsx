import styled from "styled-components";
import Images from "../Images/Imgindex";

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 sm:grid-row-2 ">
        <div className="flex flex-col justify-center tablet:pr-12 xxsm:pr-10">
          <h1 className="mobile:text-5xl xxsm:text-4xl font-headings tracking-wide font-bold leading-tight ">
            A Bit About Me & My Skills
          </h1>
          <span className="bg-teal-500 mobile:w-[18rem] xxsm:w-[14rem] mt-4 min-w-20 h-2 bg-gradient-to-r from-teal-500 to-teal-300"></span>
          <div className="mt-8">
            <p className="font-sans tracking-wide">
              Hello! My name is Bhanu Sunka. I am a hard-working engineering
              student specializing in Information Technology from Xavier
              Institute of engineering, Mumbai University.
            </p>
            <p>
              I love to explore new technologies and leverage them to solve
              real-life problems. I'm a passionate learner who's always willing
              to learn and work across various technologies and domains. In my
              spare time, I love contributing to open-source projects.
            </p>
            <p>
              I am highly proficient in web development. I love to build
              responsive user-friendly websites that look visually appealing,
              with nice and fluid interactions, and close attention to User
              Experience. I constantly strive for the best outcome on any
              project I take on.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-1 gap-x-14 sm:grid-rows-2 xxsm:mt-12 md:mt-0 xsm:grid-cols-1  ">
          <img
            src={Images.FooterBg}
            alt=""
            className="-scale-x-100 absolute right-0 mr-[-3.6rem] mt-[-13.7rem] tablet:h-[70rem] tablet:opacity-60 xxsm:h-[80rem] xxsm:opacity-40 -z-4"
          />
          <div className=" bg-[#f2e8f39e] drop-shadow-md hover:drop-shadow-none z-10 max-h-[40rem] xxsm:h-[19rem] tablet:h-[25rem] xxsm:rounded-3xl mb-3 tablet:mb-0 tablet:rounded-xl laptop:text-2xl hover:bg-transparent hover:border-2 hover:border-pink-300 hover:border-dashed transition ease-in-out duration-700">
            <h1 className="flex font-mono justify-center mt-10 text-slate-700 font-bold text-[1.7rem]">
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
          <div className="z-10 bg-[#fdffba59] drop-shadow-md hover:drop-shadow-none tablet:mt-14 max-h-[40rem] xxsm:h-[19rem] tablet:h-[25rem] xxsm:rounded-3xl mb-2 tablet:mb-0 tablet:rounded-xl text-2xl overflow-auto hover:bg-transparent hover:border-2 hover:border-yellow-300 hover:border-dashed transition ease-in-out duration-700">
            <h1 className="flex font-mono text-slate-700 justify-center mt-10 font-bold text-[1.7rem]">
              Web Development
            </h1>
            <div className="flex space-x-6 space-y-4 mt-8 flex-wrap mx-6 ">
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
          <div className="z-10 bg-[#a8f9e84f] drop-shadow-md hover:drop-shadow-none mt-2 max-h-[40rem] xxsm:h-[19rem] tablet:h-[25rem] xxsm:rounded-3xl mb-2 tablet:mb-0 tablet:rounded-xl text-2xl hover:bg-transparent hover:border-2 hover:border-teal-300 hover:border-dashed transition ease-in-out duration-700">
            <h1 className="flex font-mono text-slate-700 justify-center mt-10 font-bold text-[1.7rem]">
              Tools
            </h1>
            <div className="flex space-x-7 space-y-4 mt-8 flex-wrap mx-8">
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
          <div className="z-10 bg-[#d6cfff52] drop-shadow-md hover:drop-shadow-none tablet:mt-14 max-h-[40rem] xxsm:h-[19rem] tablet:h-[25rem] xxsm:rounded-3xl mb-2 tablet:mb-0 tablet:rounded-xl text-2xl overflow-auto hover:bg-transparent hover:border-2 hover:border-purple-400 hover:border-dashed transition ease-in-out duration-700">
            <h1 className="flex font-mono text-slate-700 justify-center mt-10 font-bold text-[1.7rem]">
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
      <Hr />
    </>
  );
};

const Hr = styled.hr`
  margin-top: 4rem;
  margin-bottom: 6.4rem;
  height: 3.5rem;
  width: 100%;
  border-style: none;
  text-align: center;

  &::before {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: rgb(209 213 219 / 1);
    content: "∿∿∿";
  }
`;

export default About;
