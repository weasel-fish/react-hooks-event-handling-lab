// Code Keypad Component Here
function Keypad() {
    function enterPass() {
        console.log('Entering password...')
    }
    
    return (
        <input type='password' onChange={enterPass}/>
    )
}

export default Keypad