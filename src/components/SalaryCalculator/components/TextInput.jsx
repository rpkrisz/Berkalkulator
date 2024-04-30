import { Input } from "@chakra-ui/react";

/**
 *
 * @param {{title: string, label:string,value:string setter:Function}} params
 * @returns
 */
function TextInput({ title, label, value, member, setter, name }) {
  function handelChange(e) {
    const val = e.target.value;
    if (e.target.value === "") {
      setter({ ...member, [name]: e.target.value });
      return;
    }
    isNaN(val) ? setter({ ...member, [name]: e.target.value }) : setter({ ...member, [name]: Number(e.target.value) });
  }
  return (
    <div className="flex flex-col justify-start">
      <h1>{title}</h1>
      <Input onChange={handelChange} type="text" name={name} value={value ? value : ""} variant="filled" placeholder={title} />
      <label className="font-extralight text-sm" htmlFor="">Add meg a {label}!</label>
    </div>
  );
}

export default TextInput;
