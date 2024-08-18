import { InputHTMLAttributes, useId } from "react";

const Input = ({ name, ...inputProps }: InputPropsType) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col gap-10">
      <label className="text-primary-base text-xl font-medium" htmlFor={id}>
        {name}
      </label>
      <input
        className="w-full border-b border-black bg-transparent pb-2 text-sm md:text-base"
        id={id}
        {...inputProps}
      />
    </div>
  );
};

export default Input;

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
