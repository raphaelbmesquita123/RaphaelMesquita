const menuToggleUl = document.querySelector('.menuToggle ul')
const menuButton = document.querySelector('.menuButton')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')

menuButton.addEventListener('click', () => {
  menuToggleUl.classList.toggle('active')
  span1.classList.toggle('span1Active')
  span2.classList.toggle('span2Active')
})


function isVow(a){
  const x = []
  a.forEach(function (a,e) {
    if(a === 97){
      x.push('a')
    } else if (a === 101){
      x.push('e')
    } else if(a === 105){
      x.push('i')
    } else if(a === 111){
      x.push('o')
    } else if (a === 117){
      x.push('u')
    } else{
      x.push(a)
    }
  })
  return x
}

isVow([97,101,105,111,117,98,122,97,120,106,104,116,113,114,113,120,106])


function howManyDalmations(number){
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
  var respond = (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
  return respond
}

howManyDalmations(26)
console.log(howManyDalmations(8))
howManyDalmations(14)
howManyDalmations(80)
howManyDalmations(100)
howManyDalmations(101)


function check(a, x) {
  return a.includes(x)
}

console.log(check([66, 101], 66))

function between(a, b) {
  const newA = []
  for (let i = a; i !== b; i++){
    newA.push(a++)
  }
  return newA
}

console.log(between(-2,2))