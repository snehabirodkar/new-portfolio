import styled from 'styled-components';
import { COLOR } from '../../../util/theme';

export const LeftSectionWrapper = styled.div`
  width: 350px; 
  .heading-text{
    padding-top: 100px;
    font-size: 32px;
    font-weight: bold;
  }
  .sub-heading{
    color: ${COLOR.SECONDARY_COLOR_ORANGE};
    padding: 6px 0;
  }
  .para-text{
    font-size: 14px;
    padding: 20px 0;
    line-height: 24px;
    /* text-align: justify; */
  }
  @media only screen and (max-width: 1200px) {
			width: 100%;
		}
`;
