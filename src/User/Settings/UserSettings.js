import {useState} from 'react';
import Popup            from 'reactjs-popup';
import ChangeUsernamePopup from './ChangeUsername';


import Switch           from '@mui/material/Switch';
import Select           from '@mui/material/Select';
import InputLabel       from '@mui/material/InputLabel';
import MenuItem         from '@mui/material/MenuItem';
import FormGroup        from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SettingPopup from './SettingPopup';

function updateUsername(newname){
  console.log("new username: " + newname);
}

function updatePassword(password){
  console.log("new password: " + password)
}

function updatePhoto(photo){
  console.log("yo photo was updated");
}

function deleteAccount(){
  console.log("yo account was removed");
}

function saveSettings(settings){
  console.log("yo settings ware updated");
}

function resetSettings(){
  console.log("yo settings ware reversed");
}

function UserSettings() {
  const {language, setLanguage} = useState('pl');
  const {dbSettings, setDbSettings} = useState({});

  return (
    <>
    <div>
      <h1>User Settings</h1>
      <h3>Account Settings</h3>
      <div className='uset-setting-container'>
        <div className='user-setting-change'>
          <SettingPopup state='username' triggername='Change username' setReturn={updateUsername}/>
        </div>
        <div className='user-setting-change'>
            <SettingPopup state='password' triggername='Change password' setReturn={updatePassword}/>
        </div>
        <div className='user-setting-change'>
          <SettingPopup state='photo' triggername='Change photo' setReturn={updatePhoto}/>
        </div>
        <div className='user-setting-change'>
          <SettingPopup state='delete' triggername='Delete account' setReturn={deleteAccount}/>
        </div>
        <div className='user-settings-change'>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Notification" />
          </FormGroup>
        </div>
        <div className='user-settings-change'>
          <FormGroup>
            <InputLabel id="language-select-component">Język</InputLabel>
            <Select
              labelId="language-select-component"
              value={language}
              label="Język"
              onChange={setLanguage}
            >
              <MenuItem value={'pl'}>Polski</MenuItem>
              <MenuItem value={'en'}>Angielski</MenuItem>
            </Select>
          </FormGroup>
        </div>
      </div>
      <h3>Screen Settings</h3>
      <div className='user-settings-change'>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
        </FormGroup>
      </div>
    </div>
    </>
  );
}

export default UserSettings;