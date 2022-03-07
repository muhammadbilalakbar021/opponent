import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Base64 from '../shared/utils/base64';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

/**
 * @title SVG icons
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('imgupload', { static: false }) imgupload: ElementRef;
  @ViewChild('imgupload2', { static: false }) imgupload2: ElementRef;
  initialFirstImage: any =
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png';
  initialSecondImage: any =
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png';

  faCoffee = 'faCoffee';

  constructor(
    private router: Router,
    private base64: Base64,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  imgUpload() {
    const inputElement: HTMLElement = this.imgupload
      .nativeElement as HTMLElement;
    inputElement.click();
    console.log('ell');
  }

  async getImage(event: any) {
    console.log(event);
    this.initialFirstImage = await this.base64.getBase64(event);
  }
  imgSecondUpload() {
    const inputElement: HTMLElement = this.imgupload2
      .nativeElement as HTMLElement;
    inputElement.click();
  }

  async getSecondImage(event: any) {
    console.log(event);
    this.initialSecondImage = await this.base64.getBase64(event);
  }
}
