let no = Math.floor(Math.random()*100)+1
let attempts = 0
let game = ()=>{
    let user = null
    
    while (user != no){

        user = prompt('Enter your choice:')
        if (user.toLowerCase()=='stop'){
            alert('The game has been stopped!')
            return
        }
        else {
            user = Number.parseInt(user)

            if (isNaN(user)){
                alert('enter a valid no!')
                continue
            }
            attempts += 1

            
            if (user > no){
                alert('try smaller!')
            }
            else if (user < no ){
                alert('try bigger!')
            }          
        }
    }
    alert(`You guessed the correct number(${no}) in ${attempts} attempts!`)
    }

game()