import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
      --border: 1px solid gray;
      --shadow: 4px 4px 8px gray;
  }

  .title {
      text-align: center;
  }
    
  
  .btn {
    width: max-content;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: lightblue;
    }
  }
`;

export const Container = styled.div`
margin-inline: auto;
padding-inline: 15px;
  display: flex;
  max-width: 1200px;

  .form-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    /* height: 100vh; */
    padding: 20px;
    gap: 20px;
    border: var(--border);

    label {
      display: grid;
      gap: 8px;

      span {
        font-size: 20px;
      }
    }
  }

  .contacts-container {
    min-width: 190px;
    padding: 20px;
  }
`;
