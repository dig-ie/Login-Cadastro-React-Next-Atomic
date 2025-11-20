"use client";
import { ApiWarmupModal } from "@/components/organisms/ApiWarmupModal";
import { LoginCard } from "../../components/organisms/LoginCard";
import { AuthPageTemplate } from "../../components/templates/AuthPageTemplate";

export default function Login() {
  return (
    <AuthPageTemplate title="Login">
      <ApiWarmupModal />
      <LoginCard className="h-full w-full" />
    </AuthPageTemplate>
  );
}
