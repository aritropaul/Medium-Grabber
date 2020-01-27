import React from 'react'
import './Articles.css';
import '../normalize.css';
import '../skeleton.css';

const Description = ({ content }) => {
    if (content !== undefined){
        var parser = new DOMParser();
        let el = parser.parseFromString(content, 'text/html');
        var desc = el.getElementsByTagName('p')[0].textContent;
        console.log(desc)
        return (<div className="content">{desc}</div>)
    }
    else {
        return (<div></div>)
    }
}

const Image = ({ content }) => {
    if (content !== undefined){
        var parser = new DOMParser();
        let el = parser.parseFromString(content, 'text/html');
        var imgSrc = el.getElementsByTagName('img')[0].src;
        console.log(imgSrc)
        return (<img className="preview" src={imgSrc} alt="" width="80%" height="50%"></img>)
    }
    else {
        return (<div></div>)
    }
}

const Articles = ({ articles }) => {
    
    return(
        <div className="row">
            {articles.map((article) => (
                <a href = {article.link}>
                    <div className="card six columns" key={Math.random()}>
                        <Image content={article["content:encoded"]}></Image>
                        <h1 className="title">{article.title}</h1>
                        <Description content={article["content:encoded"]}></Description>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Articles