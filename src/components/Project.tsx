import styled from "styled-components";
import tw from "twin.macro";
import Images from "../Images/Imgindex";
import Hr from "./Hr";

const project = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-16">
        <h2 className="text-3xl tablet:text-4xl text-center font-headings text-indigo-500">
          PROJECTS
        </h2>
        <h1 className="text-5xl tablet:text-6xl text-center font-headings">
          A collection of my favorite works.
        </h1>
      </div>

      {/* //* 1st Card  */}
      <MainGrid className="bg-gradient-to-b from-indigo-50 to-indigo-300 border-indigo-100">
        <LeftGrid className="order-2 ">
          <h2 className="text-6xl">Freelansters</h2>
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
            <Button2
              aria-label="button"
              type="button"
              className="group"
              href="https://github.com/Bhanu1776/Freelansters"
              target="_blank"
            >
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
          </div>
        </LeftGrid>
        <div className="md:order-2">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="CSS Art Challenge on a Macbook Pro"
              decoding="async"
              data-nimg="intrinsic"
              srcSet={Images.Freelansters}
            />
          </Span1>
        </div>
      </MainGrid>

      {/* //* 2nd Card  */}
      <MainGrid className="bg-gradient-to-b from-purple-50 to-purple-300 border-purple-100">
        <LeftGrid className="order-1">
          <h2 className="text-5xl">Venue Booking System</h2>
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
        <div>
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="CSS Art Challenge on a Macbook Pro"
              decoding="async"
              data-nimg="intrinsic"
              srcSet={Images.Venue}
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
            />
          </Span1>
        </div>
      </MainGrid>

      {/* //* 3rd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100">
        <LeftGrid className="order-2">
          <h2 className="text-6xl">SaxX</h2>
          <p>
            E-commerce static prototype developed to practice my frontend
            designing skills. Build with pure html css and javascript.
          </p>
          <div>
            <Button
              href="https://bhanu1776.github.io/Ecommerce.github.io/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              Visit SaxX
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
            <Button2
              aria-label="button"
              type="button"
              className="group"
              href="https://github.com/Bhanu1776/Full_Stack_Dev/tree/master/Ecommerce"
              target="_blank"
            >
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
          </div>
        </LeftGrid>
        <div className="md:order-2">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="CSS Art Challenge on a Macbook Pro"
              decoding="async"
              data-nimg="intrinsic"
              srcSet={Images.Sax}
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
            />
          </Span1>
        </div>
      </MainGrid>

      {/* //* 4th Card  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100">
        <LeftGrid className="order-1">
          <h2 className="text-5xl">Hotel Management System</h2>
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
        <div>
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="CSS Art Challenge on a Macbook Pro"
              decoding="async"
              data-nimg="intrinsic"
              srcSet={Images.Hotel}
              className="!m-0 !max-w-[100%] !max-h-[100%] !p-12"
            />
          </Span1>
        </div>
      </MainGrid>
      <Hr />
    </>
  );
};

const MainGrid = styled.div`
  ${tw`
    p-2
    md:p-0
    mb-20
    grid
    md:grid-cols-2
    gap-2
    rounded-[2.5rem]
    grid-cols-1
    `}
`;

const LeftGrid = styled.div`
  ${tw`
  self-end 
  col-span-1 
  md:m-8
  md:ml-20 
  !mb-20 
  text-center 
  md:text-left
  flex
  flex-col
`}

  &>h2 {
    ${tw` 
    mt-0 
    ml-2 
    font-headings 
    font-bold 
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
    `}
  }
`;

const Button = styled.a`
  ${tw`
    inline-flex 
    text-[1.7rem] 
    items-center 
    rounded-full 
    px-10 
    py-3.5 
    mt-16 
    font-semibold 
    transition
    bg-midnight 
    text-white 
    dark:bg-gray-200 
    dark:text-midnight 
    hover:bg-slate-700 
    no-underline
  `}

  svg {
    ${tw`
      mt-0.5 
      ml-4 
      -mr-3 
      stroke-2 
      stroke-white 
      dark:stroke-midnight
    `}
  }
`;

const Button2 = tw.a`
  inline-flex 
  relative
  z-10
  text-[1.7rem] 
  items-center 
  rounded-full 
  px-9 
  py-4 
  font-semibold 
  transition 
  text-midnight 
  dark:text-white
`;

const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  max-width: 100%;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0rem;
  border: none;
  margin: auto;
  display: block;
  width: auto !important;
  min-width: 100%;
  min-height: 100%;
  object-fit: fill;

  ${tw`
    md:ml-32
    md:[height: 68rem]
  `}
`;

export default project;