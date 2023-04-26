// What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* This code doesn't log anything. The function returns on line 5, ending it 
before the console.log() function is called */