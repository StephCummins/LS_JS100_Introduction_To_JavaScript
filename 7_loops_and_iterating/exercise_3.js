// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* In the while loop, the counter is reassigned to a value of 1 every time the 
loop runs. Since the counter is always 1, the loop will run forever. */