import React, { useEffect } from "react";
import styled from "@emotion/styled";
import ButtonLogin from "@components/ButtonLoginComponents/button-login";
import Router from "next/router";
import { colors } from "@styles/colors.styles";
import { providers, getSession, signIn } from "next-auth/client";

type LoginPageProps = {
  providers: any;
  session: any;
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 0px 20px;
`;

const Header = styled.h1`
  color: ${colors.gray};
  margin: 10px 0px 10px;
  text-align: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginPage = ({ providers, session }: LoginPageProps) => {
  useEffect(() => {
    const onSession = async () => {
      if (session) return Router.push("/");
    };

    onSession();
  }, [session]);

  return (
    <ContentWrapper>
      <Wrap>
        <Header className="font-xl">Log in</Header>
        <ButtonLogin
          providerName={providers.google.name}
          imageProvider="/google.svg"
          altText="google"
          backgroundColor="#e16259"
          onClick={() => signIn(providers.google.id)}
        />
        <ButtonLogin
          providerName={providers.facebook.name}
          imageProvider="/fb.svg"
          altText="fb"
          backgroundColor="#1871ED"
          onClick={() => signIn(providers.facebook.id)}
        />
        <ButtonLogin
          providerName={providers.github.name}
          imageProvider="/github.svg"
          altText="github"
          backgroundColor="#000"
          onClick={() => signIn(providers.github.id)}
        />
      </Wrap>
    </ContentWrapper>
  );
};

LoginPage.getInitialProps = async (context: any) => {
  return {
    providers: await providers(),
    session: await getSession(context),
  };
};

export default LoginPage;
