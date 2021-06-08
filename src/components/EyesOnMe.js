// Code EyesOnMe Component Here
function EyesOnMe() {
    function blurEvent() {
        console.log('Hey! Eyes on me!')
    }

    function focusEvent() {
        console.log('Good!')
    }
    
    return (
        <button onBlur={blurEvent} onFocus={focusEvent}>Eyes on me</button>
    )
}

export default EyesOnMe