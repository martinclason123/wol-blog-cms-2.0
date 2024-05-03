// src/components/CMSLayout.tsx
"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { PreviewPane, EditorPane, SelectorPane } from "./panes";
import { Container } from "@/styles/commonStyles";
import HeaderComponent from "./HeaderComponent";
import TopBar from "./TopBar";
import { useUser } from "@auth0/nextjs-auth0/client";

export const CMSLayoutContainer = styled.div`
  display: flex;
`;

const StateContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateMessage = styled.h2`
  font-size: 5em;
  text-align: center;
`;

const CMSLayout = () => {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      // If there's no user and not loading, redirect to login
      location.href = "/api/auth/login";
    }
  }, [user, isLoading]); // Ensure this effect depends on `user` and `isLoading`

  if (isLoading) {
    return (
      <StateContainer>
        <StateMessage>Loading...</StateMessage>{" "}
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <StateMessage>Something went wrong. Please try again.</StateMessage>
      </StateContainer>
    );
  }

  return (
    <div>
      {user ? (
        <>
          <TopBar />
          <HeaderComponent />
          <CMSLayoutContainer>
            <SelectorPane />
            <PreviewPane />
            <EditorPane />
          </CMSLayoutContainer>
        </>
      ) : null}
    </div>
  );
};

export default CMSLayout;
