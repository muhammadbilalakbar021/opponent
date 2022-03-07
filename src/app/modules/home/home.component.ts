/* eslint-disable @typescript-eslint/quotes */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import Base64 from "../../shared/utils/base64";

const RIGHT_ICON = `
<svg width="24px" height="24px" viewBox="0 0 302 273" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M213.155 201.407L292.562 122L213.155 42.5929L199.808 55.9399L256.432 112.563L9.88814 \
112.563L9.88814 131.438L256.43 131.438L199.808 188.06L213.155 201.407Z" fill="black"/>
</svg>
`;

const LEFT_ICON = `
<svg width="24px" height="24px" viewBox="0 0 302 273" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M88.8452 42.5929L9.4375 122L88.8452 201.407L102.192 188.06L45.5678 131.437L292.112 131.437L292.112
 112.562L45.5696 112.562L102.192 55.9399L88.8452 42.5929Z" fill="black"/>
</svg>
`;

/**
 * @title SVG icons
 */
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @ViewChild("imgupload", { static: false }) imgupload: ElementRef;
  @ViewChild("imgupload2", { static: false }) imgupload2: ElementRef;
  initialFirstImage: any =
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png";
  initialSecondImage: any =
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png";

  faCoffee = "faCoffee";

  constructor(
    private router: Router,
    private base64: Base64,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      "RIGHT_ICON",
      sanitizer.bypassSecurityTrustHtml(RIGHT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "LEFT_ICON",
      sanitizer.bypassSecurityTrustHtml(LEFT_ICON)
    );
  }

  ngOnInit(): void {
    console.log("HomeComponent INIT");
  }

  imgUpload() {
    const inputElement: HTMLElement = this.imgupload
      .nativeElement as HTMLElement;
    inputElement.click();
    console.log("ell");
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

  next() {
    this.router.navigate(["opponent-summary"]);
  }
}
