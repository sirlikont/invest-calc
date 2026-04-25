import { useState } from "react";

export default function App() {
  const [initial, setInitial] = useState(0);
  const [contributions, setContributions] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const profit = finalValue - initial - contributions;
  const returnRate =
    initial + contributions > 0
      ? (profit / (initial + contributions)) * 100
      : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Tootluskalkulaator</h1>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Algväärtus"
          type="number"
          onChange={(e) => setInitial(Number(e.target.value))}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Sissemaksed"
          type="number"
          onChange={(e) => setContributions(Number(e.target.value))}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Lõppväärtus"
          type="number"
          onChange={(e) => setFinalValue(Number(e.target.value))}
        />

        <div className="p-4 bg-gray-50 rounded">
          <p>Kasum: <b>{profit.toFixed(2)} €</b></p>
          <p>Tootlus: <b>{returnRate.toFixed(2)} %</b></p>
        </div>
      </div>
    </div>
  );
}