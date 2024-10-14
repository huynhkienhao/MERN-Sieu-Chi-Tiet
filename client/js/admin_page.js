
getListUser = async () => {
    try {
        const configHeader = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        // Call API get list users
        const response = await axios.get('http://localhost:5000/auth/admin/user', configHeader);
        showListUser(response);
    } catch (error) {
        // 1. Call refresh token
        // 2. Token expired -> redirect to admin
    }

}

showListUser = (response) => {
    let htmlUser = `<table class="table table-hover text-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>`;
    response.data.forEach((user, index) => {
        htmlUser += `<tr>
                        <td>${index + 1}</td>
                        <td>${user.username}</td>
                        <td>${user.role}</td>
                        <td>${user.email}</td>
                        <td>
                            Delete
                        </td>
                    </tr>`;
    });
    htmlUser += `   </tbody>
                </table>`;
    document.querySelector('.list_user').innerHTML = htmlUser;
}

getListUser();
