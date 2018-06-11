function Checker (rowIndex, colIndex, rowElement, this) {
    this.type = type,
    this.amount = amount
}

Checker.prototype = {
    constructor: Checker,
    redOnBoard: function() {
        this.element = document.createElement("div")
        this.classList.add = "redChecker"
        this.dataset.rowIndex = this.rowIndex
        this.dataset.colIndex = this.colIndex


    },
}