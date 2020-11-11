import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "이삭" },
    { nickname: "김삭" },
    { nickname: "박삭" },
  ];
  const followingList = [
    { nickname: "아삭" },
    { nickname: "바삭" },
    { nickname: "사각" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;

//먼저 큼직큼직하게 가상의 컴포넌트를 만들자
