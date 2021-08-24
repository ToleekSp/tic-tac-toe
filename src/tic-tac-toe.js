class TicTacToe {
    constructor() {
		this.len = 3;
		this.matrix = new Array(this.len).fill('').map(item => new Array(this.len).fill(null));
		this.player = 'x';
		this.winner = null;
    }

    getCurrentPlayerSymbol() {
		return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
		if(this.matrix[rowIndex][columnIndex] == 'x' || this.matrix[rowIndex][columnIndex] == 'o')
			return false;
		
		this.matrix[rowIndex][columnIndex] = this.player;
		this.player = this.player == 'x' ? 'o' : 'x';
    }

    isFinished() {
		return (this.noMoreTurns() || this.getWinner() !== null);
    }

    getWinner() {
		function equal(a, b, c)
		{
			return a != '' && a == b && a == c;
		}
		
		for (let i = 0; i < this.len; i++) {
			if (equal(this.matrix[0][i], this.matrix[1][i], this.matrix[2][i])) {
				this.winner = this.matrix[0][i];
				return this.winner;
			}

			if (equal(this.matrix[i][0], this.matrix[i][1], this.matrix[i][2])) {
				this.winner = this.matrix[i][0];
				return this.winner;
			}
		}

		if (equal(this.matrix[0][0], this.matrix[1][1], this.matrix[2][2])) {
			this.winner = this.matrix[0][0];
			return this.winner;
		}

		if (equal(this.matrix[0][2], this.matrix[1][1], this.matrix[2][0])) {
			this.winner = this.matrix[0][2];
			return this.winner;
		}
		
		return this.winner;
    }

    noMoreTurns() {
		for(let i = 0; i < this.len; i++)
		{
			for(let j = 0; j < this.len; j++)
			{
				if(this.matrix[i][j] == null)
					return false;
			}
		}
		
		return true;
    }

    isDraw() {
		return (this.noMoreTurns() && this.getWinner() == null);
    }

    getFieldValue(rowIndex, colIndex) {
		return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
