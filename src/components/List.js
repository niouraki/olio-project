import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component {
  state = {
    list: [],
    idList: []
  }
  changeStyle(id) {
    this.setState({
      idList: [...this.state.idList, id]
    })
    console.log(this.state.idList)
  }
  componentDidMount() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles.json`)
      .then(res => {
        this.setState({
          list: res.data
      });
    })
  }
  render() {
      const postList = this.state.list.map(post => {
          return(
              <div key={post.id} className="post">
                <h2 onClick={this.changeStyle.bind(this, post.id)} className="list-title">{post.title} <span className={this.state.idList.includes(post.id) ? "seen" : "not-seen"}>&#x2714;</span></h2>
                <img src={post.photos[0].files.large} alt={post.title} className="list-photo"/>
                <p className="list-location">{post.location.town}, {post.location.country}</p>
                <Link to={'/' + post.id}><button className="list-btn">Learn more &rarr;</button></Link>
              </div>
          )
      })
    return(
        <div className="grid">{postList}</div>
    );
  }
}

export default List;