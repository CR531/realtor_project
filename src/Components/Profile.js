import React from 'react';
const Profile = ({ profileData }) => {
    return (
        <div className="profile_div"><br />
            <h3 className="profile_text_align">Profile</h3>
            {profileData &&
                <table>
                    <tbody>
                        <tr><td rowSpan="5">
                            <img className="profile_logo" src={profileData.avatarImage} alt="Profile Logo"></img>
                        </td></tr>
                        <tr><td className="row_css">first name</td><td><h6>{profileData.firstName}</h6></td></tr>
                        <tr><td className="row_css">last name</td> <td><h6>{profileData.lastName}</h6></td></tr>
                        <tr><td className="row_css">phone</td><td><h6>{profileData.phone}</h6></td></tr>
                        <tr><td className="row_css">email</td><td><h6>{profileData.email}</h6></td></tr>
                        <tr><td /><td className="row_css">bio</td><td><h6>{profileData.bio}</h6></td></tr>
                    </tbody>
                </table>
            }
        </div>
    );
}
export default Profile;