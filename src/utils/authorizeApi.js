class AuthorizeApi {
    constructor(options) {
        this._options = options;
    }
       
    _checkResponse(request) {
      return  request.then((res) => {
            res.headers["Access-Control-Allow-Origin:"] = "*";
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })  
    }

    signUp(data) {
        const request = fetch(this._options.baseUrl + 'signup', {  
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email,
                name: data.name
            })
        });
        
        return this._checkResponse(request)
    }

    signIn(data) {
        const request = fetch(this._options.baseUrl + 'signin', {  
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                password: data.password,
                email: data.email
            })
        });
        
        return this._checkResponse(request)
    }

    getCurrentUser(jwt) {
        const request = fetch(this._options.baseUrl + 'users/me', {
            method: 'get',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
        });
        return this._checkResponse(request)
    }
} 



 const authorizeApi = new AuthorizeApi({
    // baseUrl: 'https://auth.nomoreparties.co/',
    baseUrl: 'https://api.movies.kolomeytsev.nomoredomains.xyz/',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default authorizeApi;