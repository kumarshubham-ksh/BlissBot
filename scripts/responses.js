function getBotResponse(input) {
    if (input.toLowerCase().indexOf('name') > -1) {
        return "Nice to meet you! How are you feeling today?";
    } else if ((input.toLowerCase().indexOf('not good') > -1) || (input.toLowerCase().indexOf('unhappy') > -1) || (input.toLowerCase().indexOf('sad') > -1) || (input.toLowerCase().indexOf('depressed') > -1)) {
        return "Oh, sorry to hear that! Seems like you require mental health assistance.<br>Do you need some mental health tips from me to feel better?";
    } else if ((input.toLowerCase().indexOf('good') > -1) || (input.toLowerCase().indexOf('nice') > -1) || (input.toLowerCase().indexOf('fine') > -1) || (input.toLowerCase().indexOf('happy') > -1)) {
        return "Pleased to hear that! Seems like you do not require mental health assistance as of now.<br>However, do you need some mental health tips from me?";
    } else if ((input.toLowerCase().indexOf('yes') > -1) || (input.toLowerCase().indexOf('yeah') > -1) || (input.toLowerCase().indexOf('yup') > -1) || (input.toLowerCase().indexOf('sure') > -1)) {
        return "Sure, here are some tips for your betterment:<br>1. Practice self-care daily.<br>2. Stay connected to your family.<br>3. Try to manage your stress.<br>4. Try to limit your screen-time.<br>5. Seek professional help.<br><br>Please rate your mental health on a scale of 1 to 5, 5 being the highest."
    } else if ((input.indexOf('1') > -1) || (input.indexOf('2') > -1) || (input.indexOf('3') > -1)) {
        return "According to me, you should seek professional medical help immediately. Take care!"
    } else if ((input.indexOf('4') > -1) || (input.indexOf('5') > -1)) {
        return "That's good! You are heading towards the right direction. Take care!"
    } else if ((input.toLowerCase().indexOf('no') > -1) || (input.toLowerCase().indexOf('nope') > -1) || (input.toLowerCase().indexOf('nah') > -1) || (input.toLowerCase().indexOf('not') > -1)) {
        return "Okay, no problem. Take care!"
    } else if ((input.toLowerCase().indexOf('bye') > -1) || (input.toLowerCase().indexOf('goodbye') > -1) || (input.toLowerCase().indexOf('thank you') > -1)) {
        return "Thank you for your time. Talk to you later!";
    } else if ((input.toLowerCase().trim().split(/\s+/).length == 1) || (input.toLowerCase().trim().split(/\s+/).length == 2)) {
        return "Nice to meet you, "+input+"! How are you feeling today?";
    } else {
        return "Try asking something else!";
    }
}
