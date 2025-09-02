import Link from "next/link";
import { LabeledInput } from "../components/labeledInput";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black-100">
      <div className="relative z-10 bg-white w-full max-w-sm p-8 shadow-lg rounded-xl flex flex-col items-center">
        <div className="bg-accent-orange w-24 h-24 rounded-full shadow-lg flex items-center justify-center -mt-20 mb-4">
          <Image
            src="/scissors.svg"
            alt="Ícone de uma tesoura, logo do Sistema Barbearia"
            width={80}
            height={80}
            priority
          />
        </div>

        <h1 className="font-bebas text-2xl text-gray-800">Sistema Barbearia</h1>

        <form className="mt-6 flex justify-center flex-col items-center">
          <div className="w-full space-y-4">
            <LabeledInput
              id="email"
              label="Email"
              type="email"
              placeholder="seu@email.com"
              required
            />

            <LabeledInput
              id="password"
              label="Senha"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 font-bebas text-xl text-gray-800 rounded-xl shadow-lg bg-accent-orange w-full py-3 hover:bg-black hover:text-accent-orange hover:scale-105 transform transition-all duration-300"
          >
            Entrar
          </button>
        </form>

        <div className="mt-5">
          <Link
            href="/forgotpassword"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Esqueci minha senha
          </Link>
        </div>
      </div>
    </div>
  );
}
