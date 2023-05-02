import React from 'react';
import { PillsWrapper, RightSectionWrapper } from './Style';

const RightSocialPills = () => {
  const socialIcons = [
    {
      id: 1,
      icon: 'Twitter Icon',
      name: 'Twitter',
    },
    {
      id: 2,
      icon: 'Instagram Icon',
      name: 'Instagram',
    },
    {
      id: 3,
      icon: 'Github Icon',
      name: 'Github',
    },
  ];

  return (
    <RightSectionWrapper>
      {socialIcons.map((currElem, index) => {
        return (
          <PillsWrapper key={index} >
            <p>{currElem.name}</p>
            {/* <span>{currElem.icon}</span> */}
          </PillsWrapper>

        );
      })}
      {/* <PillsWrapper />
      <PillsWrapper />
      <PillsWrapper />
      <PillsWrapper /> */}
    </RightSectionWrapper>
  );
};

export default RightSocialPills;
