import './checkbox.css';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  label?: string;
  id?: string;
}

export const Checkbox = ({
  checked = false,
  onChange,
  size = 'medium',
  disabled = false,
  label,
  id,
  ...props
}: CheckboxProps) => {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="demo-checkbox-wrapper">
      <input
        type="checkbox"
        id={checkboxId}
        className={['demo-checkbox', `demo-checkbox--${size}`].join(' ')}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className="demo-checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
