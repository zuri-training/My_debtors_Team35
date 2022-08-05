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
            numVisible: 3,
            numScroll: 3
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
        reviewService.getReviews().then(data => setReviews(data.slice(0, 3)));
    }, []);


    const reviewTemplate = (review) => {
        
        const header = (
            <img className='border-round-md' alt="Card" src={review.image} onError={(e) => e.target.src='/assets/images/default.jpg'} />
        );
        const footer = (
            <span>
                <Rating 
                readOnly={true} cancel={false} value={review.rating} />
            </span>
        );

        return (
            <Card className="border-round-md" title={review.name} style={{ width: '25em' }} footer={footer} header={header}>
                <p className="m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        );

    }

    return (

        <div id="home-reviews" className="surface-0 text-center px-4 md:px-8 my-8">
            <div className="mb-3 font-bold text-2xl mb-6">
                <span className="text-900">Check out reviews</span>
            </div>
            {/* add carousel */}
            <Carousel value={reviews} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={5000} itemTemplate={reviewTemplate} />

        </div>


    );
}

export default CustomerReviews;