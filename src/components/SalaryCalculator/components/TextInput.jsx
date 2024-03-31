/**
 *
 * @param { title: string, label:string} params
 * @returns
 */
function TextInput({ title, label }) {
  return (
    <div>
      <h1>{title}</h1>
      <input type="text" name="input" />
      <label htmlFor="">Add meg a {label}</label>
    </div>
  );
}

export default TextInput;
