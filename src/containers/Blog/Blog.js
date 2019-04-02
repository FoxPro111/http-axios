import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {
    render() {
        return (
            <div>
                <header className="Header">
                    <ul>
                        <li><NavLink
                            to="/"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: 'red'
                            }}
                        >Main</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                        {/* <li><Link to={{
                            pathname: '/new-post',
                            hash: '#anchor',
                            search: '?post_id=13'
                        }}>New Post</Link></li> */}
                    </ul>
                </header>
                {/* <Route path="/" exact render={() => <Posts />} />
                <Route path="/new-post" render={() => <NewPost />} /> */}

                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/" exact component={Posts} />
                    <Route path="/:id" exact component={FullPost} />
                    <Route render={() => <h1>Page not found!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;