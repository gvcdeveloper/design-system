import clsx from 'clsx';

interface SwitchProps {
  handleToggle: () => void;
  isOn: boolean;
  name: string;
}

const Switch = ({ handleToggle, isOn, name }: SwitchProps) => {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          name={name}
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className="sr-only"
          role="switch"
          aria-checked={isOn}
        />
        <div
          className={clsx(
            'w-11 h-6 rounded-full transition-colors duration-300 ease-in-out',
            isOn ? 'bg-secondary' : 'bg-gray-300'
          )}
        >
          <div
            className={clsx(
              'dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transition-transform duration-300 ease-in-out',
              isOn ? 'transform translate-x-5' : ''
            )}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
