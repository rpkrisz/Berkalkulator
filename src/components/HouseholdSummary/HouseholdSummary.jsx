const HouseholdSummary = ({ netto, name }) => {
  return (
    <div className="bg-yellow-300">
      <h1>HouseholdSummary</h1>
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
            <td>{netto} Ft</td>
          </tr>
          <tr>
            <td>Összesen</td>
            <td>{netto} Ft</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdSummary;
