import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">

      <Navbar />
      <Hero />


      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-50">
              Bem-vindo à sua central financeira
            </h1>
            <p className="text-slate-400 mt-2">
              Acompanhe seu saldo, entradas e saídas em um único lugar.
            </p>
          </div>
          <div className="border border-slate-800 bg-slate-950 rounded-xl p-6">
            <p className="text-slate-400 text-sm">Saldo atual</p>
            <p className="text-3xl font-bold text-green-500 mt-2">
              R$ 12.540,75
            </p>
            <div className="flex gap-3 mt-3">
              <span className="text-xs text-green-400 bg-green-950 border border-green-700 px-3 py-1 rounded-full">
                +R$ 1.250 este mês
              </span>
              <span className="text-xs text-amber-400 bg-amber-950 border border-amber-700 px-3 py-1 rounded-full">
                Meta: R$ 15.000
              </span>
            </div>
          </div>
        </section>

        {/* KPIs */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <KpiCard title="Entradas" value="R$ 8.300,00" color="text-green-400" />
          <KpiCard title="Saídas" value="R$ 4.560,25" color="text-red-400" />
          <KpiCard title="Disponível" value="R$ 3.739,75" color="text-sky-400" />
        </section>

        {/* Transações */}
        <section className="border border-slate-800 rounded-xl bg-slate-950 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
            <h2 className="font-semibold text-lg">Últimas transações</h2>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium">
              + Nova transação
            </button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="px-6 py-3 text-left">Data</th>
                <th className="px-6 py-3 text-left">Descrição</th>
                <th className="px-6 py-3 text-left">Tipo</th>
                <th className="px-6 py-3 text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              <TransactionRow date="01/09/2025" desc="Salário" type="INCOME" amount="+ R$ 8000,00" />
              <TransactionRow date="03/09/2025" desc="Aluguel" type="EXPENSE" amount="- R$ 2200,00" />
              <TransactionRow date="04/09/2025" desc="Mercado" type="EXPENSE" amount="- R$ 520,90" />
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Finance Manager — v0.1.0
        </footer>
      </main>
    </div>
  );
}

function KpiCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
      <p className="text-slate-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}

type TransactionRowProps = {
  date: string;
  desc: string;
  type: "INCOME" | "EXPENSE";
  amount: string;
};

function TransactionRow({ date, desc, type, amount }: TransactionRowProps) {
  return (
    <tr className="border-t border-slate-800">
      <td className="px-6 py-3">{date}</td>
      <td className="px-6 py-3">{desc}</td>
      <td className="px-6 py-3">
        {type === "INCOME" ? (
          <span className="text-green-400 bg-green-950 border border-green-700 px-3 py-1 rounded-full text-xs">
            Entrada
          </span>
        ) : (
          <span className="text-red-400 bg-red-950 border border-red-700 px-3 py-1 rounded-full text-xs">
            Saída
          </span>
        )}
      </td>
      <td className="px-6 py-3 text-right font-semibold">{amount}</td>
    </tr>
  );
}