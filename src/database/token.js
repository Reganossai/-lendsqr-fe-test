export const getUserToken=()=>{
    return localStorage.getItem('user-token')
}

export const saveUserToken=(token)=>{
    return localStorage.setItem('user-token', token)
}