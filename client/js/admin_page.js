
getListUser = async () => {
    try {
        const configHeader = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        // Call API get list users
        const response = await axios.get('http://localhost:5000/auth/admin/user', configHeader);
    } catch (error) {
        // 1. Call refresh token
        // 2. Token expired -> redirect to admin
    }

}

getListUser();