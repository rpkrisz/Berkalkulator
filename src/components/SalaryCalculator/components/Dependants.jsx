import CounterInput from "./CounterInput";

export default function Dependants() {
  return (
    <div className="flex align-middle">
      <CounterInput></CounterInput>
      <p>Eltartott, ebből kedvezményezett:</p>
      <CounterInput></CounterInput>
    </div>
  );
}
