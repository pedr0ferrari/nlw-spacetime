import { User } from "lucide-react";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col items-start justify-between py-16 overflow-hidden border-r px-28 border-white/10 ">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

        {/* Stripes */}
        <div className="absolute top-0 bottom-0 w-2 right-2 bg-stripes " />

        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full ">
            <User className="w-5 h-5 text-gray-500" />
          </div>

          <p className="leading-snug text-sm max-w-[140px]">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            className="inline-block px-5 py-3 text-sm leading-none text-black uppercase bg-green-500 rounded-full font-alt hover:bg-green-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex items-center justify-center flex-1">
          <p className="leading-relaxed text-center w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a className="underline hover:text-gray-50" href="">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
