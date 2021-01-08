import React from 'react';
const Detail = ({ featureItem }) => {
    return (
        <div className="detail_div">
            {featureItem ?
                <div>
                    <h3 className="align_center">{featureItem.properties.title}</h3>
                    <table className="detail_table">
                        <tbody>
                            <tr><td className="row_css">Place</td><td><h6>{featureItem.properties.place}</h6></td></tr>
                            <tr><td className="row_css">Magnitude</td><td><h6>{featureItem.properties.mag}</h6></td></tr>
                            <tr><td className="row_css">time</td><td><h6>{featureItem.properties.time}</h6></td></tr>
                            <tr><td className="row_css">status</td><td><h6>{featureItem.properties.status}</h6></td></tr>
                            <tr><td className="row_css">tsunami</td><td><h6>{featureItem.properties.tsunami}</h6></td></tr>
                            <tr><td className="row_css">type</td><td><h6>{featureItem.properties.type}</h6></td></tr>
                        </tbody>
                    </table>
                </div>
                : null}
        </div>
    );
}
export default Detail;