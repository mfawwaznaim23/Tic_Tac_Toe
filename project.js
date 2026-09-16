const Gameboard = (() => {

    let board = ["", "", "", "", "", "", "", "", ""];

    function getBoard() {
        return board;
    }

    return {
        getBoard
    };

})();



function player(name) {

    let value = "";
    let score = 0;

    function addscore() {
        score++;
    }
    function getscore() {
        return score;
    }
    return { name, value, addscore, getscore };

}



const gamelogic = (() => {
    let value = "";
    let gameover = false;
    let gamevalue = "X";
    let gametie = false;

    function arrcheck() {

        if (
            Gameboard.getBoard()[0] === Gameboard.getBoard()[1] &&
            Gameboard.getBoard()[1] === Gameboard.getBoard()[2] &&
            Gameboard.getBoard()[0] !== ""
        ) {
            value = Gameboard.getBoard()[0];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[3] === Gameboard.getBoard()[4] &&
            Gameboard.getBoard()[4] === Gameboard.getBoard()[5] &&
            Gameboard.getBoard()[3] !== ""
        ) {
            value = Gameboard.getBoard()[3];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[6] === Gameboard.getBoard()[7] &&
            Gameboard.getBoard()[7] === Gameboard.getBoard()[8] &&
            Gameboard.getBoard()[6] !== ""
        ) {
            value = Gameboard.getBoard()[6];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[0] === Gameboard.getBoard()[3] &&
            Gameboard.getBoard()[3] === Gameboard.getBoard()[6] &&
            Gameboard.getBoard()[0] !== ""
        ) {
            value = Gameboard.getBoard()[0];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[1] === Gameboard.getBoard()[4] &&
            Gameboard.getBoard()[4] === Gameboard.getBoard()[7] &&
            Gameboard.getBoard()[1] !== ""
        ) {
            value = Gameboard.getBoard()[1];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[2] === Gameboard.getBoard()[5] &&
            Gameboard.getBoard()[5] === Gameboard.getBoard()[8] &&
            Gameboard.getBoard()[2] !== ""
        ) {
            value = Gameboard.getBoard()[2];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[0] === Gameboard.getBoard()[4] &&
            Gameboard.getBoard()[4] === Gameboard.getBoard()[8] &&
            Gameboard.getBoard()[0] !== ""
        ) {
            value = Gameboard.getBoard()[0];
            gameover = true;
        }

        else if (
            Gameboard.getBoard()[2] === Gameboard.getBoard()[4] &&
            Gameboard.getBoard()[4] === Gameboard.getBoard()[6] &&
            Gameboard.getBoard()[2] !== ""
        ) {
            value = Gameboard.getBoard()[2];
            gameover = true;
        }
        else {
            let check_num = 0;
            for (let k = 0; k < 9; k++) {
                if (Gameboard.getBoard()[k] != "") {
                    check_num++;
                }

            }
            if (check_num == 9) {
                gametie = true;
            }
        }

    }


    function changeturn() {
        const playermsg = document.querySelector(".player");
        if (gamevalue == dom_manipulation.getPlayer1().value) {
            gamevalue = dom_manipulation.getPlayer2().value;
            playermsg.textContent = `${dom_manipulation.getPlayer2().name}'s turn`;

        }
        else if (gamevalue == dom_manipulation.getPlayer2().value) {

            gamevalue = dom_manipulation.getPlayer1().value;

            playermsg.textContent = `${dom_manipulation.getPlayer1().name}'s turn`;

        }
    }

    function getgameval() {
        return gamevalue;
    }

    function getgameover_val() {
        return gameover;
    }
    function getgamewin_val() {
        return value;
    }
    function getgametie_val() {
        return gametie;
    }
    function reset() {
        gametie = false;
        gameover = false;
    }

    return { getgameover_val, getgamewin_val, getgameval, changeturn, arrcheck, getgametie_val, reset }

})();


const dom_manipulation = (() => {
    const winnerBanner = document.querySelector(".winner-banner");
    const buttondiv = document.querySelector(".but_container");
    const startbutton = document.querySelector(".startbut");
    const gridsquares = document.querySelectorAll(".gameboard-grid")
    const playermsg = document.createElement("h2");
    const replaybut = document.createElement("button");
    const replay_playermsg = document.createElement("h2");
    const scorecont = document.querySelector(".scorecont");
    replaybut.textContent = "Play again";
    replaybut.classList = "replaybut";
    replaybut.addEventListener("click", function () {
        gridsquares.forEach(function (gridsquare) {
            gridsquare.textContent = "";
        });
        winnerBanner.style.display = "none";
        replaybut.remove();
        playermsg.textContent = `${player2.name}'s turn`;
        playermsg.classList.add("player");
        buttondiv.appendChild(playermsg);
        replay_playermsg.textContent = `${player1.name}  ${player1.getscore()} — ${player2.getscore()}  ${player2.name}`;
        scorecont.appendChild(replay_playermsg);
        for (let k = 0; k < 9; k++) {
            Gameboard.getBoard()[k] = "";
            console.log(Gameboard.getBoard()[k]);


        }
        gamelogic.reset();

    });
    let player1;
    let player2;
    startbutton.addEventListener("click", function () {
        console.log("buttonworks");
        let name1 = prompt("What is player1's name?");
        player1 = player(name1);
        player1.value = "X";
        let name2 = prompt("What is player2's name?");
        player2 = player(name2);
        player2.value = "O";
        startbutton.remove();
        playermsg.textContent = `${player1.name}'s turn`;
        playermsg.classList.add("player");
        buttondiv.appendChild(playermsg);




    });
    function getPlayer1() {
        return player1;
    }

    function getPlayer2() {
        return player2;
    }

    gridsquares.forEach(function (gridsquare, index) {
        gridsquare.addEventListener("click", function () {
            const playermsg = document.querySelector(".player");

            gamelogic.arrcheck();
            if (gridsquare.textContent === "" && player1.name != null && player2.name != null) {

                gridsquare.textContent = gamelogic.getgameval();
                if (gridsquare.textContent === "X") {
                    gridsquare.style.color = "#3b82f6";
                } else {
                    gridsquare.style.color = "#f43f5e";
                }
                Gameboard.getBoard()[index] = gamelogic.getgameval();
                gamelogic.changeturn();
                gamelogic.arrcheck();
                if (gamelogic.getgameover_val() == true) {
                    playermsg.remove();
                    if (gamelogic.getgamewin_val() == "X") {
                        winnerBanner.textContent = `${player1.name} won`
                        player1.addscore();
                    }
                    else if (gamelogic.getgamewin_val() == "O") {
                        winnerBanner.textContent = `${player2.name} won`
                        player2.addscore();
                    }
                    winnerBanner.style.display = "block";
                    buttondiv.appendChild(replaybut);

                }
                else if (gamelogic.getgametie_val() == true) {
                    playermsg.remove();
                    winnerBanner.textContent = `Game Tie`;
                    winnerBanner.style.display = "block";
                    buttondiv.appendChild(replaybut);
                }

            }








        });
    });

    return { getPlayer1, getPlayer2 };

})();


