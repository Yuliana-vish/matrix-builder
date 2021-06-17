import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Button from './Button';

const Table = ({ matrix }) => {
  return (
    <>
      <hr />
      <div className="/">
        <table className="/">
          <TableHeader columns={matrix.columns} />
          <TableBody {...matrix} />
        </table>
        <Button />
      </div>
    </>
  );
};

export default Table;
