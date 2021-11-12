export class Api {
    constructor(options) {
        this._options = options;
    }
       
    _checkResponse(request) {
      return  request.then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })  
    }

    getInfoUser(jwt) {
        const request = fetch(this._options.baseUrl + 'users/me', {
            method: 'get',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
        });
        return this._checkResponse(request)
    
    }

    getCards(jwt) {
        const request = fetch(this._options.baseUrl + 'cards ', {
            method: 'get',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
        });
        
        return this._checkResponse(request)  
    }

    setInfoUser(data, jwt) {
        const request = fetch(this._options.baseUrl + 'users/me', {   
            method: 'PATCH',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
            body: JSON.stringify({
                name: data.name,
                about: data.about
              })
        });
        
        return this._checkResponse(request)
    }
    
    addNewCard(data, jwt) {
        const request = fetch(this._options.baseUrl + 'cards', {  
            method: 'POST',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
            body: JSON.stringify({
                name: data.title,
                link: data.link
              })
        });
        
        return this._checkResponse(request)
    }

    deleteCard(id, jwt) {
        const request = fetch(this._options.baseUrl + 'cards/' + id, {
            method: 'DELETE',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
        });
        
        return this._checkResponse(request)
    }

    addLikes(jwt, id) {
        
        
        const request = fetch(this._options.baseUrl + 'cards/likes/' + id, {
            method: 'PUT',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
        });
        
        return this._checkResponse(request)
    }

    deleteLikes(jwt, id) {
        

        const request = fetch(this._options.baseUrl + 'cards/likes/' + id, {
            method: 'DELETE',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
        });
        
        return this._checkResponse(request)  
    }

    setAvatar(avatarLink, jwt) {
        const request = fetch(this._options.baseUrl + 'users/me/avatar', {
            method: 'PATCH',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
            body: JSON.stringify({
                avatar: avatarLink,
            })
        });
        
        return this._checkResponse(request)
    }
} 



 const api = new Api({
    baseUrl: 'https://api.mesto.kolomeytsev.nomoredomains.club/',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default api;