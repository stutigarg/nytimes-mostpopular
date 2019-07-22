import React from 'react';
import Loader from "../../../util/Loader";

const ArticleDetail = ({article}) => {
  return ( article ?
      <iframe src={article.url}
              allowFullScreen
              title={article.title}
              frameBorder="0"
              position="relative" height="100%" width="100%"/>
              : <div><Loader/></div>
  );
}

export default ArticleDetail;
