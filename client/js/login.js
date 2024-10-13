const handleLogin = async () => {
    // 1. Lấy giá trị trên form register
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 2. Gửi giá trị từ client đến server
    const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password
    })
    console.log(response);
    if (response.status == 200) {
        const accessToken = response.data.accessToken;
        // Decode để lấy ra thông tin Payload
        const payloadDecoded = jwt_decode(accessToken);

        // Lấy quyền
        if (payloadDecoded.role === 'regular') {
            window.location.href = '/home_page.html';
        } else {
            window.location.href = '/admin_page.html';
        }

        // Save accessToken to Client
        localStorage.setItem('access_token', accessToken);
    }
}