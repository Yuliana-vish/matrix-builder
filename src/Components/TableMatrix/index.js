import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Button from './Button';

const TableMatrix = ({ settings }) => {
  //console.log('settings', settings);
  return (
    <div className="table">
      {settings.columns && settings.rows && settings.cells && <Button />}
      <table className="table-matrix">
        {settings.columns && settings.rows && settings.cells && (
          <>
            <TableHeader {...settings} />
            <TableBody />
          </>
        )}
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(TableMatrix);
