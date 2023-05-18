import { cookies } from "next/headers";

import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";
import { Profile } from "@/components/Profile";

export default function Home() {
  const isAuthenticated = cookies().has("token");

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col items-start justify-between py-16 overflow-hidden border-r px-28 border-white/10 ">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

        {/* Stripes */}
        <div className="absolute top-0 bottom-0 w-2 right-2 bg-stripes " />

        {isAuthenticated ? <Profile /> : <SignIn />}

        <Hero />

        <Copyright />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  );
}
