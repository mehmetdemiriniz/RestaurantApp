import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vTjjnRtX9CdIIwpR62NDtBmWPlTUn6nSG4vs-PLhFj9hYYNp8pgUspQsDwZ_LrT0jTR_xetTyIaJkZDzLmfvKbiXsKhNkV89ZgNSRZTKBD4OklkYzQtMVE4C6uOVZXYx'
    }

});