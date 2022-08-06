export class ReviewService {

    getReviews() {
        return fetch('/data/reviews.json').then(res => res.json()).then(d => d.data);
    }

}