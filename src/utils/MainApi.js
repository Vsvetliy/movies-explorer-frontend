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
        const request = fetch(this._options.baseUrl + 'movies ', {
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
                email: data.email
              })
        });
        
        return this._checkResponse(request)
    }
    
    addNewCard(data, jwt) {
        const request = fetch(this._options.baseUrl + 'movies', {  
            method: 'POST',
            headers: {"Authorization" : `Bearer ${jwt}`, ...this._options.headers},
            body: JSON.stringify({
                
                country: data.country,
                director: data.director.slice(0,30),
                duration: data.duration,
                year: data.year,
                description: data.description.slice(0,300),
                image: "https://api.nomoreparties.co/" + data.image.url,
                trailer: data.trailerLink ?? "https://www.kinopoisk.ru/",
                thumbnail: "https://api.nomoreparties.co/" + data.image.formats.thumbnail.url,
                movieId: data.id,
                nameRU: data.nameRU.slice(0,30),
                nameEN: data.nameEN ? data.nameEN.slice(0,30) : "no name",
              })
        });
        
        return this._checkResponse(request)
    }

    deleteCard(id, jwt) {
        const request = fetch(this._options.baseUrl + 'movies/' + id, {
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
    baseUrl: 'https://api.movies.kolomeytsev.nomoredomains.xyz/',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default api;