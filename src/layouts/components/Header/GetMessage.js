const accessToken = 'ngj5ThhHINVAgqT-ijr9Ti-WHdErm14lZC1GI_AsMmdfd11jwh5I3fE9E7Y-et0XefenV97iKmc7oHncd-HY6gByFtpSy7KqtkOOVTNULHAhtHjhYCT17RdW26o0-mPfeV98DTloNIZ_oI9EtlLl4g3GBtYFrsOXzUW7PlRCV3lsjYjTnvDX5R-N7NUUiKi2dOaH1g7qGdASWWqKveG649cxKNEymJCGlRb7MQk05Iw6Wbz_lve67wUYSc2asneMlC15TxdY2mQyv49mkTqISg7oVWojyo5vtSifBywtS2VWgYHwox5zCCYr9rF8aaa7ieK33yckK4cvao0LnufhThZm9N38rsSGqy0mSAFgF0s5-rjGM4P9JZWmkyjFT0'; // Thay thế bằng access token của bạn
const offset = 0; // Giá trị offset
const count = 5; // Số lượng tin nhắn cần lấy

// Xây dựng URL với tham số dữ liệu
const url = `https://openapi.zalo.me/v2.0/oa/listrecentchat?data=${encodeURIComponent(JSON.stringify({ offset, count }))}`;

// Gửi yêu cầu GET đến API
fetch(url, {
    method: 'GET',
    headers: {
        'access_token': accessToken,
        'Content-Type': 'application/json',
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Recent Messages:', data);
})
.catch(error => {
    console.error('Error fetching recent messages:', error);
});
