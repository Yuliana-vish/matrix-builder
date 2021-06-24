import { addRow } from '../../../core/function';

const Button = () => {
 
  return (
    <div>
      <button type="submit" onSubmit={addRow}>
        add row
      </button>
    </div>
  );
};

export default Button;
