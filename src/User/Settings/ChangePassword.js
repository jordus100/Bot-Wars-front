

export default function ChangePasswordPopup(props) {
    var {setReturn} = props;
    var updatePassword = function(e){
        e.preventDefault();
        var old = e.target[0].value;
        var newP = e.target[1].value;
        var repeat = e.target[2].value;
        if (newP !== repeat) {
            console.log("New passwords don't match");
            return;
        }
        setReturn({'old':old, 'new':newP});
    }
    return (
        <div>
            <h1>Change Password</h1>
            <form className="user-setting-popup-form" onSubmit={updatePassword}>
                <input type='password' placeholder='Old Password'/>
                <input type='password' placeholder='New Password'/>
                <input type='password' placeholder='Repeat New Password'/>
                <button type='submit'>Change</button>
            </form>
        </div>
    )
}