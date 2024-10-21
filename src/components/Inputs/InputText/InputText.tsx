import clsx from 'clsx';

type InputTextProps = {
  label?: string;
  name?: string;
  disabled?: boolean;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
};

const InputText = ({
  label,
  name,
  disabled = false,
  onChange,
  onBlur,
  onFocus,
  className,
  ...rest
}: InputTextProps): JSX.Element => {
  const disabledStyles = 'bg-gray-100 border-gray-300 cursor-not-allowed';

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={label}
          className={clsx(
            'block text-sm font-md text-gray-700',
            disabled && 'text-gray-400'
          )}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={clsx(
          'mt-1 block w-full px-2 py-1 rounded border focus:outline-none focus:ring-2',
          disabled && disabledStyles,
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default InputText;
