export class Geolocation {
  detectLocation() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        }, (error) => {
          reject(error);
        });
      })
    };
  }
}
