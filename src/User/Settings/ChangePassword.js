

export default function ChangePasswordPopup() {
    return (
        <div>
            <h1>Change Password</h1>
            <form className="user-setting-popup-form">
                <input type='password' placeholder='Old Password'/>
                <input type='password' placeholder='New Password'/>
                <input type='password' placeholder='Repeat New Password'/>
                <button type='submit'>Change</button>
            </form>
        </div>
    )
}