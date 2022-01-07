import React from "react";
import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1 className="font-xl">
        Ini adalah routes users details pages ini adalah id {id}
      </h1>
    </div>
  );
};

export default UserDetail;
