function RngeSlider({ title, label }) {
  function handelChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Default range
      </label>
      <input onChange={handelChange} id="default-range" name="default-range" type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    </div>
  );
}

export default RngeSlider;
