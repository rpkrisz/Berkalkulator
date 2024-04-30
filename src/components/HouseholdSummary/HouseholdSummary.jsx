import Formatted from "../Formatted";

const HouseholdSummary = ({ member }) => {
  const { name, brutto, netto } = member;

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
          <tr>
            <td>{name}</td>
            <td>
              <Formatted number={netto} />
            </td>
          </tr>
          <tr>
            <td>Összesen</td>
            <td>
              <Formatted number={netto} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdSummary;
