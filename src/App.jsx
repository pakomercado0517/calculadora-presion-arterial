import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";

function App() {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pam, setPam] = useState(null);

  const calculatePAM = () => {
    const systolicValue = parseFloat(systolic);
    const diastolicValue = parseFloat(diastolic);
    if (!isNaN(systolicValue) && !isNaN(diastolicValue)) {
      const pamValue = diastolicValue + (systolicValue - diastolicValue) / 3;
      setPam(pamValue.toFixed(2));
    } else {
      setPam("Valores inválidos");
    }
  };

  return (
    <div className="max-w-screen mt-12">
      <h2 className="text-center text-2xl font-semibold">
        Calculadora de Presión Arterial Media (PAM)
      </h2>
      <div className="flex flex-col items-center justify-center gap-6">
        <Label className="text-white text-center">Presión Sistólica:</Label>
        <TextInput
          type="number"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
          placeholder="Ej. 125"
          style={{ marginLeft: "10px", padding: "5px" }}
        />
        <Label className="text-white text-center">
          Presión Diastólica:
          <TextInput
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            placeholder="Ej. 84"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </Label>
      </div>
      <div></div>
      <div className="mt-6 flex justify-center flex-col items-center gap-8">
        <div>
          <Button onClick={calculatePAM}>Calcular PAM</Button>
        </div>
        {pam !== null && (
          <div className="mt-12">
            <span className="text-xl font-semibold">PAM: {pam} mmHg</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
