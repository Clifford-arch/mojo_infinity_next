"use client";
import React, { useEffect } from "react";
import FAQSection from "../../../components/MojoInfinity/FAQSection";
import { useAuth } from "../../../api/AuthContext";
import { useRouter } from "next/navigation";
import "@/../style/kyc.css";
import "@/../style/landing.css";

const Page = () => {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.push("/invest-strategy/invest");
    }
  }, [isLogin, router]);
  return (
    <>
      <br />
      <FAQSection />
    </>
  );
};

export default Page;
