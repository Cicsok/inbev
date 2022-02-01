class MyMobileFooter extends HTMLElement {
    connectedCallback(){
        const companyName = siteConfig.companyName;
        const footerEmail = siteConfig.footer.email;
        const footerPhoneNumber = siteConfig.footer.phone;
        this.innerHTML = `
            <footer class="d-xs-block d-lg-none">
                <div class="footer-content justify-content-around align-items-center">
                    <div class="mobile-company-name">`
                        + companyName +
                    `</div>
                    <div class="mobile-email-footer">`
                        + footerEmail + 
                    `</div>
                    <div class="mobile-phone-footer">`
                        + footerPhoneNumber + 
                    `</div>
                </div>
            </footer>`;
    }
}

customElements.define('my-mobile-footer', MyMobileFooter);