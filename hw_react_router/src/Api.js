class Api {
  static async sendRequest(method, path) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const requestUrl = `${baseUrl}/${path}`;
    const response = await fetch(requestUrl, { method });
    return response.json();
  }

  static getUsers() {
    return this.sendRequest('GET', `users`);
  }

  static getUserById(id) {
    return this.sendRequest('GET', `users/${id}`);
  }

  static getAlbumsByUserId(id) {
    return this.sendRequest('GET', `albums?userId=${id}`);
  }

  static getPhotosByAlbumId(id) {
    return Api.sendRequest('GET', `photos?albumId=${id}`);
  }
}

export default Api;