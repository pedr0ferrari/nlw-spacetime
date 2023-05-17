export const EmptyMemories = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <p className="leading-relaxed text-center w-[360px]">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <a className="underline hover:text-gray-50" href="">
          criar agora
        </a>
        !
      </p>
    </div>
  );
};
