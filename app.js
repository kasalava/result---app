 const resultElement = document.getElementById('result')
 const input1 = document.getElementById('input1')
 const input2 = document.getElementById('input2')
 const submitBtn = document.getElementById ('submit')
 const sum = Number(input1.value1+input1.value2)
 resultElement.textContent = sum
 console.log(typeof  sum)
 submitBtn.onclick = function(){
    console.log('hello click')
 }