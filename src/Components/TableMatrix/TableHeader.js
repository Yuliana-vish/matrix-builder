const topCells = (value) => {
    return <th key={value}>{value}</th>
};

const TopUnit = columns => {
    let banner = [topCells('№')];
    for (let i = 0; i < columns; i++) {
      banner.push(topCells(i + 1));     
    }
    banner.push(topCells('Sum'));
    return banner;
  };

  const TableHeader = ({columns}) => { 
    const banner = TopUnit(columns);
    return (
      <thead>
        <tr>{banner}</tr>
      </thead>
    );
  };


export default TableHeader;