export default function ChangePhotoPopup(props) {
    var {setReturn} = props;
    var updatePhoto = function(e){
        e.preventDefault();
        var photo = e.target[0].value;
        setReturn(photo);
    }
    return (
        <>
            <h1>Change your photo</h1>
            <form className="user-setting-popup-form" onSubmit={updatePhoto}>
                <input type='file'/>
                <button type='submit'>Change photo</button>
            </form>
        </>
    )
}