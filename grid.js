function Grid(numberOfRows, numberOfCols, parentElement) {
    this.numberOfRows = numberOfRows
    this.numberOfCols = numberOfCols
    this.parentElement = parentElement
}

Grid.prototype = {
   constructor: Grid,

    board_create: function () {
        this.board = new Array(this.numberOfRows).fill().map(() => new Array(this.numberOfCols).fill());
        this.board.forEach((row, rowIndex) => {
            this.board[rowIndex] = []
            const rowElement = this.create_row()
            row.forEach((_, colIndex) => {
                this.board[rowIndex][colIndex] = new BasicSquare(rowIndex, colIndex, rowElement, this);
                // this.board[rowIndex][colIndex] = new Player(rowIndex,colIndex, rowElement, this);
                // this.board[rowIndex][colIndex].addEventListener("click",this.handleClick)
            });
        });
    },

    pieces_on_board: function () {
        // place player one and two pieces on the grid using a new Player() constructor function
        //

        this.board[rowIndex][colIndex] = new Player(rowIndex, colIndex, count, parentElement, grid, this);
    },


    findCellByIndex: function (rowIndex, colIndex) {
        const row = this.board[rowIndex]
        if (row) {
            return row[colIndex]
        } else {
            return null
        }
    },

    check_neighbor_cells: function () {
        console.log(cellclicked)
    },

    create_row: function () {
        const rowElement = document.createElement("div")
        rowElement.classList.add("row")
        this.parentElement.appendChild(rowElement)
        return rowElement
    },
}