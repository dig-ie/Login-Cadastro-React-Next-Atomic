"use client";
import { ApiWarmupModal } from "@/components/organisms/ApiWarmupModal";
import { LoginCard } from "../../components/organisms/LoginCard";
import { AuthPageTemplate } from "../../components/templates/AuthPageTemplate";
import { CardSurface } from "@/components/atoms/CardSurface";

export default function Login() {
  return (
    <AuthPageTemplate title="Login">
      <ApiWarmupModal />
      <CardSurface
        className="text-left max-w-[325px] max-h-[400px] overflow-y-auto scrollbar-none"
        p={8}
      >
        <h1 className="text-lg text-foreground font-medium leading-relaxed my-2 pl-[-16px]">
          Criei este módulo de autenticação Full Stack (React/Next e NestJS) com
          os seguintes tratamentos e retornos:
        </h1>
        <ul className="text-left list-disc">
          <li>
            <span className="text-green-700  font-extrabold">
              Para um Login Válido:
            </span>
            <br />
            <strong>email:</strong> admin@bolsa.com
            <br />
            <strong>senha:</strong> admin123
          </li>
          <li>
            Tratamento e retorno para credenciais inválidas{" "}
            <span className="text-yellow-700 text-[2.2vh]">
              (Experimente utilizar email e senha aleatórios)
            </span>
          </li>
          <li>
            Verificação de formato de e-mail válido (tanto no front-end, quanto
            detalhadamente no back-end (API), mais detalhadamente com
            bibliotecas/decorators utilizados no NestJS){" "}
            <span className="text-yellow-700 text-[2.2vh]">
              (Inserir um e-mail com formato inválido será reconhecido ou pelo
              componente de form front-end ou pelo back-end)
            </span>
          </li>
        </ul>
      </CardSurface>
      <LoginCard className="h-full w-full max-w-[500px] max-h-[400px]" />
      <br />
      <br />
    </AuthPageTemplate>
  );
}
