import React from 'react';
import styled from 'styled-components';

const SmallBoxWrapper = styled.div`
    /* max-width: 800px; */

    height: 200px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
   
  `;

  const InnerBox = styled.div`
    width: 400px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    @media only screen and (max-width: 1200px) {
			width: 100%;
		}
  `;

const SmallBox = () => {
  return (
    <SmallBoxWrapper>
      <InnerBox>
        <p>Projects</p>
      </InnerBox>
      <InnerBox>
        <p>Design case studies</p>
      </InnerBox>
    </SmallBoxWrapper>
  );
};

export default SmallBox;
