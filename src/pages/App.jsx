import React, { useContext, useState, useEffect } from "react";
import HeroSection from "@/HeroSection";
import Features from "@/Features";
import CallAction from "@/CallAction";
import Testimonials from "@/Testimonials";
import { usersContext } from "../container/UsersContext";
import UserTable from "../components/UserTable";
import user from "../services/user.service";

export default function App() {
  const { users, setUsers } = useContext(usersContext);

  const getUsers = async () => {
    try {
      let payload = {
        page: 1,
      };
      let res = await user.getAllUsers(payload);
      res = res.data;
      setUsers(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* <HeroSection countClick={onHandleClick} /> */}
      <UserTable users={users} />
      <Features />
      {/* <CallAction />
      <Testimonials /> */}
    </>
  );
}
