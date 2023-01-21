import React from 'react'

const NewsItem =(props)=> {
  
    let{title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-4'>
        <div className="card">
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className=" badge rounded-pill" style={{backgroundColor:"#0E5E6F"}}>{source}</span>
        </div>
          <img src={!imgUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230109205307-rock-n-play-sleeper-recall-010923.jpg?c=16x9&q=w_800,c_fill":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body" style={{backgroundColor:"#eaf2f3"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark" style={{backgroundColor:"#0E5E6F", border:"0"}}>Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
