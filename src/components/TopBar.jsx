"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import styled from "styled-components";
import { Container } from "@/styles/commonStyles";

const Wrapper = styled.div`
  padding: 1em 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.a`
  span {
    font-size: 2em;
    font-weight: 700;
  }
`;
const SubMenuInner = styled.div`
  opacity: 0;

  transition: all 500ms ease-in-out;
  border: 0.01em solid #f1f1f1;
  border-radius: 0.5em;
  background-color: #ffffff;
  padding: 0.5em;
  cursor:;
`;
const LetterSubMenu = styled.div`
  position: absolute;
  visibility: hidden;
  top: 100%;
  right: 0;
  width: 32em;
  background-color: transparent;
  border-radius: 0.5em;
  padding-top: 0.5em;
  font-size: 0.521vw;
  z-index: 1;
  display: block;
  cursor: initial;

  &:hover ${SubMenuInner} {
    opacity: 1;
  }
`;

const Letter = styled.div`
  width: 1.8em;
  height: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 2.4em;
  background-color: #000;
  color: #fff;
  position: relative;
  cursor: pointer;
  &:hover {
    ${LetterSubMenu} {
      display: block;
      visibility: visible;
    }
    ${SubMenuInner} {
      opacity: 1;

      box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
    }
  }
`;

const MenuLetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
`;

const MenuLetter = styled.div`
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 2.4em;
  background-color: #000;
  color: #ffffff;
  position: relative;
`;

const Name = styled.h2`
  font-size: 1.8em;
  margin: 0.5em 0;
  text-align: center;
  color: #000;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0 1em;
  margin: 0;
`;
const MenuItem = styled.li`
  padding: 0.5em;
  cursor: pointer;
  text-align: left;
  font-size: 2em;
  color: #000;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.01em;
  background-color: #f1f1f1;
  margin: 0.2em 0;
`;

const Logo = styled.img`
  width: 20em;
  height: auto;
`;

const TopBar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <Container>
      <Wrapper>
        <Logo src="/images/wwwinc_logo.jpg" width={"496px"} height={"100px"} />

        {isLoading ? (
          <Letter>...</Letter>
        ) : !user ? (
          <LoginButton href="/api/auth/login">
            <span>Log in</span>
          </LoginButton>
        ) : (
          <>
            <Letter>
              {user.name[0]}
              <LetterSubMenu>
                <SubMenuInner>
                  <MenuLetterContainer>
                    <MenuLetter>{user.name[0]}</MenuLetter>
                  </MenuLetterContainer>
                  <Name>{user.name}</Name>
                  <Menu>
                    <MenuItem>Posts</MenuItem>
                    <MenuItem>Profile</MenuItem>
                    <Divider />
                    <MenuItem>
                      <a href="/api/auth/logout">Log out</a>
                    </MenuItem>
                  </Menu>
                </SubMenuInner>
              </LetterSubMenu>
            </Letter>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default TopBar;
