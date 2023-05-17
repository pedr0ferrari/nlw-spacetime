import { User } from "lucide-react";

export const SignIn = () => {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full ">
        <User className="w-5 h-5 text-gray-500" />
      </div>

      <p className="leading-snug text-sm max-w-[140px]">
        <span className="underline">Crie sua conta</span> e salve suas memórias!
      </p>
    </a>
  );
};
