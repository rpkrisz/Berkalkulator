import Formatted from "../Formatted";
/**
 *
 * @param {{members:Array}} param
 * @returns
 */
const HouseholdSummary = ({ members }) => {
  let sum = 0;
  members.forEach((member) => {
    sum += member.netto;
  });
  return (
    <div className="bg-blue-100 flex justify-start flex-col p-6 rounded-md">
      <h1 className="text-xl p-1 m-2 font-medium">Háztartás összesített jövedelme</h1>
      <table >
        <thead className="bg-indigo-300">
          <tr>
            <th>Családtag</th>
            <th>Nettó bér</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => {
            return (
              <tr key={index}>
                <td>{member.name}</td>
                <td>
                  <Formatted number={member.netto} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Összesen</td>
            <td>
              <Formatted number={sum} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdSummary;
