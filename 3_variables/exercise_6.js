// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* No, it will log “bar.” The second constant FOO was declared as a new const
inside of the curly braces. The two consts are separate variables. */ 