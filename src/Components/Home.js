import React from 'react';
import Detail from "./Detail";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featureItem: {},
            showDetail: false
        }
    }
    onItemClick = async (item, e) => {
        e.preventDefault();
        await this.setState({ ...this.state, featureItem: item, showDetail: true });
    }
    timeConversion = (time) => {
        var date = new Date(time);
        return date.toISOString();
    }
    render() {
        return (
            <div className="home_div">
                {this.state.showDetail &&
                    <Detail featureItem={this.state.featureItem} />
                }
                { !this.state.showDetail && this.props.featureCollectionData && <div>
                    <h3>{this.props.featureCollectionData.metadata.title}</h3>
                    <table><thead>
                        <tr className="align_center">
                            <th><h5>Place</h5></th>
                            <th><h5>Magitude</h5></th>
                            <th><h5>Time</h5></th>
                        </tr>
                    </thead>
                        {this.props.featureCollectionData.features.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr key={item.properties.id}>
                                        <td><a href="/Detail_Page" onClick={(e) => this.onItemClick(item, e)}><h6>{item.properties.place}</h6></a></td>
                                        <td><h6>{item.properties.mag}</h6></td>
                                        <td><h6>{this.timeConversion(item.properties.time)}</h6></td>
                                    </tr>
                                </tbody>
                            );
                        })
                        }
                    </table>
                </div>}
            </div>
        );
    }
}
export default Home;