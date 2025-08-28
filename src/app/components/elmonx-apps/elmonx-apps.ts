import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elmonx-apps',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-12 col-md-12">
        <div class="app_btns_row" data-aos="fade-up">
          <div class="">
            <h3 data-aos="fade-up">Download The ElmonX App Today.</h3>
          </div>
          <div class="app_btns">
            <a href="https://apps.apple.com/us/app/elmonx/id1666530544" data-aos="fade-up" target="_blank" rel="noopener noreferrer" aria-label="Download ElmonX from App Store">
              <img src="/images/apple-app-icon.webp" width="100%" height="100%" alt="Apple App Store icon" />
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.app.elmonx" data-aos="fade-up" target="_blank" rel="noopener noreferrer" aria-label="Download ElmonX from Google Play Store">
              <img src="/images/google-play-icon.webp" width="100%" height="100%" alt="Google Play Store icon" />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  `,

})
export class ElmonxAppsComponent {

}
