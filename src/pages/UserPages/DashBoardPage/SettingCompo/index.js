import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import './SettingCompo.scss';

function SettingCompo() {
    const user = useContext(AuthContext);

    return (
        <div className="settings">
            <div className="settings-heading">
                <h3>Settings</h3>
            </div>
            <div className="personal_info">
                <h2>Personal Info</h2>
                <div className="personal_form">
                    <div className="personal_row">
                        <div className="personal_firstname">
                            <label htmlFor="firstname">First Name</label>
                            <input className="firstname" />
                        </div>
                        <div className="personal_lastname">
                            <label htmlFor="lastname">Last Name</label>
                            <input className="lastname" />
                        </div>
                    </div>
                    <div className="personal_row">
                        <div className="personal_display_name">
                            <label htmlFor="display_name">Display Name</label>
                            <input className="display_name" defaultValue={user.currentUser.displayName} />
                        </div>
                    </div>
                    <div className="personal_row">
                        <div className="personal_email">
                            <label htmlFor="email">Email</label>
                            <input className="email" defaultValue={user.currentUser.email} />
                        </div>
                    </div>
                    <div className="personal_row">
                        <div className="personal_phone">
                            <label htmlFor="phone">Phone</label>
                            <input className="phone" defaultValue={user.currentUser.phoneNumber} />
                        </div>
                    </div>
                </div>
                <h2>Password Change</h2>
                <div className="personal_form">
                    <div className="personal_row">
                        <div className="personal_current_password">
                            <label htmlFor="current_password">Current Password</label>
                            <input className="current_password" />
                        </div>
                    </div>
                    <div className="personal_row">
                        <div className="personal_new_password">
                            <label htmlFor="new_password">New Password</label>
                            <input type="password" className="new_password" />
                        </div>
                        <div className="personal_confirm_password">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input type="password" className="confirm_password" />
                        </div>
                    </div>
                </div>
                <button className="save_changes_btn">SAVE CHANGES</button>
            </div>
        </div>
    );
}

export default SettingCompo;
