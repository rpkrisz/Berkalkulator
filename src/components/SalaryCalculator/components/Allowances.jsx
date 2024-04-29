import AllowanceToggel from "./AllowanceToggel.jsx";
function Allowances() {
  return (
    <div className="flex flex-col justify-start">
      <h1>KEDVEZMÉNYEK</h1>
      <AllowanceToggel label="25 év"></AllowanceToggel>
      <AllowanceToggel label="Friss"></AllowanceToggel>
      <AllowanceToggel label="Személyi"></AllowanceToggel>
      <AllowanceToggel label="Családi"></AllowanceToggel>
    </div>
  );
}

export default Allowances;
