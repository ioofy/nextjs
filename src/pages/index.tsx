import { signIn, useSession } from "next-auth/client";
import React from "react";

export default function Home() {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete.
  if (loading) {
    return null;
  }

  // If no session exist, display a message to the user.
  if (!loading && !session) {
    return (
      <div className="p-10 text-center text-3xl">
        <h1>You must be logged in to see this page content.</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  // If the session exists, display content to
  return (
    <div className="p-10 text-center text-3xl">
      <h1>Welcome {session?.user?.name}</h1>
    </div>
  );
}
