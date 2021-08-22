const axios = require("axios");

class Client {
  address = 'https://api.m3o.com/';
  constructor({token}){
      this.token = token;
  }
  call (service, endpoint,req){
    return new Promise((resolve,reject)=>{
      try{
        if (req === undefined || req === null) {
            req = {};
        }
    
        const headers = {};
        if (this.token) {
          headers['authorization'] = 'Bearer ' + this.token;
        }

        const options = {
          method: 'post',
          //json: true,
          responseType: 'json',
          headers: headers,
          data: req,
          url: this.address + 'v1/' + service + '/' + endpoint,
        };

        return axios
        .default(options)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          if (error.response) {
            reject(error.response.data);
            return;
          }
          reject(error);
        });

      }catch(err){
        reject(err);
      }
    });
  }
}

module.exports = Client;