import MetaData from "@components/SEOComponents/seo";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { getSession, signOut } from "next-auth/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "@interface/reducer";
import { ConnectedTaskList } from "@components/HighOrderComponents/TasksList";
import { useRouter } from "next/router";
import { IUserSessionProps } from "@interface/user-session";
import { imgRandom } from "@utils/random-bg";

const ContentWrapperAccount = styled.div`
 display: flex;
 flex-direction: column;
 width: 150px;
`;

const UserLink = styled.p`
 cursor: pointer;
`;

const ButtonSignOut = styled.button`
 outline: none;
 padding: 8px;
 font-size: 15px;
 margin: 20px 0;
 width: 10rem;
`;

const Image = styled.img`
 width: 100%;
 height: 100%;
`;

const ImgUrl = [
 "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg",
 "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
 "https://w1.pngwing.com/pngs/332/259/png-transparent-apple-logo-mercari-yahoo-auctions-online-auction-apple-push-notification-service-red-text-area.png",
];

function HomePage({ session }: IUserSessionProps) {
 const { user } = session;
 const router = useRouter();
 const store = createStore(reducer);
 const [randomImg, setRandomImg] = useState("");

 useEffect(() => {
  if (session) {
   setRandomImg(imgRandom(ImgUrl));
  }
 }, [session]);

 return (
  <Provider store={store}>
   <ContentWrapperAccount>
    <MetaData title="Welcome" />
    Hi
    <UserLink onClick={() => router.push(`/profile/${user?.name}`)}>
     {user?.name}
    </UserLink>
    <Image src={randomImg} alt="imgrandom" />
    <ButtonSignOut onClick={() => signOut()}>SignOut</ButtonSignOut>
   </ContentWrapperAccount>
   {/* task list from reducer */}
   <ConnectedTaskList />
  </Provider>
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
