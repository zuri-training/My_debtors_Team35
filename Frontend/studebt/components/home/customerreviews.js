import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';
import { ReviewService } from '../../services/ReviewService';


function CustomerReviews(props) {

    const [reviews, setReviews] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 4
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const reviewService = new ReviewService();

    useEffect(() => {
        reviewService.getReviews().then(data => setReviews(data.slice(0, 4)));
    }, []);


    const reviewTemplate = (review) => {

        const header = (
            <img className='border-round-md' alt="Card" src={review.image} onError={(e) => e.target.src = '/assets/images/default.jpg'} />
        );
        const footer = (
            <span>
                <Rating
                    readOnly={true} cancel={false} value={review.rating} />
            </span>
        );

        return (
            <div key ={review.id} className="col-12 my-4 md:col-3 px-4">
                <Card className="border-round-md" title={review.name} footer={footer} header={header}>
                    <p className="m-0" style={{ lineHeight: '1.5' }}>{review.review}</p>
                </Card>
            </div>
        );

    }

    return (

        <div id="home-reviews" className="surface-0 text-center px-4 md:px-8 my-8">
            <div className="mb-3 font-bold text-2xl mb-6">
                <span className="text-900">Check out reviews</span>
            </div>

            {/* for columns for cards */}
            <div className="grid grid-nogutter surface-0 text-800">
                {reviews.map(review => reviewTemplate(review))
                }

            </div>


        </div>


    );
}

export default CustomerReviews;