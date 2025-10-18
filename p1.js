const a = prompt('enter a no:')
if (a%2==0 && a%3==0){
    alert('the no is divisible by both 2 and 3')
}
else if(a%2==0 && a%3!=0){
    alert('the no is divisible by only 2')
}
else if(a%3==0 && a%2!=0){
    alert('the no is divisible by only 3')
}
else{
    alert('the no is not divisible by both 2 and 3')
}
