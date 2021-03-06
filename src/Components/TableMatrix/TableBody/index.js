import { useState } from 'react';
import { connect } from 'react-redux';
import ColumnAvg from './ColumnAvg';
import RowSumCell from './RowSumCell';
import Percentage from './Percentage';
import TableItem from './TableItem';
import RemoveButton from './RemoveButton';

const TableBody = ({ columns, rows, cells, matrixRows }) => {
  const [showPercent, setShowPercent] = useState(-1);

  return (
    <tbody>
      {!!matrixRows &&
        matrixRows.map((row, i) => (
          <tr key={JSON.stringify(row)}>
            <td className="banner">{i + 1}</td>
            {row.map(item => (
              <td className="table-item" key={item.Amount}>
                {showPercent === i ? (
                  <Percentage item={item} row={row} />
                ) : (
                  <TableItem item={item} cells={cells} />
                )}
              </td>
            ))}
            <RowSumCell
              row={row}
              handleMouseEnter={() => setShowPercent(i)}
              handleMouseLeave={() => setShowPercent(-1)}
            />
            <RemoveButton index={i} matrixRows={matrixRows} rows={rows} />
          </tr>
        ))}
      <ColumnAvg matrixRows={matrixRows} columns={columns} rows={rows} />
    </tbody>
  );
};

const mapStateToProps = state => ({
  columns: state.matrix.settings.columns,
  rows: state.matrix.settings.rows,
  cells: state.matrix.settings.cells,
  arr: state.matrix.arr,
  matrixRows: state.matrix.matrixRows,
  sortedMatrix: state.matrix.sortedMatrix,
});

export default connect(mapStateToProps)(TableBody);
