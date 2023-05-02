import React from 'react'
import styled from 'styled-components';

const BigBoxWrapper = styled.div`
    /* max-width: 800px; */
    margin: 0 auto;
    height: 200px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    /* background: radial-gradient(50% 50% at 50% 50%, rgb(29, 32, 58) 0%, rgb(19, 19, 32) 100%); */
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 10px;
    &:hover{
      background: radial-gradient(50% 50% at 50% 50%, rgb(29, 32, 58) 0%, rgb(19, 19, 32) 100%);
      /* background: #3636368d; */
    }
`;

const BigBox = () => {
  return (
   <BigBoxWrapper> 
   <p>Learn more about me</p>
   <div className="">Resume</div>
   </BigBoxWrapper> 
  )
}

export default BigBox;