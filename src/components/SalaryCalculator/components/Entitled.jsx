/**
 * 
 * @param {{allowances:Array}} 
 * @returns 
 */
function Entitled({ allowances }) {
  return <>{allowances[allowances.length - 1] ? <div className="rounded-full bg-green-500 p-1">Jogosult</div> : <div className="rounded-full bg-red-600 p-1">Jogosulatlan</div>}</>;
}

export default Entitled;
