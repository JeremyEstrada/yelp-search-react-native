import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer W9PXK8PlQDeRr1onmQGlt3qsXQIFUV7tEsfmmlWmDrsWTdj0FUSq05pTyWVFoxOagt-u9fS-w3oI2Zl-1WHk1OdFMxxS2Ss7oJCnRF3XYFwxBozN62-31gaXknj6XnYx'
    },
});
