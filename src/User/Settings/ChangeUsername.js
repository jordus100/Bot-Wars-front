

export default function ChangeUsernamePopup(props) {
    var {setReturn} = props;
    var updateUsername = function(e){
        e.preventDefault();
        var newUsername = e.target[0].value;
        setReturn(newUsername);
    }
    return (
        <>
            <h1>Change username</h1>
            <form className='user-setting-popup-form' onSubmit={updateUsername}>
                <input type='text' placeholder='New username'></input>
                <button type='submit'>Change username</button>
            </form>
        </>
    )
}