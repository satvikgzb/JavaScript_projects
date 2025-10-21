let sum = 0

n = Number.parseInt(prompt('enter the no of natural numbers you want to add:'))

for (i=1;i<n+1;i++){
    sum+=i
}
alert('the sum of first ' + n + ' natural numbers is '+ sum)