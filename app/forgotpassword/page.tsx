import { LabeledInput } from "../components/labeledInput";

export default function ForgotPassword() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black-100">
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{
          backgroundImage: "url('/background_login.webp')",
          opacity: 0.6,
        }}
        role="presentation"
        aria-hidden="true"
      />
      <div className="relative z-10 bg-white w-full max-w-sm p-8 shadow-lg rounded-xl flex flex-col items-center">
        <h1 className="text-black text-3xl font-bebas">Esqueci minha senha</h1>

        <form className="mt-8 flex justify-center flex-col items-center">
          <div className="w-full space-y-4">
            <LabeledInput
              id="email"
              label="Email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-10 font-bebas text-xl text-gray-800 rounded-xl shadow-lg bg-accent-orange w-full py-3 hover:bg-black hover:text-accent-orange hover:scale-105 transform transition-all duration-300"
          >
            Recuperar Senha
          </button>
        </form>
      </div>
    </div>
  );
}
