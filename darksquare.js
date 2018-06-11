function DarkSquare(rowIndex, colIndex, parentElement, grid) {
    BasicSquare.call(this, rowIndex, colIndex, parentElement, grid)
    // this.addDarkSquare()
    this.element.classList.replace("lightcell", "darkcell")
}

DarkSquare.prototype = Object.create(BasicSquare.prototype)
DarkSquare.prototype.constructor = DarkSquare

// DarkSquare.prototype.addDarkSquare = function () {
//     const cell = this.grid.findCellByIndex(rowIndex, colIndex)
//     console.log(cell)
//     this.board.forEach((row, rowIndex) => {
//         this.board[rowIndex] = []
//         const rowElement = this.create_row()
//         row.forEach((_, colIndex) => {
            
            
//         });
//     });
// }