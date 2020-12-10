import "./post-card.scss";

import React from 'react';
import { arrayOf, shape, number, string, any } from 'prop-types';
import { Link } from 'react-router-dom';
import Avtar from '../../images/avtar.png';
import AppCard from "../app-card/app-card";

export default function PostCard({ items, usersMap, onPostClick, onUserNameClick }) {
    return items.map((item) => {
        let user = usersMap.get(item.userId);

        return (
            <div key={item.id}
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onPostClick(`/post/${item.userId}/${item.id}`, { ...item, user: user }, e);
                }}>
                <AppCard>
                    <img src={item.profilUrl || Avtar} className="avtar" alt="user" />
                    <div className="post-card-info">
                        <div>
                            <Link to="#" onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                onUserNameClick(`/user/${item.userId}`, { ...item, user: user }, e);
                            }} className="title">
                                {user.username}
                            </Link>
                        </div>
                        <label className="subtitle">{item.title}</label>
                    </div>
                </AppCard>
            </div>
        );
    });
}

PostCard.propTypes = {
    items: arrayOf(shape({
        id: number.isRequired,
        userId: number.isRequired,
        title: string.isRequired,
        body: string.isRequired,
        profilUrl: any
    })).isRequired,
};