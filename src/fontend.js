import { render, useEffect, useState } from '@wordpress/element';

const BiblioCarouselApp = () => {
    const [bookDetails, setBookDetails] = useState({ title: '', author: '' });

    useEffect(() => {
        wp.apiFetch({ path: '/biblio-carousel/v1/book-details' })
            .then((data) => setBookDetails(data))
            .catch((error) => console.error('Error fetching book details', error));
    }, []);

    return (
        <div>
            <h1>{bookDetails.title}</h1>
            <h2>{bookDetails.author}</h2>
        </div>
    );
};

const elements = document.querySelectorAll('.biblio-carousel-container');

elements.forEach(element => {
    render(<BiblioCarouselApp />, element);
});
