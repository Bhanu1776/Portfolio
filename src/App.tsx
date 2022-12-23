import styled from "styled-components";
import tw from "twin.macro";

const Top = styled.div`
  margin: 40px;
  ${tw`text-red-600 bg-slate-200 `}
`;

const Button = tw.button`
rounded-full
p-4
m-2
bg-red-200
cursor-crosshair
text-green-800
`;

const App = () => {
  return (
    <>
      <p id="s-specialty"> Our Team </p>
      <h1 className="py-6 text-xl font-bold text-yellow-700 underline m-28">
        Hello world!
      </h1>
      <Top>Bhanu Sunka</Top>
      <Button> Press Me! </Button>
      <div className="container text-red-600 bg-slate-500 ">Hello Bunny</div>
    </>
  );
};

export default App;
