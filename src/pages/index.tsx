import MetaData from "@components/SEOComponents/seo";
import styled from "@emotion/styled";
import { getSession, signOut } from "next-auth/client";
import React from "react";

type HomePageProps = {
  session: any;
};

const ImageAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

const ContentWrapperAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

function HomePage({ session }: HomePageProps) {
  return (
    <ContentWrapperAccount>
      <MetaData title="Welcome" />
      <ImageAvatar src={session?.user?.image} alt="avatar" />
      Hi {session?.user?.name}
      <button onClick={() => signOut()}>SignOut</button>
    </ContentWrapperAccount>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default HomePage;
