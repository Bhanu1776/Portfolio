import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');             // For navbar
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap');  // For Headings

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {

  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}
a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}


`