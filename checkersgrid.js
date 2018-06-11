function CheckersGrid(numberOfRows, numberOfCols, parentElement) {
    Grid.call(this, numberOfRows, numberOfCols, parentElement)
    this.board_create()
}

CheckersGrid.prototype = Object.create(Grid.prototype)
CheckersGrid.prototype.constructor = CheckersGrid

CheckersGrid.prototype.board_create = function () {
    this.board = new Array(this.numberOfRows).fill().map(() => new Array(this.numberOfCols).fill());
    this.board.forEach((row, rowIndex) => {
        this.board[rowIndex] = []
        const rowElement = this.create_row()
        row.forEach((_, colIndex) => {
            if ((rowIndex + colIndex) % 2 === 0) {
                this.board[rowIndex][colIndex] = new DarkSquare(rowIndex, colIndex, rowElement, this);
            } 
            else if ((rowIndex + colIndex) % 2 === 0) {
                 console.log("yo")
                // this.board[rowIndex][colIndex] = new Checker(rowIndex, colIndex, rowElement, this);

            }
            else {
                this.board[rowIndex][colIndex] = new BasicSquare(rowIndex, colIndex, rowElement, this);
            }
            // this.board[rowIndex][colIndex] = new Player(rowIndex,colIndex, rowElement, this);
            // this.board[rowIndex][colIndex].addEventListener("click",this.handleClick)
        });
    });
}