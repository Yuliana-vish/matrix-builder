const SettingsInput = ({ addInputData, columns, rows, cells }) => {
  return (
    <>
      <div className="form-input">
        <label className="input-text" htmlFor="/">
          enter the number of columns
        </label>
        <input
          type="number"
          className="input"
          name="columns"
          min="0"
          value={columns}
          onChange={addInputData}
        />
      </div>

      <div className="form-input">
        <label className="input-text" htmlFor="/">
          enter the number of rows
        </label>
        <input
          type="number"
          className="input"
          name="rows"
          min="0"
          value={rows}
          onChange={addInputData}
        />
      </div>

      <div className="form-input">
        <label className="input-text" htmlFor="/">
          enter the number of cells
        </label>
        <input
          type="number"
          className="input"
          name="cells"
          min="0"
          value={cells}
          onChange={addInputData}
        />
      </div>

      <div className="btn-form">
        <button className="button btn-create" type="submit">
          create matrix
        </button>
      </div>
    </>
  );
};

export default SettingsInput;
