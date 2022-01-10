import MetaData from "@components/SEOComponents/seo";
import styled from "@emotion/styled";
import React from "react";
import { getSession, signOut } from "next-auth/client";

interface HomePageProps {
 session: {
  user: {
   image: string;
   name: string;
  };
 };
}

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
 const { user } = session;

 return (
  <ContentWrapperAccount>
   <MetaData title="Welcome" />
   <ImageAvatar src={user?.image} alt="avatar" />
   Hi {user?.name}
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
