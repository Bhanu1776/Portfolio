import tw from "twin.macro";

const Blog = () => {
  return (
    <>
      <Div id="Blog">
        <H2>Blogs</H2>
        <div className="dark:text-white mt-16 gap-10 text-3xl grid grid-cols-2">
          <a href="https://dev.to/bhanu1776/tailwind-in-styled-components-29j" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200 font-semibold">Tailwindcss in Styled-Components</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">#twin #styled-components #tailwindcss #css</p>
            </div>
          </a>
          <a href="https://dev.to/bhanu1776/the-best-vscode-snippets-for-react-typescript-nextjs-redux-toolkit-5gmm" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200">The Best Vscode Snippets for React Typescript + Nextjs + Redux Toolkit</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">#vscode #reactjs #nextjs #redux</p>
            </div>
          </a>
          <a href="https://medium.com/p/b090485026d4" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200">10 UNIQUE Mac Apps You Can't Live Without!</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">#macos #macapps #unique #productivity</p>
            </div>
          </a>
          <a href="https://medium.com/p/0468d3ca5b9b" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200">10 Mac Apps I Regret Not Using Sooner</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">#macos #macapps #best #productivity</p>
            </div>
          </a>
          <a href="https://medium.com/p/f33171825f40" target="_blank" rel="noreferrer">
            <div className="border-2 max-w-3xl p-10 border-slate-500 text-left ease-in-out transition-all duration-200 rounded-2xl justify-between w-full hover:border-purple-800 dark:hover:border-teal-500">
              <h1 className="dark:text-slate-200">Top Free Utility Mac Apps You Aren't Using</h1>
              <p className="dark:text-neutral-300 tracking-wider text-[1.4rem]">#macos #macapps #productivity #free</p>
            </div>
          </a>
          
        </div>
        {/* <P>Stay Tuned!</P> */}
      </Div>
    </>
  );
};

const Div = tw.main`
  bg-[#F8FAFC] 
  border-slate-200 
  !px-20
  !py-16
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
  dark:text-teal-500
`;

export default Blog;
