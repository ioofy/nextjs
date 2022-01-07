import MetaData from "@components/SEOComponents/seo";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 100%;
`;
const BlogWrapper = styled.div`
  width: 100%;
`;

const BlogCard = styled.div`
  padding: 16px;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 34%);
  border-radius: 10px;
  margin: 18px;
  background: pink;
  cursor: pointer;
`;

const BlogHeading = styled.h2`
  margin: 0px 0px 5px;
`;

const BlogBody = styled.h4`
  font-weight: 500;
`;

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface IBlogProps {
  dataBlog: IPost[];
}

const Blog = (props: IBlogProps) => {
  const { dataBlog } = props;

  return (
    <Wrapper>
      <MetaData title="Blog Page" />
      {dataBlog.map((blog) => {
        return (
          <BlogWrapper key={blog?.id}>
            <BlogCard>
              <BlogHeading>{blog?.title}</BlogHeading>
              <BlogBody>{blog?.body}</BlogBody>
            </BlogCard>
          </BlogWrapper>
        );
      })}
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await response.json();

  return {
    props: {
      dataBlog,
    },
  };
};

export default Blog;
