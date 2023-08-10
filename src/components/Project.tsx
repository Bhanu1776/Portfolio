import styled from "styled-components";
import tw from "twin.macro";
import ReactGa from "react-ga4"

const Project = () => {
  return (
    <>
      <header
        id="Project"
        className="flex flex-col items-center gap-4 mt-28 mb-16"
      >
        <h2 className="text-3xl tablet:text-4xl text-center font-headings text-indigo-500 dark:text-teal-500">
          PROJECTS
        </h2>
        <h1 className="text-5xl tablet:text-6xl text-center font-headings dark:text-gray-200">
          A collection of my favorite works.
        </h1>
      </header>

      {/* //* 1st Card  */}
      <MainGrid className="bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100 dark:from-slate-900 dark:to-indigo-900 dark:border-indigo-800 dark:border-t ">
        <LeftGrid className="order-2 ">
          <h2 className="text-6xl dark:text-gray-200">Freelansters</h2>
          <p>
            Freelansters is a Freelancing Website where you can get your work
            done. The place where you can easily Find Jobs or Post Jobs!
          </p>
          <div>
            <Button
              href="https://freelansters-git-master-bhanu1776.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={ ()=>{ ReactGa.event({category: "Freelansters", action:"Visited Freelansters"}); navigator.vibrate(900)}}
            >
              Visit Freelansters
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
            <a
              href="https://github.com/Bhanu1776/Freelansters"
              target="_blank"
              rel="noreferrer"
            >
              <Button2 aria-label="button" className="group" onClick={()=>{navigator.vibrate(400)}}>
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Freelancing"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/Freelansters.png?updatedAt=1679832380833"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 2nd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-6xl dark:text-gray-200">NextJs-Starter</h2>
          <p>
            Npm package comes with latest and greatest Nextjs13, Typescript, Tailwind, Eslint, Prettier, Husky, etc which makes development process easier.
          </p>
          <div>
            <Button
              href="https://starter-website-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={ ()=>{ ReactGa.event({category: "Npm_NextJs", action:"Website"}); navigator.vibrate(900)}}
            >
              Visit Npm
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
            <a
              href="https://www.npmjs.com/package/@bhanu17/nextjs-starter"
              target="_blank"
              rel="noreferrer"
            >
              <Button2 aria-label="button" className="group" onClick={()=>{navigator.vibrate(400)}}>
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Npm package"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/NextNpm.png?updatedAt=1687549768580"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 3rd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-6xl dark:text-gray-200">JellyFish-x-Retro</h2>
          <p>
            Vscode Retro theme injects modern aesthetic looks and wild 80's animations into your VS code 🚀💥💣
          </p>
          <div>
            <Button
              href="https://marketplace.visualstudio.com/items?itemName=Bhanu1776.jellyfish-retro"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={ ()=>{ ReactGa.event({category: "JellyFish Marketplace", action:"Marketplace"}); navigator.vibrate(900)}}
            >
              Visit Marketplace
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
            <a
              href="https://github.com/Bhanu1776/vscode-Jellyfish-x-Retro"
              target="_blank"
              rel="noreferrer"
            >
              <Button2 aria-label="button" className="group" onClick={()=>{navigator.vibrate(400)}}>
                Source Code
                <svg
                  className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
                  fill="none"
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
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
              </Button2>
            </a>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Vscode theme"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/Jellyfish-x-retro.png?updatedAt=1679832380911"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 4th Card  */}
      <MainGrid className="bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100 dark:from-slate-900 dark:to-purple-800 dark:border-purple-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-5xl dark:text-gray-200">Gatherable</h2>
          <p>
            Venue booking system is a Desktop application where venue owners can
            register their venues and customers can book venues for events as
            per their location, availability and interest. Built using Java
            Swing and MySQL.
          </p>
          <div>
            <Button
              href="https://github.com/Bhanu1776/Java_Project"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={ ()=>{ ReactGa.event({category: "Venue Booking System", action:"Source code"}); navigator.vibrate(900)}}
            >
              Source Code
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
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Venue Booking"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/Venue.png?updatedAt=1679832379601"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 5th Card  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
            Hotel Management System
          </h2>
          <p>
            It is a simple web application that allows the hotel manager to
            handle all hotel activities online. This application is built using
            Python Flask.
          </p>
          <div>
            <Button
              href="https://github.com/Bhanu1776/Python-Project"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={ ()=>{ ReactGa.event({category: "Hotel Management", action:"Source code"}); navigator.vibrate(900)}}
            >
              View Source Code
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
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Hotel Management"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://ik.imagekit.io/bhanu1776/Portfolio/Hotel.png?updatedAt=1679832380233"
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
    </>
  );
};

const MainGrid = styled.section`
  ${tw`
    grid
    grid-cols-1
    gap-2
    rounded-[2.5rem]
    mb-20
    p-2
    md:p-0
    md:grid-cols-2
    `}
`;

const LeftGrid = styled.article`
  ${tw`
  flex
  flex-col
  self-end 
  col-span-1 
  text-center 
  !mb-20 
  md:text-left
  md:m-8
  md:ml-20 
`}

  &>h2 {
    ${tw` 
    font-headings 
    font-bold 
    mt-0 
    ml-2 
    mb-10
    `}
  }

  & > p {
    ${tw`
      font-sans 
      text-3xl
      ml-2 
      pr-4
      md:text-left
      dark:text-gray-200
    `}
  }
`;

const Button = styled.a`
  ${tw`
    bg-midnight 
    text-white 
    inline-flex 
    text-[1.7rem] 
    items-center 
    rounded-full 
    font-semibold 
    no-underline
    transition
    px-10 
    py-3.5 
    mt-16 
    dark:bg-gray-200 
    dark:text-midnight 
    hover:bg-slate-700 
    select-none
  `}

  svg {
    ${tw`
      stroke-2 
      stroke-white 
      mt-0.5 
      ml-4 
      -mr-3 
      dark:stroke-midnight
    `}
  }
`;

const Button2 = tw.button`
  inline-flex 
  relative
  z-10
  font-semibold 
  transition 
  text-midnight 
  text-[1.7rem] 
  items-center 
  rounded-full 
  px-9 
  py-4 
  bg-transparent
  dark:text-white
  select-none
`;

const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  max-width: 100%;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  object-fit: fill;
  border: none;
  padding: 0rem;
  margin: auto;
  width: auto !important;
  min-width: 100%;
  min-height: 100%;

  ${tw`
    md:ml-32
    md:[height: 68rem]
  `}
`;

export { Project, Button };
