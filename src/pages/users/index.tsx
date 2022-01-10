import MetaData from "@components/SEOComponents/seo";
import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IUserProps {
 dataUsers: [any];
}

type CardComponentsProps = {
 background: string;
};

const Wrapper = styled.div``;

const UserWrapper = styled.div`
 max-width: 100%;
 display: flex;

 @media screen and (max-width: 600px) {
  flex-direction: column;
 }
`;

const CardUser = styled.div<CardComponentsProps>`
 display: flex;
 flex-direction: column;
 background: ${(props) => props.background};
 padding: 10px;
 width: 450px;
 cursor: pointer;

 @media screen and (max-width: 600px) {
  width: 100%;
 }
`;

const DataUser = styled.h3`
 font-weight: 500;
 margin-bottom: 5px;
`;

const Heading = styled.h1`
 margin-bottom: 10px;
`;

const User = (props: IUserProps) => {
 const { dataUsers } = props;
 const router = useRouter();

 return (
  <Wrapper>
   <MetaData title="Users Page" />
   <Heading className="font-xl">Ini adalah single routes user</Heading>
   {dataUsers.map((user) => {
    return (
     <UserWrapper key={user?.id}>
      <CardUser
       background="pink"
       onClick={() => router.push(`/users/${user?.id}`)}
      >
       <DataUser>{user?.name}</DataUser>
       <DataUser>{user?.phone}</DataUser>
      </CardUser>
      <CardUser background="skyblue">
       <DataUser>{user?.email}</DataUser>
       <DataUser>{user?.website}</DataUser>
      </CardUser>
     </UserWrapper>
    );
   })}
  </Wrapper>
 );
};

// bisa digunakan untuk get API terjadi di sisi server tidak cocok untuk data api yang dinamis
export const getStaticProps = async () => {
 const response = await fetch("https://jsonplaceholder.typicode.com/users");
 const dataUsers = await response.json();

 return {
  props: {
   dataUsers: dataUsers,
  },
 };
};

export default User;
