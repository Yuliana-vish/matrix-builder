//import { connect } from 'react-redux';

const topCells = value => {
  return (
    <th className="header-item" key={value}>
      {value}
    </th>
  );
};

const TopUnit = columns => {
  let banner = [topCells('№')];
  for (let i = 0; i < columns; i++) {
    banner.push(topCells(i + 1));
  }
  banner.push(topCells('Sum'));
  return banner;
};

const TableHeader = ({ columns }) => {
  const banner = TopUnit(columns);
  return (
    <thead className="table-header">
      <tr>{banner}</tr>
    </thead>
  );
};

export default TableHeader;
