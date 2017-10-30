import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, selectPost } from '../actions/index';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        return (
            <div className="col-md-6">
                <ul className="list-group">
                {this.props.post.map((postData) => 
                    postData.map((post, index) =>
                        <li key={index} 
                            className="list-group-item"
                            onClick={() => this.props.selectPost(post)}>
                        {post.title}
                        </li>
                    )
                )}
                </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPost, selectPost: selectPost }, dispatch);
}

function mapStateToProps(state) {
    return {
        post: state.post
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);