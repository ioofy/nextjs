import MetaData from "@components/SEOComponents/seo";
import styled from "@emotion/styled";
import { IUserSessionProps } from "@interface/user-session";
import { getSession } from "next-auth/client";

import React from "react";

const ImageAvatar = styled.img`
 width: 50px;
 height: 50px;
`;

const Profile = ({ session }: IUserSessionProps) => {
 const { user } = session;

 return (
  <div>
   <MetaData title={`Your profile - ${user?.name}`} />
   <ImageAvatar src={user?.image} alt="avatar" />
   <p> Profile {user?.name}</p>
  </div>
 );
};

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

export default Profile;
