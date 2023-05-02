import styled from 'styled-components';
import { COLOR } from '../../util/theme';

export const PageWrapper = styled.div`
  background-color: ${COLOR.MAIN_BG};
  color: ${COLOR.MAIN_FONT_COLOR};
  padding: 0 100px;
  @media only screen and (max-width: 992px) {
		padding: 0 50px;
		}
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  & > div {
    /* border: solid 1px red; */
    border-radius: 5px;
    /* padding: 8px; */
  }

  @media only screen and (max-width: 1200px) {
			display:block;
		}
`;
