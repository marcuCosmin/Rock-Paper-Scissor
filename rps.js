$(function() {

    paper();

    rock();

    scissor();
});

let possibilities = ['Rock', 'Paper', 'Scissor'];

let userPick;

let compPick;

let gamesPlayed = 0;

let loses = 0;

let wins = 0;


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

    $('#yourPickP').replaceWith('<p></p>');

    $('#rock').prop('disabled', true);

    $('#paper').prop('disabled', true);

    $('#scissor').prop('disabled', true);

    $('#gamesPlayed').text(gamesPlayed);
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
}

function check() {
    
    if (userPick === possibilities[1] && compPick === possibilities[2]) {
        
        $('#paper').animate({bottom: '200px'}, 'slow');
        $('#questionMark').animate({top: '100px'}, 'slow');
        $('#questionMark').attr('src', 'Scissor Rotated.jpg')
        $('#compPickP').replaceWith('<p>You lost!</p>');
        loses += 1;
        $('#gamesLost').text(loses);
    } 

    else {
        
        if (userPick === possibilities[0] && compPick === possibilities[1]) {

            $('#questionMark').attr('src', 'Paper Rotated.jpg')
            $('#rock').animate({bottom: '200px'}, 'slow');
            $('#questionMark').animate({top: '100px'}, 'slow');
            $('#compPickP').replaceWith('<p>You lost!</p>');
            loses += 1;
            $('#gamesLost').text(loses);
        }

        else {

            if (userPick === possibilities[2] && compPick === possibilities[0]) {

                $('#questionMark').attr('src', 'Rock Rotated.jpg')
                $('#scissor').animate({bottom: '200px'}, 'slow');
                $('#questionMark').animate({top: '100px'}, 'slow');
                $('#compPickP').replaceWith('<p>You lost!</p>');
                loses += 1;
                $('#gamesLost').text(loses);
            }

            else {

                if (userPick === possibilities[1] && compPick === possibilities[1]) {

                    $('#questionMark').attr('src', 'Paper Rotated.jpg')
                    $('#paper').animate({bottom: '200px'}, 'slow');
                    $('#questionMark').animate({top: '100px'}, 'slow');
                    $('#compPickP').replaceWith('<p>Draw!</p>');
                }
                
                else {

                    if (userPick === possibilities[2] && compPick === possibilities[2]) {

                        $('#questionMark').attr('src', 'Scissor Rotated.jpg')
                        $('#scissor').animate({bottom: '200px'}, 'slow');
                        $('#questionMark').animate({top: '100px'}, 'slow');
                        $('#compPickP').replaceWith('<p>Draw!</p>');
                    }

                    else {

                        if (userPick === possibilities[0] && compPick === possibilities[0]) {

                            $('#questionMark').attr('src', 'Rock Rotated.jpg')
                            $('#rock').animate({bottom: '200px'}, 'slow');
                            $('#questionMark').animate({top: '100px'}, 'slow');
                            $('#compPickP').replaceWith('<p>Draw!</p>');
                        }

                        else {

                            if (userPick === possibilities[1] && compPick === possibilities[0]) {

                                $('#questionMark').attr('src', 'Rock Rotated.jpg')
                                $('#paper').animate({bottom: '200px'}, 'slow');
                                $('#questionMark').animate({top: '100px'}, 'slow');
                                $('#compPickP').replaceWith('<p>You won!</p>');
                                wins += 1;
                                $('#gamesWon').text(wins);
                            }

                            else {

                                if (userPick === possibilities[0] && compPick === possibilities[2]) {

                                    $('#questionMark').attr('src', 'Scissor Rotated.jpg')
                                    $('#rock').animate({bottom: '200px'}, 'slow');
                                    $('#questionMark').animate({top: '100px'}, 'slow');
                                    $('#compPickP').replaceWith('<p>You won!</p>');
                                    wins += 1;
                                    $('#gamesWon').text(wins);
                                }

                                else {

                                    if (userPick === possibilities[2] && compPick === possibilities[1]) {

                                        $('#questionMark').attr('src', 'Paper Rotated.jpg')
                                        $('#scissor').animate({bottom: '200px'}, 'slow');
                                        $('#questionMark').animate({top: '100px'}, 'slow');
                                        $('#compPickP').replaceWith('<p>You won!</p>');
                                        wins += 1;
                                        $('#gamesWon').text(wins);
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