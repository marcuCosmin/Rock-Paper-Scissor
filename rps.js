$(function() {

    paper();

    rock();

    scissor();

    newGame();
});

let possibilities = ['Rock', 'Paper', 'Scissor'];

let userPick;

let compPick;

let gamesPlayed = 0;

let loses = 0;

let wins = 0;

let pargraph;

let undoAnimations = 0;

let draws = 0;


function rock() {

    $('#rock').on('click', clickedRock);

}

function paper() {

    $('#paper').on('click', clickedPaper);

}


function scissor() {

    $('#scissor').on('click', clickedScissor);

}

function clickedRock() {

    gamesPlayed += 1;

    userPick = possibilities[0];

    compPick = possibilities[Math.floor(Math.random() * Math.floor(3))];

    check();

    $('#rock').prop('disabled', true);

    $('#paper').prop('disabled', true);

    $('#scissor').prop('disabled', true);

    $('#gamesPlayed').text(gamesPlayed);

    undoAnimations = 0;
}

function clickedPaper() {

    gamesPlayed += 1;

    userPick = possibilities[1];

    compPick = possibilities[Math.floor(Math.random() * Math.floor(3))];

    check();
    
    $('#rock').prop('disabled', true);

    $('#paper').prop('disabled', true);

    $('#scissor').prop('disabled', true);

    $('#gamesPlayed').text(gamesPlayed);

    undoAnimations = 1;
}


function clickedScissor() {
    
    gamesPlayed += 1;
    
    userPick = possibilities[2];
    
    compPick = possibilities[Math.floor(Math.random() * Math.floor(3))];
    
    check();
    
    $('#rock').prop('disabled', true);
    
    $('#paper').prop('disabled', true);
    
    $('#scissor').prop('disabled', true); 
    
    $('#gamesPlayed').text(gamesPlayed);

    undoAnimations = 2;
}

function check() {
    
    if (userPick === possibilities[1] && compPick === possibilities[2]) {
        
        $('#paper').animate({bottom: '200px'}, 'slow');
        $('#questionMark').animate({top: '100px'}, 'slow');
        $('#questionMark').attr('src', 'Scissor Rotated.jpg')
        $('#compPickP').text('You lost!');
        $('#yourPickP').text('');
        $('#yourPickP').addClass('yourPickP');
        loses += 1;
        $('#lostGames').text(loses);
    } 
    
    else {
        
        if (userPick === possibilities[0] && compPick === possibilities[1]) {
            
            $('#questionMark').attr('src', 'Paper Rotated.jpg')
            $('#rock').animate({bottom: '200px'}, 'slow');
            $('#questionMark').animate({top: '100px'}, 'slow');
            $('#compPickP').text('You lost!');
            $('#yourPickP').text('');
            $('#yourPickP').addClass('yourPickP');
            loses += 1;
            $('#lostGames').text(loses);
        }
        
        else {
            
            if (userPick === possibilities[2] && compPick === possibilities[0]) {
                
                $('#questionMark').attr('src', 'Rock Rotated.jpg')
                $('#scissor').animate({bottom: '200px'}, 'slow');
                $('#questionMark').animate({top: '100px'}, 'slow');
                $('#compPickP').text('You lost!');
                $('#yourPickP').text('');
                $('#yourPickP').addClass('yourPickP');
                loses += 1;
                $('#lostGames').text(loses);
            }

            else {

                if (userPick === possibilities[1] && compPick === possibilities[1]) {

                    $('#questionMark').attr('src', 'Paper Rotated.jpg')
                    $('#paper').animate({bottom: '200px'}, 'slow');
                    $('#questionMark').animate({top: '100px'}, 'slow');
                    $('#compPickP').text('Draw!');
                    $('#yourPickP').text('');
                    $('#yourPickP').addClass('yourPickP');
                    draws += 1;
                    $('#draws').text(draws);
                }
                
                else {

                    if (userPick === possibilities[2] && compPick === possibilities[2]) {

                        $('#questionMark').attr('src', 'Scissor Rotated.jpg')
                        $('#scissor').animate({bottom: '200px'}, 'slow');
                        $('#questionMark').animate({top: '100px'}, 'slow');
                        $('#compPickP').text('Draw!');
                        $('#yourPickP').text('');
                        $('#yourPickP').addClass('yourPickP');
                        draws += 1;
                        $('#draws').text(draws);
                    }

                    else {

                        if (userPick === possibilities[0] && compPick === possibilities[0]) {

                            $('#questionMark').attr('src', 'Rock Rotated.jpg')
                            $('#rock').animate({bottom: '200px'}, 'slow');
                            $('#questionMark').animate({top: '100px'}, 'slow');
                            $('#compPickP').text('Draw!');
                            $('#yourPickP').text('');
                            $('#yourPickP').addClass('yourPickP');
                            draws += 1;
                            $('#draws').text(draws);
                        }

                        else {

                            if (userPick === possibilities[1] && compPick === possibilities[0]) {

                                $('#questionMark').attr('src', 'Rock Rotated.jpg')
                                $('#paper').animate({bottom: '200px'}, 'slow');
                                $('#questionMark').animate({top: '100px'}, 'slow');
                                $('#compPickP').text('You won!');
                                $('#yourPickP').text('');
                                $('#yourPickP').addClass('yourPickP');
                                wins += 1;
                                $('#wonGames').text(wins);
                            }

                            else {

                                if (userPick === possibilities[0] && compPick === possibilities[2]) {

                                    $('#questionMark').attr('src', 'Scissor Rotated.jpg')
                                    $('#rock').animate({bottom: '200px'}, 'slow');
                                    $('#questionMark').animate({top: '100px'}, 'slow');
                                    $('#compPickP').text('You won!');
                                    $('#yourPickP').text('');
                                    $('#yourPickP').addClass('yourPickP');
                                    wins += 1;
                                    $('#wonGames').text(wins);
                                }

                                else {

                                    if (userPick === possibilities[2] && compPick === possibilities[1]) {

                                        $('#questionMark').attr('src', 'Paper Rotated.jpg')
                                        $('#scissor').animate({bottom: '200px'}, 'slow');
                                        $('#questionMark').animate({top: '100px'}, 'slow');
                                        $('#compPickP').text('You won!');
                                        $('#yourPickP').text('');
                                        $('#yourPickP').addClass('yourPickP');
                                        wins += 1;
                                        $('#wonGames').text(wins);
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function newGame() {

    $('#newGame').on('click', clickedNewGame);
}

function clickedNewGame() {

    $('#rock').prop('disabled', false);

    $('#paper').prop('disabled', false);

    $('#scissor').prop('disabled', false);

    if (undoAnimations == 0) {

        $('#rock').animate({bottom: '0px'}, '0');
        $('#questionMark').animate({top: '0px'}, '0');
        $('#questionMark').attr('src', 'Question Mark.jpg');
        $('#compPickP').text("Computer's pick");
        $('#yourPickP').text('Your pick');
        $('#yourPickP').removeClass('yourPickP');
    }
    else {

        if (undoAnimations == 1) {

            $('#paper').animate({bottom: '0px'}, '0');
            $('#questionMark').animate({top: '0px'}, '0');
            $('#questionMark').attr('src', 'Question Mark.jpg');
            $('#compPickP').text("Computer's pick");
            $('#yourPickP').text('Your pick');
            $('#yourPickP').removeClass('yourPickP');
        }
        else {

                $('#scissor').animate({bottom: '0px'}, '0');
                $('#questionMark').animate({top: '0px'}, '0');
                $('#questionMark').attr('src', 'Question Mark.jpg');
                $('#compPickP').text("Computer's pick");
                $('#yourPickP').text('Your pick');
                $('#yourPickP').removeClass('yourPickP');
        }
    }

}
