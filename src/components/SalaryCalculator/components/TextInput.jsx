import { Input } from "@chakra-ui/react";

/**
 *
 * @param {{title: string, label:string,value:string setter:Function}} params
 * @returns
 */
function TextInput({ title, label, value, setter }) {
  function handelChange(e) {
    setter(e.target.value);
  }
  return (
    <div className="flex flex-col justify-start">
      <h1>{title}</h1>
      <Input onChange={handelChange} type="text" name="input" value={value ? value : ""} variant="filled" placeholder={title} />
      <label htmlFor="">Add meg a {label}!</label>
    </div>
  );
}

export default TextInput;
