function ChangeButton({ brutto, setter, value }) {
  function handelClick() {
    setter(Number(brutto) + (Number(brutto) * Number(value)) / 100);
  }
  return (
    <>
      <button onClick={handelClick} className="border rounded-lg bg-purple-400">
        {value}%
      </button>
    </>
  );
}

export default ChangeButton;
