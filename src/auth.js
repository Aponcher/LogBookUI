export function saveAuthToken(token) {
    localStorage.setItem('token', token)
}

export function getAuthToken() {
    return localStorage.getItem('token')
}

export function logout() {
    localStorage.removeItem('token')
}
