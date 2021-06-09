const got = require('got');
const companyProfile = 'https://finnhub.io/api/v1/stock/profile2?token=bsfme6vrh5ran23jnul0';

const finnhubService = {};

finnhubService.getStockProfile = async (symbol) => {        
    try {
        const companyUrl = `${companyProfile}&symbol=${symbol}`;
        const response = await got(companyUrl, { json: true });
        return response.body;

    } catch (e) {
        console.log(e);
    }
};

module.exports = finnhubService;