import React from 'react';

class Candidate extends React.Component {

    render() {
        return (
            <div className="container">
                <img src={this.props.image} />
                <h3>{this.props.name}</h3>
                <p>{this.props.profile}</p>
            </div>
        );
    }
};

export default Candidate;
