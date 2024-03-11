

export default function DeleteAccountPopup(setReturn) {
    var deleteAccount =function(e){
        e.preventDefault();
        var writen = e.target[0].value;
        if (writen !== 'delete') {
            console.log("Wrong input");
            return;
        } else {
            setReturn();
        }
    }

    return (
        <>
            <h1>Are you sure you want to delete your account?</h1>
            <p>This action is irreversible and will delete all your data</p>
            <form className='user-setting-popup-form'>
                <input type='text' placeholder='Type "delete" to confirm'></input>
                <button type='submit' onSubmit={deleteAccount}>Delete account</button>
            </form>
        </>
    )
}