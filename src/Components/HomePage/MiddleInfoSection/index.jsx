import React from 'react';
import BigBox from './Common/BigBox';
import SmallBox from './Common/SmallBox';
import { MiddleSectionWrapper } from './Style';

const MiddleInfoSection = () => {
  return (
    <MiddleSectionWrapper>
      <BigBox />
      <SmallBox />
      <SmallBox />
      <SmallBox />
      <BigBox />
      <BigBox />

    </MiddleSectionWrapper>
  );
};

export default MiddleInfoSection;
