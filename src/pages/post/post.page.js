import "./post.page.scss";

import React, { useEffect } from "react";
import { array, bool, func, any, object } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import AppCard from "../../components/app-card/app-card";

import {
    userPostApi,
    userPostCommentApi
} from "../../lib/redux/modules/user-post/user-post.api";

import {
    userApi
} from "../../lib/redux/modules/user/user.api";

import {
    USERS_API_URL,
    USER_POSTS_API_URL,
    USER_POST_COMMENTS_API_URL
} from "../../constants/api-urls.constant";

function renderComments(comments) {
    return comments.map((comment) => {
        return (
            <div className="spacer-3">
                <AppCard key={comment.id}>
                    <p><b>Name</b></p>
                    <p>{comment.name}</p>
                    <p><b>Body</b></p>
                    <p>{comment.body}</p>
                    <p><b>Email</b></p>
                    <p>{comment.email}</p>
                </AppCard>
            </div>
        );
    });
}

function PostPage(props) {
    let params = useParams();
    let user = props.usersMap.get(parseInt(params.userId));

    useEffect(() => {
        props.userApi(USERS_API_URL, 'get');
        props.userPostApi(`${USER_POSTS_API_URL}/${params.id}`, 'get');
        props.userPostCommentApi(`${USER_POST_COMMENTS_API_URL}`.replace(":postId", params.id), 'get');
    }, []);

    return (
        <Container>
            <Row>
                {props.post && <Col>
                    <h2 className="page-title">
                        <Link to="/">Back</Link>
                    </h2>
                    <div className="page-header">
                        <h2 className="page-title">Post details</h2>
                    </div>
                    <AppCard>
                        {user && <p>@{user.username}</p>}
                        <p><b>Title</b></p>
                        <div>{props.post.title}</div>
                    </AppCard>
                    <h4 className="spacer-3"> Comments</h4>
                    {renderComments(props.comments)}
                </Col>}
            </Row>
        </Container>
    );
}

PostPage.propTypes = {
    userPostApi: func.isRequired,
    userApi: func.isRequired,
    userPostCommentApi: func.isRequired,
    userPosts: array.isRequired,
    comments: array.isRequired,
    post: object.isRequired,
    usersMap: any.isRequired,
    loading: bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        userPosts: state.UserPost.list,
        comments: state.UserPost.comments,
        post: state.UserPost.data,
        usersMap: state.User.map,
        loading: state.UserPost.requesting,
    }
}

const mapDispatchToProps = (props) => {
    return bindActionCreators({
        userPostApi,
        userPostCommentApi,
        userApi
    }, props);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);