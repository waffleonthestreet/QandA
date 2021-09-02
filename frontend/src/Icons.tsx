/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import user from './user.png';
export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    width="20px"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
