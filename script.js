document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
   let age = document.getElementById('my-text').value
  age = parseInt(age)
   let day = document.getElementById('my-text2').value
  day = parseInt(day)
  if ((day === 'monday' || day === 'wednesday') || (age > 14 && age < 30)) {
    alert('You can come in the museam!')
  } else {
    alert('You cannot come in the museam.')
  }
  // it is one of the two results. it will occur when the user puts down an age smaller than 14 or put down a day that isn't monday or wednesday.
}
