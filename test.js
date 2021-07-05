const sortedMatrix = [
  { Amount: 283, ID: 0 },
  { Amount: 545, ID: 5 },
  { Amount: 554, ID: 3 },
  { Amount: 587, ID: 8 },
  { Amount: 603, ID: 4 },
  { Amount: 690, ID: 1 },
  { Amount: 835, ID: 6 },
  { Amount: 861, ID: 2 },
  { Amount: 871, ID: 7 },
];
const cells = 5;
const findNearestCells = (cells, sortedMatrix, item) => {
  let copySortedMatrix = [...sortedMatrix]; 
  let nearestCells = [];

  for (let i = 0; i < cells; i++) {
     let copySortedMatrixId = [];
     let copySortedMatrixAm = [];
     copySortedMatrix.forEach(el => {
       copySortedMatrixId.push(el.ID);
       copySortedMatrixAm.push(el.Amount);
     });
    const itemIndex = copySortedMatrixId.indexOf(item.ID);
    const prevEl = copySortedMatrix[itemIndex - 1];
    const nextEl = copySortedMatrix[itemIndex + 1];
    const nearest =
      item.Amount - prevEl.Amount > nextEl.Amount - item.Amount
        ? nextEl
        : prevEl;
    nearestCells.push(nearest);
    copySortedMatrix.splice(
      copySortedMatrixId.indexOf(nearest.ID),
      1,
    );
  }
  console.log(...nearestCells);
};

findNearestCells(cells, sortedMatrix, { Amount: 554, ID: 3 });
