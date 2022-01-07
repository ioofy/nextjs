import React from "react";
import MetaData from "@components/SEOComponents/seo";
import styled from "@emotion/styled";

interface IUserDetailProps {
  user: IUserProps;
}

const Wrapper = styled.div`
  max-width: 100%;
`;

const CardUser = styled.div`
  background: pink;
  border-radius: 10px;
  padding: 20px;
  width: 400px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const DataUser = styled.h3`
  font-weight: 600;
`;

const UserDetail = (props: IUserDetailProps) => {
  const { user } = props;

  return (
    <Wrapper>
      <MetaData title={`Users Detail Page - ${user?.name}`} />
      <CardUser>
        <DataUser>User {user?.name} have data: </DataUser>
        <DataUser>{user?.email}</DataUser>
        <DataUser>{user?.website}</DataUser>
      </CardUser>
    </Wrapper>
  );
};

interface IUserProps {
  name: string;
  id: number;
  email: string;
  phone: string;
  website: string;
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();

  const paths = dataUsers.map((user: IUserProps) => ({
    params: {
      id: `${user?.id}`,
    },
  }));

  return {
    paths,
    // fallback perlu untuk getStaticPaths
    fallback: false,
  };
};

interface IGetStaticProps {
  params: {
    id: string;
  };
}

export const getStaticProps = async (context: IGetStaticProps) => {
  const { id } = context.params;
  // akan menampilkan data berdasarkan id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
};

export default UserDetail;
