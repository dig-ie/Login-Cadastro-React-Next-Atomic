"use client";

import { useEffect, useState } from "react";
import { CardSurface } from "../../atoms/CardSurface";
import { Loader2 } from "lucide-react";

type ApiWarmupModalProps = {
  pingUrl?: string; // default /ping
};

export function ApiWarmupModal({
  pingUrl = "https://bolsa-node-js-nestjs-back-end.onrender.com/ping",
}: ApiWarmupModalProps) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function pingApi() {
      try {
        await fetch(pingUrl, { method: "GET" });
      } catch (err) {
      } finally {
        if (isMounted) {
          setLoading(false);
          setTimeout(() => setVisible(false), 800);
        }
      }
    }

    pingApi();

    return () => {
      isMounted = false;
    };
  }, [pingUrl]);

  // Se já fechou, não renderiza nada
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <CardSurface className="w-[90%] max-w-md p-6 flex flex-col gap-6 animate-fadeIn">
        <div className="flex flex-col items-center text-center gap-4">
          {loading ? (
            <>
              <Loader2 className="animate-spin w-10 h-10 text-primaryGreen" />
              <p className="text-sm text-foreground font-medium leading-relaxed">
                Inicializando a API/Back-end que fiz para este módulo de
                autenticação, pois ela está rodando em uma instância gratuita do
                Render.com usando Docker.
                <br />
                <br />
                Como é gratuita, o Render.com possui um{" "}
                <strong>
                  Cold start / Início lento de{" "}
                  <span className="text-alertColor">50 segundos</span>
                </strong>{" "}
                na <strong> primeira vez </strong> após muito tempo sem uso.
                <br />
                <br />
                <span className="text-green-700">
                  Por favor, aguarde enquanto o Render.com acorda a API…
                </span>
              </p>
            </>
          ) : (
            <p className="text-sm text-foreground font-semibold">
              API inicializada! Prosseguindo…
            </p>
          )}
        </div>
      </CardSurface>
    </div>
  );
}
