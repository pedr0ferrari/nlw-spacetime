import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="w-4 h-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="midia"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="w-4 h-4" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm  text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="w-4 h-4 text-purple-500 bg-gray-700 border-gray-400 rounded"
            />
            Tornar memória pública
          </label>
        </div>
        <input type="file" id="midia" className="invisible w-0 h-0" />

        <textarea
          name="content"
          spellCheck={false}
          className="flex-1 w-full p-0 text-lg leading-relaxed text-gray-100 bg-transparent border-0 rounded resize-none -0 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </div>
  );
}
