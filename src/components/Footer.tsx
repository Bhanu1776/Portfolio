import ReactGa from "react-ga4";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import tw from "twin.macro";

const Footer2 = () => {
  return (
    <>
      <footer id="Footer" className="relative">
        <hr className="dark:bg-midnight dark:h-[1px] dark:border-none"></hr>
        <form action="https://formspree.io/f/mvonoajk" method="POST">
          <BgImg src="https://ik.imagekit.io/bhanu1776/Portfolio/Footer-bg.png?updatedAt=1679832383622" alt="rays" loading="lazy"/>
          <MainGrid>
            <LeftGrid>
              <LeftHeading1>GENERAL</LeftHeading1>
              <UpperDiv>
                <Link
                  to="Home"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <List>Home</List>
                </Link>
                <Link
                  to="About"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-105}
                  duration={400}
                >
                  <List>About</List>
                </Link>
                <Link
                  to="Project"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  <List>Projects</List>
                </Link>
                <Link
                  to="Work"
                  spy={true}
                  hashSpy={true}
                  isDynamic={true}
                  smooth={true}
                  offset={-240}
                  duration={200}
                >
                  <List>Work</List>
                </Link>
              </UpperDiv>

              <LeftHeading2>SOCIAL</LeftHeading2>
              <IconsDiv>
                <a
                  href="https://github.com/Bhanu1776"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">GitHub</span>
                  <LinkSvg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="GitHub"
                    data-tooltip-place="left"
                    data-tooltip-delay-show={200}
                    id="Github"
                  >
                    <path
                      d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </LinkSvg>
                  <Tooltip anchorId="Github" />
                </a>

                <a
                  href="https://in.linkedin.com/in/bhanu-sunka-94a24a21a?original_referer=https%3A%2F%2Fwww.google.com%2F"
                  rel="noreferrer"
                  target="_blank"
                  onClick={ ()=>{ ReactGa.event({category: "LinkedIn", action:"LinkedIn"})}}
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkSvg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="LinkedIn"
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                    id="LinkedIn"
                  >
                    <path
                      d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.75 11.75V16.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.75 11.75V16.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.75 8.75V9.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </LinkSvg>
                  <Tooltip anchorId="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com/bhanu_1776/"
                  rel="noreferrer"
                  target="_blank"
                  onClick={ ()=>{ ReactGa.event({category: "Instagram", action:"Instagram"})}}
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-14 h-13 transform hover:rotate-[-7deg] fill-slate-900 transition hover:fill-teal-500 dark:fill-slate-400 dark:hover:fill-teal-500"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="Instagram"
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                    id="Instagram"
                  >
                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                  </svg>
                  <Tooltip anchorId="Instagram" />
                </a>
                <a href="https://twitter.com/SunkaBhanu">
                  <span className="sr-only">Twitter</span>
                  <LinkSvg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="Twitter"
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                    id="Twitter"
                  >
                    <path
                      d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </LinkSvg>
                  <Tooltip anchorId="Twitter" />
                </a>
                <a
                  href="https://dev.to/bhanu1776"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">DEV</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-11 h-10 mt-2 transform hover:rotate-[-7deg] transition hover:text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="DEV"
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                    id="DEV"
                  >
                    <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
                  </svg>
                  <Tooltip anchorId="DEV" />
                </a>
                <a href="https://www.buymeacoffee.com/Bhanu1776" onClick={ ()=>{ ReactGa.event({category: "Buymecoffee", action:"Donation"})}}>
                  <span className="sr-only">Support</span>
                  <svg
                    className="w-14 h-11 mt-2 transform hover:rotate-[-7deg] transition hover:text-teal-500"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-tooltip-content="Buy Me A Coffee"
                    data-tooltip-place="right"
                    data-tooltip-delay-show={300}
                    id="Support"
                  >
                    <path d="M7,22h10c0.498,0,0.92-0.366,0.99-0.858L19.867,8H21V6h-1.382l-1.724-3.447C17.725,2.214,17.379,2,17,2H7 C6.621,2,6.275,2.214,6.105,2.553L4.382,6H3v2h1.133L6.01,21.142C6.08,21.634,6.502,22,7,22z M17.418,11H6.582L6.153,8h11.693 L17.418,11z M7.867,20l-0.429-3h9.123l-0.429,3H7.867z M7.618,4h8.764l1,2H6.618L7.618,4z"></path>
                  </svg>
                  <Tooltip anchorId="Support" />
                </a>
              </IconsDiv>
            </LeftGrid>

            <RightGrid>
              <RightHeading>Get In Touch</RightHeading>
              <UpperInputDiv>
                <label className="sr-only">Email address</label>
                <UpperInput
                  id="username"
                  name="username"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                  autoComplete="no"
                />
                <UpperInput
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                  autoComplete="no"
                />
              </UpperInputDiv>
            </RightGrid>

            <LowerDiv>
              <TextArea
                id="message"
                name="message"
                placeholder="Enter message"
                required
              />
              <ButtonDiv>
                <PurpleBtn type="submit" onClick={()=>{navigator.vibrate(2000)}}>Contact Me!</PurpleBtn>
              </ButtonDiv>
            </LowerDiv>
          </MainGrid>
          <Copyright>
            <span style={{"textAlign": "center", "margin": "auto"}}>
              ©{new Date().getFullYear()} Bhanu Sunka 
            </span></Copyright>
        </form>
      </footer>
    </>
  );
};

const BgImg = tw.img`
absolute 
mt-[-5.7rem] 
xxsm:h-[60rem] 
xxsm:opacity-50 
xxsm:-ml-8
tablet:ml-0
tablet:h-[40rem] 
tablet:w-[80rem]
tablet:opacity-80 
select-none
`;

const MainGrid = tw.main`
grid 
gap-2 
xxsm:grid-cols-1
md:grid-cols-3 
md:grid-rows-2 
`;

const LeftGrid = tw.section`
flex 
flex-col
row-span-2 
z-10 
!px-2 
py-12 
md:px-20 
`;

const LeftHeading1 = tw.h1`
text-slate-700 
text-[1.7rem] 
font-semibold 
font-headings
dark:text-slate-200
`;

const UpperDiv = tw.section`
flex 
flex-wrap 
gap-8
mt-4
`;

const List = tw.a`
[opacity: .7;]
[font-size: 1.65rem;]
[line-height: 1.5;]
[margin-top: 1rem;]
[font-weight:400;]
font-sans 
cursor-pointer
hover:underline 
hover:text-teal-600 
dark:text-slate-200
`;

const LeftHeading2 = tw.h1`
text-slate-700 
font-semibold 
font-headings
text-[1.7rem] 
z-10 
mt-16 
mb-3 
dark:text-slate-200
`;

const IconsDiv = tw.section`
flex 
flex-row 
z-10
dark:text-slate-400

`;

const LinkSvg = tw.svg`
w-14 
h-14 
transform 
transition 
hover:rotate-[-7deg] 
hover:text-teal-500
`;

const RightGrid = tw.section`
col-span-2 
z-10 
xxsm:px-2 
md:px-0 pt-12
`;

const RightHeading = tw.h1`
text-slate-700 
font-headings 
font-bold 
text-4xl 
mb-10
dark:text-teal-500
`;

const UpperInputDiv = tw.div`
relative 
flex 
flex-col
gap-8 
space-y-0 
my-4 
tablet:flex-row 
`;

const UpperInput = tw.input`
bg-[#ffffffa4] 
border-gray-300 
placeholder-slate-500 
rounded-full 
w-full 
px-5 
py-5 
text-2xl 
dark:bg-dark 
dark:border-gray-400 
dark:focus:ring-indigo-400 
dark:focus:ring-offset-midnight
focus:outline-none 
focus:ring-2 
focus:ring-indigo-500 
focus:ring-offset-2 
focus:ring-offset-[#F8FAFC] 
dark:text-slate-200
select-none
`;

const LowerDiv = tw.section`
col-span-2 
z-10 
xxsm:px-2 
md:px-0
`;

const TextArea = tw.textarea`
bg-[#ffffff8c] 
border-gray-300 
placeholder-slate-500 
text-2xl 
rounded-[2rem] 
resize-none
w-full 
px-5 
py-14 
mb-8 
select-none
focus:outline-none 
focus:ring-2 
focus:ring-indigo-500 
focus:ring-offset-2 
focus:ring-offset-[#F8FAFC] 
dark:bg-dark 
dark:border-gray-400 
dark:focus:ring-indigo-400 
dark:focus:ring-offset-midnight
md:-mt-8 
dark:text-slate-200
`;

const ButtonDiv = tw.section`
flex 
flex-row-reverse
`;

const PurpleBtn = tw.button`
flex 
justify-center 
items-center 
text-2xl 
font-medium 
border 
border-transparent 
rounded-full 
text-white 
bg-indigo-500 
w-full 
mb-4 
px-12 
py-3 
hover:bg-indigo-400 
focus:outline-none 
focus:ring-2 
focus:ring-white 
focus:ring-offset-2 
focus:ring-offset-indigo-700 
sm:mt-0 
sm:ml-3 
sm:w-auto 
sm:flex-shrink-0
select-none
`;

const Copyright = tw.p`
flex 
justify-center 
[font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif]
text-2xl 
bg-slate-100 
rounded-t-full
px-4 
pt-3 
pb-1 
tablet:text-[1.7rem]
tablet:justify-start 
md:px-20 
dark:bg-midnight
dark:text-slate-200
`;

export default Footer2;
