function createPlayer(player_name) {
    const name = player_name;
    let score = 0;
    let marker = '';

    const getName = () => name;

    function setMarker(chosen_marker) {
        const possible_markers = ['X', 'O'];

        const temp_marker = chosen_marker.toString().toLowerCase();
        try {
            if (temp_marker != 'x' && temp_marker != 'o') throw "Not 'X' or 'O'";
            marker = temp_marker.toUpperCase();
        } catch (err) {
            console.error(err);
        }
    }

    const getMarker = () => marker;

    const increaseScore = () => score++;

    const getScore = () => score;

    return {
        'getScore': getScore,
        'increaseScore': increaseScore,
        'getMarker': getMarker,
        'setMarker': setMarker,
        'getName': getName,
    }
}


function createBoardCell() {
    let occupied = false;
    let occupied_by;

    const getOccupied = () => occupied;

    function setOccupied(player) {
        occupied = true;
        occupied_by = player;
    }

    function setUnoccupied() {
        occupied = false;
        occupied_by = null;
    }

    function getOccupiedBy() {
        try {
            if (!occupied) throw "Cell needs to be occupied";
            return occupied_by;
        } catch (err) {
            console.error(err);
        }
    }

    return {
        'setOccupied': setOccupied,
        'setUnoccupied': setUnoccupied,
        'getOccupied': getOccupied,
        'getOccupiedBy': getOccupiedBy,
    }

}


const game_board = (function createGameBoard() {
    const row = [1, 2, 3];
    const board = [[], [], []];

    function createBoard() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = createBoardCell();
            }
        }
    }

    function getBoard() {
        return board;
    }

    function addPlayerMarkerToBoard(player, row, column) {
        board[row-1][column-1].setOccupied(player);
    }

    function checkRowForWinner(player, row) {
        for (let i = 0; i < 3; i++) {
            if (!board[row, i].getOccupied) {
                return false;
            } else {
                if (board[row][i].getOccupiedBy != player) {
                    return false;
                }
            }
        }
        return true
    }

    function checkColumnForWinner(player, column) {
        for (let i = 0; i < 3; i++) {
            if (!board[i][column].getOccupied) {
                return false;
            } else {
                if (board[i][column].getOccupiedBy != player) {
                    return false;
                }
            }
        }
        return true;
    }

    // HAD JUST STARTED WORK ON THIS
    // function checkForDiagonalWin(player) {
    //     for (let i = 0; i < 3; i++) {
    //         if 
    //     }
    // }

    function checkForWinner(latest_row, latest_column) {
        let has_won = false;
    }



    return {
        'createBoard': createBoard,
        'getBoard': getBoard,
        'addPlayerMarkerToBoard': addPlayerMarkerToBoard,
    }

})();



function gameController() {
    game_board.createBoard();
}

gameController();








const player1 = createPlayer('Thomas');
// player1.getName();
player1.setMarker('x');
// player1.getMarker();
