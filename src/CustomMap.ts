export class CustomMap {
  private googlemap: google.maps.Map;

  constructor(divId: string) {
    this.googlemap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
