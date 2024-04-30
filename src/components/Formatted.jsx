/**
 *
 * @param {{number:Number}}
 * @returns
 */
export default function Formatted({ number }) {
  const formatter = new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF" });

  return <> {formatter.format(number)}</>;
}
