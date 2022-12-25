import Images from "../Images/Imgindex";
import tw from "twin.macro";
import styled from "styled-components";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const MiniDialog = styled.div`
    display: ${() => (openMenu ? "block" : "none")};
    ${tw`
    fixed 
    w-full 
    max-w-sm 
    p-9 
    text-base 
    font-semibold
    text-gray-900 
    bg-white 
    shadow-lg 
    rounded-3xl 
    top-4 
    right-4 
    dark:bg-gray-800 
    dark:text-gray-400
  `}
  `;

  return (
    <>
      <NavbarDiv>
        <ActualNavbar>
          <LeftLogo>
            <span className="sr-only">Profile Picture</span>
            <span className="block dark:hidden">
              <img
                alt="Bhanu Sunka"
                width="40"
                height="40"
                className="rounded-full"
                style={{ color: "transparent" }}
                src={Images.BLogo}
              />
            </span>
          </LeftLogo>

          <nav className="hidden gap-x-11 text-[1.9rem] md:flex">
            <a href="/">
              <span className="font-bold text-teal-500 dark:text-teal-400 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all">
                Home
              </span>
            </a>
            <a href="/about">
              <span className="font-normal text-gray-500 dark:text-gray-400 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all">
                About
              </span>
            </a>
            <a href="/projects">
              <span className="font-normal text-gray-500 dark:text-gray-400 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all">
                Projects
              </span>
            </a>
            <a href="/skills">
              <span className="font-normal text-gray-500 dark:text-gray-400 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all">
                Skills
              </span>
            </a>
            <a href="/contact">
              <span className="font-normal text-gray-500 dark:text-gray-400 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all">
                Contact
              </span>
            </a>
          </nav>

          <ButtonDiv>
            <DarkModeBtn>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </DarkModeBtn>
          </ButtonDiv>

          <div className="-my-2 -mr-2 md:hidden">
            <Hamburger onClick={() => setOpenMenu(true)}>
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 5.75H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 18.25H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 12H19.25"
                ></path>
              </svg>
            </Hamburger>
          </div>

          <MiniDialog>
            <CloseBtn onClick={() => setOpenMenu(false)}>
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-4 h-4 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </CloseBtn>
            <ul className="space-y-9">
              <li>
                <a href="/">
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="/about">
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a href="/projects">
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500">
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a href="/skills">
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500">
                    Skills
                  </span>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <span className="text-2xl hover:text-teal-400 dark:hover:text-teal-500">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-200/10">
              <DialogDarkBtn aria-label="Toggle Dark Mode" type="button">
                <p className="pb-2 text-2xl font-semibold">
                  Change to Dark Theme
                </p>
              </DialogDarkBtn>
            </div>
          </MiniDialog>
        </ActualNavbar>
      </NavbarDiv>
    </>
  );
};

const NavbarDiv = tw.div`
fixed
z-50 
w-full 
text-gray-900 
bg-white 
bg-opacity-50 
h-[7rem] 
dark:bg-dark 
dark:text-gray-100 
backdrop-filter 
backdrop-blur-lg 
dark:bg-opacity-50
`;

const ActualNavbar = tw.div`
flex 
items-center 
justify-between 
max-w-[112rem] 
px-4 
py-4 
mx-auto 
sm:px-6 
md:space-x-10
`;

const LeftLogo = tw.div`
flex 
justify-start 
lg:w-0 
lg:flex-1
`;

const ButtonDiv = tw.div`
items-center 
justify-end 
hidden 
md:flex 
md:flex-1 
lg:w-0
`;

const DarkModeBtn = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    border: 2px solid black;
  }
  ${tw`
    p-5 
    border-2 
    border-coolGray-100 
    border-solid 
    rounded-full 
    bg-coolGray-200
  `}
`;

const Hamburger = tw.div`
bg-gray-200
dark:bg-midnight 
text-gray-600 
dark:text-gray-300 
rounded-full 
p-3.5 
inline-flex 
items-center 
justify-center 
hover:text-gray-700 
hover:bg-gray-300 
cursor-pointer 
focus:outline-none 
`;

const CloseBtn = tw.button`
absolute 
flex 
items-center 
justify-center 
w-8 
h-8 
text-gray-500 
top-7 
right-7 
hover:text-gray-600 
dark:text-gray-400 
dark:hover:text-gray-300
`;

const DialogDarkBtn = tw.button`
flex 
items-center 
justify-center 
w-full 
py-2 
bg-gray-200 
rounded-full 
dark:bg-midnight-hover
`;

export default Navbar;
