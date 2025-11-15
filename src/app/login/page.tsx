"use client";
import { LoginCard } from "../../components/organisms/LoginCard";
import { AuthPageTemplate } from "../../components/templates/AuthPageTemplate";

export default function Login() {
  return (
    <AuthPageTemplate title="Login">
      <LoginCard className="h-full w-full" />
    </AuthPageTemplate>
  );
}
