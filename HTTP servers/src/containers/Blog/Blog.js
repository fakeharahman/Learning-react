import React, { Component } from 'react';
// import Post from '../../components/Post/Post';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
// import axios from 'axios'
import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost'
// import FullPost from './FullPost/FullPost'

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})
class Blog extends Component {

    state = {
        auth: true
    }

    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => (<Posts />)} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts/" component={Posts} />
                    {/* <Route render={() => <h1>Not Found!</h1>} /> */}
                    <Redirect from="/" to="/posts/" />

                </Switch>



                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;