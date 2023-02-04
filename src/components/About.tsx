import tw from "twin.macro";
import Images from "../Images/Imgindex";
import { Languages, Web, Tools, Other } from "./LangData";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const About = () => {
  return (
    <>
      <GridDiv id="About">
        <LeftGrid>
          <LeftTitle>A Bit About Me & My Skills</LeftTitle>
          <TitleDivider />
          <div className="mt-8">
            <LeftPara>
              Hello! My name is Bhanu Sunka. I am a hard-working engineering
              student specializing in Information Technology from Xavier
              Institute of engineering, Mumbai University.
            </LeftPara>
            <LeftPara>
              I love to explore new technologies and leverage them to solve
              real-life problems. I'm a passionate learner who's always willing
              to learn and work across various technologies and domains. In my
              spare time, I love contributing to open-source projects.
            </LeftPara>
            <LeftPara>
              I am highly proficient in web development. I love to build
              responsive user-friendly websites that look visually appealing,
              with nice and fluid interactions, and close attention to User
              Experience. I constantly strive for the best outcome on any
              project I take on.
            </LeftPara>
          </div>
        </LeftGrid>

        <RightGrid>
          <BgImg src={Images.FooterBg} alt="" />

          <Card1
            data-aos="fade-down-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <CardHeading>Programming Languages</CardHeading>
            <LangDiv1>
              {Languages.map((val) => {
                return [
                  <img
                    src={val.src}
                    alt={val.alt}
                    width={val.width}
                    key={val.index}
                    id={val.alt}
                    data-tooltip-content={val.alt}
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                  />,
                  <Tooltip anchorId={val.alt} />,
                ];
              })}
            </LangDiv1>
          </Card1>

          <Card2
            data-aos="fade-down-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <CardHeading>Web Development</CardHeading>
            <LangDiv2>
              {Web.map((val) => {
                return [
                  <img
                    src={val.src}
                    alt={val.alt}
                    width={val.width}
                    key={val.alt}
                    id={val.alt}
                    data-tooltip-content={val.alt}
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                  />,
                  <Tooltip anchorId={val.alt} />,
                ];
              })}
            </LangDiv2>
          </Card2>

          <Card3
            data-aos="fade-up-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <CardHeading>Tools</CardHeading>
            <LangDiv3>
              {Tools.map((val) => {
                return [
                  <img
                    src={val.src}
                    alt={val.alt}
                    width={val.width}
                    key={val.alt}
                    id={val.alt}
                    data-tooltip-content={val.alt}
                    data-tooltip-place="top"
                    data-tooltip-delay-show={300}
                  />,
                  <Tooltip anchorId={val.alt} />,
                ];
              })}
            </LangDiv3>
          </Card3>

          <Card4
            data-aos="fade-up-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <CardHeading>Other</CardHeading>
            <LangDiv4>
              {Other.map((val) => {
                return [
                  <img
                    src={val.src}
                    alt={val.alt}
                    width={val.width}
                    key={val.alt}
                    id={val.alt}
                    data-tooltip-content={val.alt}
                    data-tooltip-place="top"
                    data-tooltip-delay-show={100}
                  />,
                  <Tooltip anchorId={val.alt} />,
                ];
              })}
            </LangDiv4>
          </Card4>
        </RightGrid>
      </GridDiv>
    </>
  );
};

const GridDiv = tw.div`
grid 
gap-2 
md:grid-cols-2 
// sm:grid-rows-2 
`;

const LeftGrid = tw.div`
flex 
flex-col 
justify-center 
xxsm:px-2
tablet:pr-14 
`;

const LeftTitle = tw.h1`
font-headings 
tracking-wide 
font-extrabold
leading-tight 
text-slate-900
xxsm:flex
xxsm:justify-center
xxsm:text-[2.50rem] 
md:block
mobile:text-5xl 
dark:text-gray-200
`;

const TitleDivider = tw.span`
bg-teal-500 
mt-4 
h-2 
bg-gradient-to-r 
from-teal-500 
to-teal-300
// min-w-20 

mobile:w-[22rem] 
md:w-[18rem] 
xxsm:w-[16rem] 
xxsm:h-[0.40rem]
xxsm:mx-auto
md:mx-0
`;

const LeftPara = tw.p`
font-sans
tracking-wide 
text-justify
dark:text-gray-200
`;

const RightGrid = tw.div`
grid 
gap-1 
gap-x-14 
xxsm:mt-12 
xsm:grid-cols-1 
sm:grid-cols-2 
sm:grid-rows-2 
md:mt-0 
`;

const BgImg = tw.img`
absolute 
right-0 
-scale-x-100 
mr-[-3.6rem] 
mt-[-13.7rem] 
xxsm:h-[80rem] 
xxsm:opacity-40 
tablet:h-[70rem] 
tablet:opacity-60 
// -z-40
`;

const Card1 = tw.div`
bg-[#f2e8f39e] 
z-10 
mb-3 
max-h-[40rem] 
drop-shadow-xl
overflow-y-auto 
overflow-x-hidden 
hover:drop-shadow-none 
hover:bg-transparent 
hover:border-2 
hover:border-pink-300 
hover:border-dashed 
hover:transition
hover:ease-in-out
transition 
ease-in-out
duration-700
xxsm:h-[19rem] 
xxsm:rounded-3xl 
tablet:h-[25rem] 
tablet:mb-0 
tablet:rounded-2xl 
laptop:text-2xl 
dark:from-slate-900 
dark:to-purple-700 
dark:border-purple-700 
dark:border-r 
md:dark:bg-gradient-to-br
dark:bg-gradient-to-br
dark:hover:bg-none
`;

const CardHeading = tw.h1`
flex 
font-mono 
justify-center 
mt-10 
text-slate-700 
font-bold 
text-[1.7rem]
dark:text-slate-200 
`;

const LangDiv1 = tw.div`
flex 
flex-wrap 
space-x-7 
space-y-4 
mt-8 
mx-8
`;

const Card2 = tw.div`
bg-[#fdffba59] 
z-10 
overflow-y-auto 
overflow-x-hidden 
drop-shadow-2xl
text-2xl 
max-h-[40rem] 
mb-2 
hover:drop-shadow-none 
hover:bg-transparent 
hover:border-2 
hover:border-yellow-300 
hover:border-dashed 
hover:transition
hover:ease-in-out
transition 
ease-in-out 
duration-700
xxsm:rounded-3xl 
xxsm:h-[19rem] 
tablet:mt-14 
tablet:h-[25rem] 
tablet:rounded-2xl 
tablet:mb-0 
dark:from-slate-900 
dark:to-yellow-600 
dark:border-yellow-300 
dark:border-b 
dark:bg-gradient-to-bl
dark:hover:bg-none
`;

const LangDiv2 = tw.div`
flex 
space-x-6 
space-y-4 
mt-8 
flex-wrap 
mx-6
`;

const Card3 = tw.div`
bg-[#a8f9e84f] 
drop-shadow-2xl
overflow-y-auto 
overflow-x-hidden 
z-10 
mt-2 
max-h-[40rem] 
mb-2 
text-2xl 
hover:bg-transparent 
hover:border-2 
hover:border-teal-300 
hover:border-dashed 
hover:drop-shadow-none 
hover:transition
hover:ease-in-out
transition 
ease-in-out 
duration-700
xxsm:rounded-3xl 
xxsm:h-[19rem] 
tablet:mb-0 
tablet:rounded-2xl 
tablet:h-[25rem] 
dark:from-slate-900 
dark:to-pink-500 
dark:border-pink-500 
dark:border-t 
md:dark:bg-gradient-to-tr
dark:bg-gradient-to-tr
dark:hover:bg-none
`;

const LangDiv3 = tw.div`
flex 
flex-wrap 
space-x-7 
space-y-4 
mx-8
mt-8 
`;

const Card4 = tw.div`
bg-[#d6cfff52] 
z-10 
overflow-y-auto 
overflow-x-hidden 
drop-shadow-xl
text-2xl 
max-h-[40rem] 
mb-2 
hover:drop-shadow-none 
hover:bg-transparent 
hover:border-2 
hover:border-purple-400 
hover:border-dashed 
hover:transition
hover:ease-in-out
transition 
ease-in-out 
duration-700
xxsm:h-[19rem] 
xxsm:rounded-3xl 
tablet:mt-14 
tablet:h-[25rem]
tablet:mb-0 
tablet:rounded-2xl 
dark:from-slate-900 
dark:to-teal-500 
dark:border-teal-500 
dark:border-t 
md:dark:bg-gradient-to-tl
dark:bg-gradient-to-tl
dark:hover:bg-none
`;

const LangDiv4 = tw.div`
flex 
flex-wrap 
space-x-6 
space-y-4 
mx-7
mt-8 
`;

export default About;
