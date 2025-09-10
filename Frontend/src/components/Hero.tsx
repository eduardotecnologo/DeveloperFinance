export default function Hero() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Organize suas <span className="text-[#00b990]">finanças</span> com praticidade.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Controle entradas, saídas e descubra insights sobre seu dinheiro –
            tudo em um só lugar.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#00b990] hover:bg-[#009e7d] text-white px-6 py-3 rounded-full font-medium shadow-md">
              Nova Transação
            </button>
            <button className="border border-[#00b990] text-[#00b990] hover:bg-[#00b990] hover:text-white px-6 py-3 rounded-full font-medium transition">
              Ver Relatórios
            </button>
          </div>
        </div>

        {/* Imagem ilustrativa */}
        <div className="hidden md:block">
          <img
            src="https://placehold.co/500x350?text=Finance+Graphic"
            alt="Dashboard financeiro"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}