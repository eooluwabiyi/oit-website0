function getBotResponse(input){

    //PAPPER SCISSORS ROCK

    if (input == "rock" ){
        return "papper";
    }else if(input == "scissors"){
        return 'rock';
    }else if(input == "papper"){
        return 'scissors';
    }

    //SIMPLE RESPONSE

    if (input == "Hello"){
        return "Hello there";
    }else if(input == "Goodbye"){
        return 'Talk to you later';
    }else {
        return 'Try asking something else, If you are not satisfied, Kindly Chat with customer care via the Whatsapp button down below..';
    }
}