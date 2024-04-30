import Formatted from "../Formatted";

const HouseholdSummary = ({ netto, name }) => {
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
            <Formatted number={netto} />
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdSummary;
