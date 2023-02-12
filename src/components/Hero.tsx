import styled from "styled-components";
import tw from "twin.macro";
import Images from "../Images/Imgindex";
import Hr from "./Hr";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      {/* //* Background Ray */}
      <figure
        id="Home"
        className="absolute z-10 overflow-hidden -top-32 md:-top-72 md:right-36"
      >
        <BgDiv>
          <RayBg
            alt=""
            aria-hidden="true"
            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
            data-aos="fade-down"
            data-aos-delay="500"
          />
          <RayHero
            alt=""
            src={Images.HeroBg}
            decoding="async"
            data-nimg="intrinsic"
            className="absolute top-0 right-0"
            data-aos="fade-down"
            data-aos-delay="500"
          />
        </BgDiv>
      </figure>

      {/* //* Content with Image */}
      <main>
        <header className="grid items-center grid-cols-1  text-center md:mt-24 md:text-left md:grid-cols-6">
          <LeftH1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Hello, I'm
            <span className="text-teal-500 dark:text-teal-400">
              &nbsp;Bhanu
            </span>
            . I'm a student, Web developer and Enthusiastic learner.
          </LeftH1>

          <div className="order-1 md:order-2">
            <ProfileImgDiv>
              <ProfileImg
                alt="Bhanu Sunka"
                src={Images.BhanuImg}
                className="col-span-1 rounded-full"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
              />
            </ProfileImgDiv>
          </div>
        </header>

        {/* //* Bottom Buttons */}
        <BtnDiv data-aos="fade-right" data-aos-duration="1000">
          <Link
            to="Footer"
            spy={true}
            hashSpy={true}
            isDynamic={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <BtnPrimary aria-label="button" type="button" className="group">
              Hire Me
              <svg
                className="mt-0.5 ml-4 -mr-3 stroke-2 stroke-white dark:stroke-midnight"
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
            </BtnPrimary>
          </Link>
          <a href={Images.Resume} download="Bhanu_Web-Developer">
            <Button2 aria-label="button" className="group">
              Download Resume
              <svg
                className="mt-0.5 ml-4 !z-50 -mr-3 stroke-2 stroke-midnight dark:stroke-white"
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
        </BtnDiv>
      </main>

      <Hr />
    </>
  );
};

const BgDiv = styled.span`
  user-select: none;
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
  ${tw`
  xxsm:m-[20rem]
  tablet:m-0
  `}
`;
const RayBg = styled.img`
  user-select: none;
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
const RayHero = styled.img`
  user-select: none;
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const LeftH1 = styled.h1`
  ${tw`
    text-5xl
    order-2 
    z-10 
    col-span-5 
    mt-[6.5rem] 
    tablet:mt-[5.1rem] 
    font-fira
    tracking-wide 
    font-semibold 
    leading-tight 
    md:leading-normal 
    md:order-1 
    xxsm:text-6xl
    sm:text-7xl
    md:text-[4.8rem]
    dark:text-gray-200
    `}
`;
const ProfileImgDiv = styled.span`
  top: 3.5rem;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: 160px;
  height: 160px;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px auto;
  padding: 0px;
  position: relative;
  display: flex;

  ${tw`
  lg:right-[2rem]
  lg:top-[3.5rem]
  `}
`;
const ProfileImg = styled.img`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const BtnDiv = tw.section`
relative
z-10
space-y-6 
mt-16 
text-center 
md:text-left 
md:space-y-0 
md:space-x-4
`;
const BtnPrimary = tw.button`
inline-flex 
text-3xl 
items-center 
rounded-full 
px-16 
py-4 
font-semibold 
transition 
bg-midnight 
text-white 
dark:bg-gray-200 
dark:text-midnight 
hover:bg-slate-700
`;
const Button2 = tw.button`
inline-flex 
relative
z-50
text-3xl 
items-center 
rounded-full 
mt-4
sm:mt-0
px-9 
py-4 
font-semibold 
transition 
bg-transparent
text-midnight 
dark:text-white
`;

export default Hero;
