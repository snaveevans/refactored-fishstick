import './textfield.css';

interface TextfieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
}

export const Textfield = ({
  placeholder = '',
  value,
  onChange,
  size = 'medium',
  disabled = false,
  type = 'text',
  label,
  ...props
}: TextfieldProps) => {
  return (
    <div className="demo-textfield-wrapper">
      {label && <label className="demo-textfield-label">{label}</label>}
      <input
        type={type}
        className={['demo-textfield', `demo-textfield--${size}`].join(' ')}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default Textfield;
