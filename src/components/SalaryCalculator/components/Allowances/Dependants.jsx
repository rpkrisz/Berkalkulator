import CounterInput from "./CounterInput";

export default function Dependants({ peoples, setPeoples }) {
  return (
    <div className="flex align-middle justify-normal">
      <CounterInput peoples={peoples} setPeoples={setPeoples} type="dependant"></CounterInput>
      <p>Eltartott, ebből kedvezményezett:</p>
      <CounterInput peoples={peoples} setPeoples={setPeoples} type="beneficiary"></CounterInput>
    </div>
  );
}
