import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        apiKey: PropTypes.string,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        console.log("Hello, I am a constructor from news component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
    }
    // pageSize = 20;

    async updateNews(pageNo) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData); 
        this.setState({
            page: pageNo,
            articles: parseData.articles,
            loading: false,
            totalResults: parseData.totalResults
        })
    }

    async componentDidMount() {
        console.log("kutta2");
        this.updateNews(this.state.page);
    }

    handleNextClick = async () => {
        // console.log("Next");
        this.updateNews(this.state.page + 1);
    }

    handlePrevClick = async () => {
        // console.log("Previous");
        this.updateNews(this.state.page - 1);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData); 
        this.setState({
            page: this.state.page,
            articles: this.state.articles.concat(parseData.articles),
            // loading: false,
            totalResults: this.state.totalResults+parseData.totalResults
        })
    };

    render() {
        // console.log("kutta");    
        return (
            <>
                <h1 className='text-center' style={{ margin: "35px" }}>NewsMonkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                ><div className='container'>
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })};
                        </div></div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News 
