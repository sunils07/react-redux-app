import "./user.page.scss";

import React, { useEffect } from "react";
import { array, bool, func, any } from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import AppCard from "../../components/app-card/app-card";

import { userApi } from "../../lib/redux/modules/user/user.api";

import {
    USERS_API_URL,
} from "../../constants/api-urls.constant";


function UserPage(props) {
    let params = useParams();
    let user = props.usersMap.get(parseInt(params.id));

    useEffect(() => {
        props.userApi(USERS_API_URL, 'get');
    }, []);

    return (
        <Container>
            <Row>
                {user && <Col>
                    <h2 className="page-title">
                        <Link to="/">Back</Link>
                    </h2>
                    <div className="page-header">
                        <h2 className="page-title">User details</h2>
                    </div>
                    <AppCard>
                        <div>User Name: @{user.username}</div>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Website: {user.website}</div>
                        <h4>Company</h4>
                        <div>Name: {user.company.name}</div>
                        <div>Catch Phrase: {user.company.catchPhrase}</div>
                        <div>BS: {user.company.bs}</div>
                    </AppCard>
                </Col>}
            </Row>
        </Container>
    );
}

UserPage.propTypes = {
    userApi: func.isRequired,
    usersMap: any.isRequired,
    users: array.isRequired,
    loading: bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        users: state.User.list,
        usersMap: state.User.map,
        loading: state.UserPost.requesting,
    }
}

const mapDispatchToProps = (props) => {
    return bindActionCreators({
        userApi
    }, props);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);