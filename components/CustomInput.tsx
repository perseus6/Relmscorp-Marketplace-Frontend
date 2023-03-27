interface InputProps {
  title: string;
  classNames?: string;
  placeholder?: string;
}

const CustomInput = (props: InputProps): JSX.Element => {
  const { title, classNames = '', placeholder = '' } = props;
  return (
    <div className={`${classNames} w-full`}>
      <div className=' pb-3 pl-3'>{title}</div>
      <input
        placeholder={placeholder}
        className={`w-full rounded-2xl p-3 text-black outline-none`}
      />
    </div>
  );
};

export default CustomInput;
