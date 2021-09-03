import React from 'react';
import { Fragment } from 'react';
import { UserIcon } from './Icons';

export const Header = () => (
  <>
    <a href="/">Q & A</a>
    <input type="text" placeholder="Search..." />

    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </>
);
