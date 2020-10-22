import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap');
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   }
    body{
    -webkit-font-smoothing: antialiased;  
    }
    body, input, button{
        font: 14px 'Roboto', sans-serif;
    }
    a{
    text-decoration: none;
    }
    ul{
    list-style: none;
    }
    button{
    cursor: pointer;
    border: none;
    }
    body{
        background-color: #132743;
    }

`;
