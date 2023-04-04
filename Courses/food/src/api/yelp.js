import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer vLDdF6oAQNHz_KvkvW93dRo_2sEhaVjdo4Uib2n8Qu1DTQeE3N4qGNcxWExZcExrS8aQR0ZyGol3k4WZU2_Me3wduKDZjGupn8iDXYcoJ4s6n5Qs5hzheX9P1PYqZHYx'
    }
});
