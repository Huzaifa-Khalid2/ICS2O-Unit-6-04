document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let day = ''
  let age = ''
  age = document.getElementById('my-text').value
  age = parseInt(age)
  day = document.getElementById('my-text2').value 
  if ((day === 'saturday') && (age > 5 && age < 19)) {
    alert('You can come in the museam with student pricing!')
    // it is one of the two results. it will occur when the user puts down an age larger than 14 and put down a day that is monday or wednesday.
  } else {
    alert('You cannot come in the museam with student pricing.')
  }
  // it is one of the two results. it will occur when the user puts down an age smaller than 14 or put down a day that isn't monday or wednesday.
}
