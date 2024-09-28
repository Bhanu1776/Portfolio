import ReactGa from "react-ga4";
import tw from "twin.macro";
import Hr from "./Hr";
import { Button } from "./Project";

const Work = () => {
  return (
    <>
      <main>
        <h1
          id="Work"
          className="text-5xl font-headings mt-36 font-bold dark:text-teal-500"
        >
          Work Experience
        </h1>
        <p className="font-sans text-3xl mb-16 dark:text-gray-200">
          Here's a quick rundown of my most recent experiences.
        </p>
      </main>

      <section>
        {/* //* RoundTechSquare */}
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13vIrjnTaNCF3GDbOpnyO7i07u0kJtUKV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Full Stack Developer
                </h3>
              </a>
              <a
                href="https://roundtechsquare.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  RoundTechSquare
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; June 2024 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-10 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            - Developed modern Frontend Apps using React.js for seamless user experiences.
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
            - Integrated complex systems and implemented key features across applications.  <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            - Built and optimized scalable backend systems using MERN stack to support high-demand use cases and Collaborated with teams to deliver robust, end-to-end solutions.
          </p>
        </Article>

        {/* //* Paras Solutions */}
        <div className="mt-16">
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky md:mt-5 top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://drive.google.com/file/d/13vIrjnTaNCF3GDbOpnyO7i07u0kJtUKV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Internship",
                    action: "Checking Internship repository - parassolutions",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  React Developer Intern
                </h3>
              </a>
              <a
                href="https://parassolutions.in/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Parassolutions Website",
                    action: "parassolutions website",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  Paras Solutions
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; November 2023 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-10 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            - Worked on two major client projects during the internship period.
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
            - Initiated the development process from scratch using React.js and Typescript, Integrated CRUD operations using Redux-toolkit to enable seamless data management. <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            - Delivered a user-friendly and efficient portal, reducing manual processes and enhancing overall productivity for financial institutions.
          </p>
        </Article>
        </div>

        {/* //* ITJOBXS */}
        {/* <div className="mt-16"> */}
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28 mt-24">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://github.com/Bhanu1776/IT-Dept-Website"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "CLG WEBSITE REPO",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  SDE Intern
                </h3>
              </a>
              <a
                href="https://itjobxs.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "CLG WEBSITE REPO",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200 hover:dark:text-teal-500">
                  ITJOBXS
                </p>
              </a>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; April 2023 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative md:mt-20 pb-10 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            - Worked on the design and development part of the college management web application.
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
            - Achieved a powerful combination of Next.js, Firebase, and Ant Design, resulting in a dynamic, scalable, and visually appealing web application. <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            - Enabled administrators to create, update, and manage course offerings, schedules, and syllabus within the system.
          </p>
        </Article>
        {/* </div> */}

        <Button
          className="group cursor-pointer"
          href="https://github.com/Bhanu1776"
          target="_blank"
          onClick={() => {
            ReactGa.event({ category: "Github from work", action: "Github" });
            navigator.vibrate(1500);
          }}
        >
          Checkout GitHub
          <svg
            fill="none"
            width="12"
            height="12"
            viewBox="0 0 10 10"
            aria-hidden="true"
            className="group"
          >
            <path
              className="transition opacity-0 group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="transition group-hover:translate-x-[3px]"
              d="M1 1l4 4-4 4"
            ></path>
          </svg>
        </Button>
      </section>
      <Hr />
    </>
  );
};

const Article = tw.article` 
  relative 
  grid 
  md:grid-cols-5 
  md:pl-8 
  -mb-12 
  md:gap-10 
  before:content-[''] 
  mx-12 
  before:block 
  before:h-full 
  before:absolute 
  before:left-[-25px] 
  md:before:left-[-17px] 
  before:border-l-2 
  before:border-gray-300 
  dark:before:border-gray-700 
  md:space-x-4 pb-8
`;

export default Work;
