function RngeSlider({ brutto, setter }) {
  function handelChange(e) {
    setter(Number(e.target.value));
  }
  return (
    <div>
      <label htmlFor="salaryrange" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <input
        onChange={handelChange}
        id="salaryrange"
        name="salaryrange"
        value={brutto}
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        min={0}
        max={3000000}
      />
    </div>
  );
}

export default RngeSlider;
