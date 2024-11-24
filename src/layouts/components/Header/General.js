
const axios = require('axios');
const qs = require('qs');

const appId = '2254419469186843753'; // ID của ứng dụng
const redirectUri = 'http://localhost:5678/'; // URL callback đã được cấu hình
const codeChallenge = 'NuhbgPrXMv3F2WAYVwinA9iRdLkZR9-jhXFxkG57W4I'; // Code challenge đã tạo ở bước 2
const state = '738e8a0b9ee32187513411c804cd4fd7'; // Biến state để chống CSRF

const requestData = {
    code: 'OveaFdbUktDEloSfNLQDIL21FGWISh5A68bACcDGtcn8f5KNIq32GLQhPMXWVEajAuTdQIHwdIuKc0vDFMg9CJo846ihORiY2Ru2Trfsk3HIZ4H40b72AYwW75mbI8SDCgul07n5h1OywtDTCHQ5BtkEUHzGCUPuVAmdO34SrMWpzq8hO1IhCpAw2WunOzmE2v1JRWfxtIm-itLnA4sqD6-lAWGZ5OWh18boD7S_ubewy68BA0pKAKs681OIRV8EHS8S0r1OxpXZkXCU80NG6IleJaCcThSnKvrQ8GasvWAv_NmJnrWZNEs8Z1v9LI9rH8-QAmO4BbeExkaHVXDHHYJTxW0r2aFKAVowdG8Y0pTibS16K5yEBN7cmLek02mnIuxRTJfu33HOZ-KMQnDu8dEBapnUMIOWIRHK5ssyQW',
    app_id: appId,
    grant_type: 'authorization_code',
    code_verifier: '95pIOHiDMHSnoj25hvXj8btaenDIbdp730VlAddPlB9',
};

axios.post('https://oauth.zaloapp.com/v4/access_token', qs.stringify(requestData), {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'secret_key': '9cdnSXCtxJRXmFbSdDEI',
    },
})
.then(response => {
    console.log('Access Token:', response.data);
})
.catch(error => {
    console.error('Error fetching access token:', error.response ? error.response.data : error.message);
});


// https://oauth.zaloapp.com/v4/permission?app_id=2254419469186843753&redirect_uri=http://localhost:5678/&code_challenge=NuhbgPrXMv3F2WAYVwinA9iRdLkZR9-jhXFxkG57W4I&state=738e8a0b9ee32187513411c804cd4fd
// Access Token: {
//     access_token: 's-sNPz6oh4hNxPLlsRwiIzBcb6BUezO9i_g6Nzh4yIsJtAb8cz2IBlRhf0IG-jXXnSAXA8EPcMRoYk0K_uoRG8oYkN7v_l0ycTIvRFFJwIQFoPnvWF2Y0kdgtd-4mwihy-p86fRJyr3xwyq1ykllIxZ1lmF0-lTFeFsWPwoxsp3gdhP7awtwBEc-escrfDyWuvk8Iup8nYBnxxzcXBR6IjwvgpopaFHZzCgvIltMs2QDnAHJsSwODRJdnah_phmZiPN4Qzgv-2Q1dv0NxPthKxR7jX33ziuziFwCOFNZrXg0sv0ty8Jv7RQPhtJ1eEyXbeUoJiwVa26zagX-qgla6BBqtt3yxBqrih_01CQykIgXXy5ZLpS_QmySqAYgIG',
//     refresh_token_expires_in: '2592000',
//     refresh_token: 'Y0vhBi1GzN-43caco5prVe45Q2lFGV4Fod4ODuHFXIEOVG9krNNiIkDv0Lh19ePjz3HQHUikkqpG4oCUrIsy3EjmOph1GFapxne0FVOPnXM_0m90abtcIen721sZ0EipxZqoA-eTgcRbFL8srcMV7CPQJH_9KQCxuLyz5QXPmnVWNresw435ETf19cxDO-vw_si5K_XPuWUtK0Clhq3d5wHy04-HOUPUf7nyTf5JlsM_L419et2fMhbhLNRnDBPUwWzHIAGAb5ky0rnH-1E1QFSzJqNe2Avrp10nJ-SysLsl4Ge5uYdY7Snm0KsSByX2gHC9JuS0ydkuF1bfysEAKzfSRNhtRgeku75M9V1KitLzQgfWmKhpV0',
//     expires_in: '3600'
//   }