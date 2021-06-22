const RemoveButton = ({
  index,
  setMatrixRows,
  matrixRows,
  setCurrentRowsNum,
}) => {
  const removeRow = () => {
    console.log(matrixRows, index);
    const deleteRow = matrixRows.filter((el, i) => index !== i);
    setCurrentRowsNum(prevState => prevState - 1); //обновляю state
    console.log(deleteRow);
    setMatrixRows(deleteRow);
  };

  return (
    <td>
      <button type="submit" onClick={() => removeRow()}>
        x
      </button>
    </td>
  );
};

export default RemoveButton;
