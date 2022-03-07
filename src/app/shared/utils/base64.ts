import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class Base64 {
  constructor() {}

  // Function to get the base64 string agaist a given picture
  getBase64(imagePath: any) {
    return new Promise((resolve, reject) => {
      const file = imagePath.target.files[0];
      // console.log(file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function asy() {
        resolve(reader.result);
      };
      reader.onerror = function(err) {
        reject(err);
      };
    });
  }
}
