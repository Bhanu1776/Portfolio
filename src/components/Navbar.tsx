import Images from "../Images/Imgindex";
import tw from "twin.macro";

const Navbar = () => {
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
            <a href="/blog">
              <span className="font-normal text-gray-500 dark:text-gray-400 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all">
                Skills
              </span>
            </a>
            <a href="/community-wall">
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
                stroke-width="2.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </DarkModeBtn>
          </ButtonDiv>

          <div className="-my-2 -mr-2 md:hidden">
            <Hamburger>
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 5.75H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 18.25H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 12H19.25"
                ></path>
              </svg>
            </Hamburger>
          </div>
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

const DarkModeBtn = tw.div`
p-5 
border-2 
border-coolGray-100 
border-solid 
rounded-full 
bg-coolGray-200
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

export default Navbar;
