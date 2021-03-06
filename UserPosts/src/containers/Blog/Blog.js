import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state ={
        posts:[],
        selectedPostId:null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            // console.log(res);
            this.setState({posts:res.data});
        });
    }
    postClickHander(id){
        this.setState({selectedPostId:id})
    }
    render () {
        const posts = this.state.posts.slice(0,8).map(post=>{
           return <Post 
           key={post.id} 
           title={post.title}
           clicked={()=>this.postClickHander(post.id)}
            />

        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;