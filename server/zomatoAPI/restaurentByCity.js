const apiKEY = 'f6a6c7351e460f3f4e3011a79a960e5c';
var request = require('request-promise');

const location =  (queryString)=>{
    var options = {
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city",
        headers: {
          'user-key': apiKEY,
          'Content-Type': 'application/json'
        }
      };
    return new Promise( (resolve, reject) =>{
        request(options)
            .then(function (data) {
                resolve(JSON.parse(data))
            })
            .catch(function (err) {
                // API call failed...
                reject(err);
            });
    })
}

module.exports = location;