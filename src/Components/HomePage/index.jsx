import React, { useEffect, useState } from 'react';
import LeftIntroSection from './LeftIntroSection';
import MiddleInfoSection from './MiddleInfoSection';
import RightSocialPills from './RightSocialPills';
import { HomeWrapper, PageWrapper } from './Styles';

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    if (document.body.clientWidth > 1300) {
      setIsDesktop(true);
    }
  },[]);
//   window.addEventListener("resize", function(event) {
//     console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
//     if(this.document.body.clientWidth > 1300){
//       setIsDesktop(true);
//     }
// })

  return (
    <>
      <PageWrapper>
        <HomeWrapper>
          <LeftIntroSection />
          <MiddleInfoSection />
          {isDesktop && <RightSocialPills />}
        </HomeWrapper>
      </PageWrapper>
    </>
  );
};

export default HomePage;
