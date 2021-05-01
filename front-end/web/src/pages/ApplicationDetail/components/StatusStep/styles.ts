import { css } from 'emotion';

export const hideMobile = css`
  @media (max-width: 767px) {
    display: none !important;
  }
`;
export const showMobile = css`
  @media (max-width: 767px) {
    display: block !important;
  }
`;