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
    <div className="bg-yellow-300">
      <h1>Háztartás összesített jövedelme</h1>
      <table>
        <thead>
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
