/* Consider this code:
> let x = "5"
> x = x + 1
= "51"

Now, consider this code:
> let y = "5"
> y++

What gets returned by y++ in the second snippet, and why?

// It returns 5. JS coerces "5" the string to a number. The number 5 is returned, 
prior to it incrementing by 1(++) */
