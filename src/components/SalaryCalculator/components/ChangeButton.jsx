function ChangeButton({ value }) {
  function handelClick() {
    console.log(value);
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
