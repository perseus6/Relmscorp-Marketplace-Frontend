interface ButtonProps {
  outline?: boolean;
  classNames?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { outline = true, classNames, children } = props;
  return (
    <button
      className={`${classNames ?? ''} ${
        outline ? 'bg-primary text-white' : 'bg-white text-primary'
      } rounded-2xl`}
    >
      {children}
    </button>
  );
};

export default Button;
