import tw from "twin.macro";
import { Button } from "./Project";
import Hr from "./Hr";

const Work = () => {
  return (
    <>
      <h1
        id="Work"
        className="text-5xl font-headings mt-36 font-bold dark:text-teal-500"
      >
        Work Experience
      </h1>
      <p className="font-sans text-3xl mb-16 dark:text-gray-200">
        Here's a quick rundown of my most recent experiences.
      </p>

      <div>
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
                  fill-rule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                Android Tester
              </h3>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                Evolution-X Organization
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; 2021 - 2022 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
            An Android open source community for developing Custom Roms. <br />
            <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span>
            Successfully cleared Android tester phase 3. <br />
            <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span>
            https://github.com/Evolution-X
          </p>
        </Article>
        <Button
          className="group cursor-pointer"
          href="https://github.com/Bhanu1776"
          target="_blank"
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
      </div>
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
