import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
                                {source}</span>
                            <span class="visually-hidden">unread messages</span>
                    <img src={!imageUrl ? "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            
                        </h5>
                        <p className="card-text">{description}</p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
