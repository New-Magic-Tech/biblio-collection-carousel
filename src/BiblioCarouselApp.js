import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const BiblioCard = ({ bookData }) => {
    return (
        <a className='result-link' href={bookData.link}>
            <div className='result-card-wrapper'>
                <img className='result-img' src={bookData.img_url} alt={bookData.title}/>
                <h6 className='result-title'>{bookData.title}</h6> 
            </div>
        </a>
    );
}

export default function BiblioCarouselApp() {
    const [bookDetails, setBookDetails] = useState([]);
    const [collection, setCollection] = useState('');
    const [resultStart, setResultStart] = useState(0)
    const [resultsToDisplay, setResultsToDisplay] = useState([])

    const trimArrayToFiveItems = (array) => {
        return array.slice(resultStart, resultStart + 5);
    }

    useEffect(() => {
        const carouselBlock = document.querySelector('.biblio_carousel_block');
        if (carouselBlock) {
            setCollection(carouselBlock.dataset.collection);
        }
    }, []);

    useEffect(() => {
        if (collection) {
            const queryParams = new URLSearchParams({
                collection: collection
            });
            
            apiFetch({ path: `/biblio-carousel/v1/book-details?${queryParams.toString()}` })
                .then((data) => {
                    setBookDetails(data);
                })
                .catch((error) => {
                    console.error('Error fetching book details', error);
                });
        }
    }, [collection]);

    useEffect(()=>{
        setResultsToDisplay(trimArrayToFiveItems(bookDetails))
    }, [bookDetails])

    const carouselLeft = () =>{
        if (resultStart !==0){
            setResultStart(prev=>prev-1)
            setResultsToDisplay(trimArrayToFiveItems(bookDetails))
        }
    }

    const carouselRight = () =>{
        if (resultStart < bookDetails.length-5){
            setResultStart(prev=>prev+1)
            console.log(resultStart)
            setResultsToDisplay(trimArrayToFiveItems(bookDetails))
        }
    }

    return (
        <div className='carousel-wrapper'>
            <button className='carousel-button' onClick={carouselLeft}>
                <span style={{'font-size':'100px'}}>&#8678;</span>
            </button>
            <div className='results-container'>
                {resultsToDisplay.map((book, index) => (
                    <BiblioCard key={index} bookData={book} />
                ))}
            </div>
            <button className='carousel-button' onClick={carouselRight}>
                <span style={{'font-size':'100px'}}>&#8680;</span>
            </button>
        </div>
    );
}
