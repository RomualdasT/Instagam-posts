import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: red;
`;

interface HeaderProps {
  children: string;
}

const Header: FC<HeaderProps> = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);

export default Header;
