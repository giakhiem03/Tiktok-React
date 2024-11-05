const axios = require('axios');

const accessToken = 'ngj5ThhHINVAgqT-ijr9Ti-WHdErm14lZC1GI_AsMmdfd11jwh5I3fE9E7Y-et0XefenV97iKmc7oHncd-HY6gByFtpSy7KqtkOOVTNULHAhtHjhYCT17RdW26o0-mPfeV98DTloNIZ_oI9EtlLl4g3GBtYFrsOXzUW7PlRCV3lsjYjTnvDX5R-N7NUUiKi2dOaH1g7qGdASWWqKveG649cxKNEymJCGlRb7MQk05Iw6Wbz_lve67wUYSc2asneMlC15TxdY2mQyv49mkTqISg7oVWojyo5vtSifBywtS2VWgYHwox5zCCYr9rF8aaa7ieK33yckK4cvao0LnufhThZm9N38rsSGqy0mSAFgF0s5-rjGM4P9JZWmkyjFT0'; // Thay thế bằng access token của bạn

async function getUserInfo() {
    try {
        const response = await axios.get(`https://graph.zalo.me/v2.0/me`, {
            params: {
                access_token: accessToken,
            }
        });

        // Xử lý thông tin người dùng
        const userId = response.data.id; // Lấy userId
        console.log('User ID:', userId);
        console.log('User Info:', response.data); // Xem toàn bộ thông tin người dùng

    } catch (error) {
        console.error('Error fetching user info:', error.response.data);
    }
}

getUserInfo();
Hàm tạo code verifier ngẫu nhiên
