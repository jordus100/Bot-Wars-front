

export default function ChangeUsernamePopup() {
    return (
        <>
            <h1>Change username</h1>
            <form className='user-setting-popup-form'>
                <input type='text' placeholder='New username'></input>
                <button type='submit'>Change username</button>
            </form>
        </>
    )
}