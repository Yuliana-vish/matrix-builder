import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Button from './Button';

const TableMatrix = ({ settings }) => {
  console.log('settings', settings);
  return (
    <>
      <hr />
      <div className="/">
        <table className="/">
          {settings.columns && settings.rows && settings.cells && (
            <>
              <TableHeader {...settings} />
              <TableBody />
            </>
          )}
        </table>
        <Button />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(TableMatrix);
//export default Table;
