interface ButtonProps {
  outline?: boolean;
  classNames?: string;
  children: React.ReactNode;
}

const CustomButton = (props: ButtonProps): JSX.Element => {
  const { outline = true, classNames, children } = props;
  return (
    <button
      className={`${classNames ?? ''} ${
        outline ? 'bg-primary text-white' : 'bg-white text-primary'
      } rounded-2xl hover:opacity-90 active:brightness-125`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
