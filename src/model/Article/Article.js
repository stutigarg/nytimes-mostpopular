class Article {

  /**
   * Constructs an own copy of article, with relatively few attributes, combined with custom attributes.
   *
   * @param article Article from NYTimes API
   */
  constructor(article) {
    this.id = article.id;
    this.url = article.url;
    this.title = article.title.replace('; ', '\n');
    this.summary = article.abstract.replace('; ', '\n');
    this.publishedOn = article.published_date;
    this.image = article.media[0]["media-metadata"][1].url;
    this.author = article.byline;

    this.selected = false;
  }

}

export default Article;
