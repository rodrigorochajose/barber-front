import Image from "next/image";

export function Header() {
  return (
    <header className="w-full p-4 bg-background-light text-black flex justify-space-between items-center shadow-lg">
      <div className="bg-accent-orange w-14 h-14 rounded-full shadow-lg flex items-center justify-center">
        <Image
          src="/scissors.svg"
          alt="Ícone de uma tesoura, logo do Sistema Barbearia"
          width={35}
          height={35}
          priority
        />
      </div>
    </header>
  );
}
