import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row justify-content-center">
      <div class="col-12 col-md-12 col-lg-11 col-xl-10 text-center">
        <div class="who_we_are">
          <h2 data-aos="fade-up">Who We Are</h2>
          <div class="image_container">
            <p class="" data-aos="fade-up">
              We are pioneering licensed NFT art and next-gen collectibles.
              We blend creativity with cutting-edge technology, blockchain, 
              and augmented reality to craft unique digital and
              physical products. Join us on our
              creative journey and
              stay tuned for our
              upcoming releases!
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WhoWeAreComponent {

}
