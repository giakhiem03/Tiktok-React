const axios = require('axios');
const qs = require('qs');

const url = 'https://oauth.zaloapp.com/v4/oa/access_token';

const data = qs.stringify({
  refresh_token: 'Z5l51UOrFsE0MySDxZa_OeLGnW3f934zqX-fCkTy15B1P9L0obWTPgDfctco0GfbjJQNOfmU37Q988eJcaCbSOvpdKghGc5lmYxw2_aJNowMEzejXIzOFwaFn2EGPdCvZ4R78OTTJGJhRz1YWsnyUArI_4N3Vt1KrNJsIDDuLsxsLjjFxMLNVkDrrKhuG7n4dqdHG_bCM2BZHASy-LeS1fStXocf1XiIl6lYA8rRTW-LCDSDYLvRAxL1h4gQQHjmfmM0PfrcUdMXRurDfc4o8yXFoaJuBKrsqJ3aJFmhOtppCzj8uGeWLOSpWcoH8nfTh1kIQR433rUfBgDZdqGgJV5BgLF-8Inzo1IsPCuOA6HVMivNvoyvO0',
  app_id: '2254419469186843753',
  grant_type: 'refresh_token'
});

const config = {
  method: 'post',
  url: url,
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'secret_key': '9cdnSXCtxJRXmFbSdDEI'
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
