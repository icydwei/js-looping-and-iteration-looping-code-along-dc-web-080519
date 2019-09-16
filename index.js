// Code your solutions in this file
function writeCards(names, eventName) {
  let messagearray = []
  for (let counter = 0; counter < names.length; counter++)
  {
    messagearray.push(`Thank you, ${names[counter]}, for the wonderful ${eventName} gift!`)
  }
  return messagearray
}



function countdown(num) {
  for (let counter = num; counter >= 0; counter --)
  {
    console.log(counter)
  }
}
