
import './Films.css'

function Films(props){

    const {title,opening_crawl,release_date,director,producer} = props.filmsState;

    return(
        <div>
            <p className="title">{title}</p>
            <p>Opening Crawl: {opening_crawl}</p>
            <p>Release Date: {release_date}</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            
        </div>
    )

}

export default Films;