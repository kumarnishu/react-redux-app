import React, { Component } from 'react';
import './form.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import  {createPost} from '../actions/postAction';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            body:''
         };
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
        
       this.props.createPost(post)
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    Title : <br/>
                    <input type="text" onChange={this.onChange} name="title" value={this.state.title}/>
                </div><br/>
                <div>
                    Body : <br/>
                    <input type="text" onChange={this.onChange} name="body" value={this.state.body}/>
                </div><br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
PostForm.propTypes={
    createPost:PropTypes.func.isRequired
}
export default connect(null,{createPost})(PostForm);