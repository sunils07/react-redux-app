import "./home.page.scss";

import React, { useEffect } from "react";
import { array, bool, func } from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import PostCard from "../../components/post-card/post-card";

import { userApi } from "../../lib/redux/modules/user/user.api";
import { userPostApi } from "../../lib/redux/modules/user-post/user-post.api";

import {
    USERS_API_URL,
    USER_POSTS_API_URL
} from "../../constants/api-urls.constant";


function HomePage(props) {
    const history = useHistory();

    useEffect(() => {
        props.userApi(USERS_API_URL, "get")
            .then(() => {
                props.userPostApi(USER_POSTS_API_URL, 'get');
            });
    }, []);

    function onPostClick(link, post) {
        history.push(link, post);
    }

    function onUserNameClick(link, post) {
        history.push(link, post);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="home-page">
                        <div className="page-header">
                            <h2 className="page-title">Posts</h2>
                        </div>
                        <div className="post-cards">
                            <PostCard
                                items={props.userPosts}
                                usersMap={props.usersMap}
                                onUserNameClick={onUserNameClick}
                                onPostClick={onPostClick}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

HomePage.propTypes = {
    userPosts: array.isRequired,
    loading: bool.isRequired,
    userPostApi: func.isRequired
};

const mapStateToProps = (state) => {
    return {
        users: state.User.list,
        usersMap: state.User.map,
        userPosts: state.UserPost.list,
        loading: state.UserPost.requesting,
    }
}

const mapDispatchToProps = (props) => {
    return bindActionCreators({
        userApi,
        userPostApi
    }, props);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);