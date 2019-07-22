import axios, {AxiosPromise} from 'axios';
import Article from "../model/Article";
import {Config} from '../.env';

const api = axios.create({
    baseURL: 'https://api.nytimes.com/svc/',
    params: {
        'api-key': Config.NYTIMES_API_KEY
    }
})

function mostViewedArticles(period: Number) : AxiosPromise<Article[]> {
    return api.get('/mostpopular/v2/mostviewed/all-sections/' + Math.max(0, period) + '.json', {params: {}})
        .then(result =>
             result.data.results.map((article) => new Article(article))
        )
}

export default { articles: mostViewedArticles }