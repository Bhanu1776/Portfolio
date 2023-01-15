import tw from "twin.macro";

const Blog = () => {
  return (
    <>
      <Div id="Blog">
        <H2>Blogs</H2>
        <H1>Coming Soon</H1>
        <P>Stay Tuned!</P>
      </Div>
    </>
  );
};

const Div = tw.div`
  bg-[#F8FAFC] 
  border-slate-200 
  px-6 
  py-6
  rounded-[1.9rem]
  mb-24
  drop-shadow-md
  mx-4
  dark:bg-midnight 
  dark:border-slate-700
  sm:py-16 
  sm:px-12 
`;

const H2 = tw.h2`
  [font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif]
  text-slate-800
  text-5xl 
  tracking-wider 
  font-bold
  mb-4 
  mt-6
  tablet:text-7xl 
`;

const H1 = tw.h1`
  text-slate-600 
  text-6xl
  font-headings 
  tracking-wide 
  font-extrabold 
  opacity-50 
  tablet:text-[7.5rem] 
  tablet:mt-10
`;

const P = tw.p`
  text-violet-600
  font-sans
  font-bold
  px-1
  pt-2
  mb-2
  tablet:text-3xl
  tablet:px-3
  tablet:mt-8
`;

export default Blog;
