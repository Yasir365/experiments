import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partnerships',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
     <div class="row">
      <div class="col-12 col-md-12 text-center">
        <div class="partners mb-5">
          <div class="nft_img" data-aos="fade-up">
            <img src="/images/hand-nft.webp" width="100%" height="100%" alt="Hand NFT illustration" />
          </div>
          <div class="elmonx_partners">
            <h5 data-aos="fade-up">ElmonX Partnerships</h5>
            <div class="partners_logos">
              <div class="" data-aos="fade-up">
                <div class="partners_img">
                  <img src="/images/wallet_guard.webp" width="100%" height="100%" alt="Wallet Guard logo" />
                </div>
              </div>
              
              <div class="" data-aos="fade-up">
                <div class="partners_img">
                  <img src="/images/signature.webp" width="100%" height="100%" alt="Signature logo" />
                </div>
              </div>
              
              <div class="" data-aos="fade-up">
                <div class="partners_img">
                  <img src="/images/asprey.webp" alt="Asprey logo" style="width: 128px; height: 50px" />
                </div>
              </div>
              
              <div class="" data-aos="fade-up">
                <div class="partners_img">
                  <img src="/images/opensea.webp" width="100%" height="100%" alt="OpenSea logo" />
                </div>
              </div>
              
              <div class="" data-aos="fade-up">
                <div class="partners_img">
                  <img src="/images/veve.webp" width="100%" height="100%" alt="VeVe logo" />
                </div>
              </div>
              
              <div class="" data-aos="fade-up">
                <div class="partners_img">
                  <img src="/images/bridgeman.webp" width="100%" height="100%" alt="Bridgeman logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PartnershipsComponent {

}
