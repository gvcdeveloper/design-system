import clsx from 'clsx';

type ButtonType = 'button' | 'submit' | 'reset';
type SizeButtonType = 'sm' | 'md' | 'lg';
type VariantButtonType = 'primary' | 'secondary' | 'outlined';
type VariantStylesType = {
  [K in VariantButtonType]: string;
};
type SizeType = {
  [K in SizeButtonType]: string;
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  name: string;
  onClick: () => void;
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  size?: SizeButtonType;
  variant?: VariantButtonType;
}

const Button = ({
  type = 'button',
  label,
  disabled = false,
  name,
  onClick,
  className = '',
  size = 'md',
  variant = 'primary',
  ...rest
}: ButtonProps): JSX.Element => {
  const variantStyles: VariantStylesType = {
    primary:
      'bg-primary text-primary-text hover:bg-primary-hover disabled:bg-primary-disabled',
    secondary:
      'bg-secondary text-secondary-text hover:bg-secondary-hover disabled:bg-secondary-disabled',
    outlined:
      'bg-outlined text-outlined-text border border-outlined-border  hover:bg-outlined-hover hover:text-outlined-text-hover disabled:hover:bg-outlined disabled:hover:text-outlined-text',
  };

  const sizeStyles: SizeType = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      name={name}
      onClick={onClick}
      className={clsx(
        'rounded p-2',
        sizeStyles[size],
        variantStyles[variant],
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
