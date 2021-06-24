const SettingsInput = ({ addInputData, columns, rows, cells }) => {
  return (
    <>
      <div>
        <label htmlFor="/">enter the number of columns </label>
        <input
          type="number"
          className="/"
          name="columns"
          min="0"
          value={columns}
          onChange={addInputData}
        />
      </div>

      <div>
        <label htmlFor="/">enter the number of rows </label>
        <input
          type="number"
          className="/"
          name="rows"
          min="0"
          value={rows}
          onChange={addInputData}
        />
      </div>

      <div>
        <label htmlFor="/">enter the number of cells </label>
        <input
          type="number"
          className="/"
          name="cells"
          min="0"
          value={cells}
          onChange={addInputData}
        />
      </div>

      <button className="/" type="submit">
        create matrix
      </button>
    </>
  );
};

export default SettingsInput;
