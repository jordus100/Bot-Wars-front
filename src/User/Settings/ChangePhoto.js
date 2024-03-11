import { act } from "react-dom/test-utils";


export default function ChangePhotoPopup(props) {
    const {setPhoto, close} = props;

    return (
        <>
            <h1>Change your photo</h1>
            <form className="user-setting-popup-form">
                <input type='file'/>
                <button type='submit'>Change photo</button>
            </form>
        </>
    )
}