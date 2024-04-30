/**
 *
 * @param {{allowances:Array}}
 * @returns
 */
function Entitled({ allowances }) {
  return (
    <>
      {allowances[allowances.length - 1] ? (
        <div className="rounded-full bg-green-500 p-1 pl-3 pr-3 flex align-text-bottom">Jogosult</div>
      ) : (
        <div className="rounded-full bg-red-600 p-1 pl-3 pr-3 flex align-text-bottom">Jogosulatlan</div>
      )}
    </>
  );
}

export default Entitled;
