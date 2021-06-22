// import styles from './name.module.scss';
import { addRow } from '../../core/function';

const Button = () => {
  // const [addRow] = useState(addRow(row));
  return (
    <div>
      <button type="submit" onSubmit={addRow}>
        add row
      </button>
    </div>
  );
};

export default Button;
