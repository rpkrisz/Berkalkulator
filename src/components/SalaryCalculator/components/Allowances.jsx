import AllowanceToggel from "./AllowanceToggel.jsx";
function Allowances({ allowances, setter }) {
  return (
    <div className="flex flex-col justify-start">
      <h1>KEDVEZMÉNYEK</h1>
      <AllowanceToggel allowances={allowances} setter={setter} index={0} label="25 év"></AllowanceToggel>
      <AllowanceToggel allowances={allowances} setter={setter} index={1} label="Friss"></AllowanceToggel>
      <AllowanceToggel allowances={allowances} setter={setter} index={2} label="Személyi"></AllowanceToggel>
      <AllowanceToggel allowances={allowances} setter={setter} index={3} label="Családi"></AllowanceToggel>
    </div>
  );
}

export default Allowances;
