import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PostDetail extends Component {
    render() {
        if(!this.props.postActive) {
            return <div>Please select a post.</div>
        }

        return (
            <div className="col-md-6">
                <h1>{this.props.postActive.title}</h1>
                <p>
                {this.props.postActive.body}
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        postActive: state.postActive
    };
}

export default connect(mapStateToProps)(PostDetail);