import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import nytimes from "../../network";
import Loader from '../../util/Loader';
import {Config} from "../../.env";
import './Article.css';

class Article extends Component {

    state = {
        articles: [],
        selectedArticle: null,
        error: null
    }

    renderArticleDetails = (article) => {
        const currentArticle = {...this.state.selectedArticle};
        const articles = this.state.articles;
        articles.find(article => article.id === currentArticle.id).selected = false;
        article.selected = true;
        this.setState({articles: articles, selectedArticle: article})
    }

    componentDidMount() {
        this.getArticles(this.props.period);
    }

    getArticles = (period: Number) => {
        nytimes.articles(period)
            .then(result => {
                result[0].selected = true;
                this.setState({
                    articles: result,
                    selectedArticle: result[0]
                })
            })
            .catch(error => {
                this.setState({articles: [], error: error});
            });
    };

    render() {
        if (this.state.error) {
            throw this.state.error;
        }
        const loading = !this.state.error && this.state.articles.length === 0;
        const spinner = <Loader/>
        let detailedView = <ArticleDetail article={this.state.selectedArticle}/>
        let listView = loading ? spinner : <ArticleList articles={this.state.articles} onSelectHandler={this.renderArticleDetails}/>

        let data = 
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col className="detailedView"sm={8}>{detailedView}</Col>
                        <Col className="listView" sm={4}>{listView}</Col>
                    </Row>
                </Container>
            </div>

        return data;
    }

}
Article.defaultProps = {
    period: Config.PERIOD
}

export default Article;
