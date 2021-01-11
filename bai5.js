function seatsInTheater(nCols, nRows, col, row) {
    let Row = nRows - row;
    let Column = nCols - col + 1;
    return Row * Column;
    }