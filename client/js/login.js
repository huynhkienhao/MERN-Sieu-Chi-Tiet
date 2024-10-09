const handleLogin = async () => {
    // 1. Lấy giá trị trên form register
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 2. Gửi giá trị từ client đến server
    const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password
    })

    if (response.status == 200) {

    }
}