class MyFooter extends HTMLElement {
    connectedCallback(){
        const companyName = siteConfig.companyName;
        const footerEmail = siteConfig.footer.email;
        const footerPhoneNumber = siteConfig.footer.phone;

        this.innerHTML = `
        <footer>
            <div class="footer-content d-flex justify-content-around align-items-center">
                <div class="company-name">`
                    + companyName +
                `</div>
                    <div class="email-footer">
                        <div>Email-cím:</div>
                        <div>` 
                            + footerEmail + `</div>
                        </div>
                    <div class="phone-footer">
                        <div>Telefonszám:</div>
                        <div>` 
                            + footerPhoneNumber + 
                        `</div>
                    </div>
            </div>
        </footer>`;
    }
}

customElements.define('my-desktop-footer', MyFooter)