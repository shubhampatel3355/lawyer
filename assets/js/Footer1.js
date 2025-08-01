async function loadDocumentPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("doc");




        // Your existing template code here...
        document.getElementById("doc-footer").innerHTML = `
    <footer class="footer-wrapper">
        <div class="divider"></div>

        <div class="container">
            <div class="row align-items-center g-4">
                <div class="col-12">
                    <div class="footer-logo text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                        <a href="#" class="d-block">
                            <img src="assets/img/core-img/White_logo.svg" alt="" width="400" height="400" />
                        </a>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer-contact-card d-flex align-items-center gap-3 wow fadeInUp"
                        data-wow-duration="1000ms" data-wow-delay="700ms">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                                fill="none">
                                <g clip-path="url(#clip0_1_3663)">
                                    <mask id="mask0_1_3663" style="mask-type: luminance" maskUnits="userSpaceOnUse"
                                        x="0" y="0" width="60" height="60">
                                        <path d="M0 7.62939e-06H60V60H0V7.62939e-06Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1_3663)">
                                        <path d="M34.1523 1.18332C47.759 1.18332 58.8285 12.2529 58.8285 25.8594"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M34.1523 8.2332C43.8708 8.2332 51.7785 16.141 51.7785 25.8594"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M34.1523 15.2845C39.9837 15.2845 44.7273 20.0281 44.7273 25.8594"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M34.1523 22.3344C36.0988 22.3344 37.6773 23.913 37.6773 25.8594"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M21.9629 38.0625C21.9629 38.7097 21.4382 39.2344 20.791 39.2344C20.1439 39.2344 19.6191 38.7097 19.6191 38.0625C19.6191 37.4154 20.1439 36.8906 20.791 36.8906C21.4382 36.8906 21.9629 37.4154 21.9629 38.0625Z"
                                            fill="#fe3f30" />
                                        <path
                                            d="M17.3666 34.0558C16.6232 33.0792 15.9186 32.0708 15.2551 31.0326C14.3833 29.6674 14.647 27.8592 15.7918 26.7143L19.7705 22.7357C20.627 21.8803 20.627 20.4917 19.7705 19.6361L10.4071 10.2729C9.55159 9.41615 8.16304 9.41615 7.30757 10.2729L4.93792 12.6423C1.09194 16.4874 0.0524892 22.356 2.46655 27.2287C6.76147 35.8994 15.5998 49.1908 32.6271 57.5404C37.515 59.9358 43.4107 58.9198 47.2591 55.0713L49.6826 52.6478C50.5391 51.7924 50.5391 50.4038 49.6826 49.547L40.3192 40.185C39.4637 39.3283 38.0751 39.3283 37.2197 40.185L33.2412 44.1635C32.0961 45.3083 30.288 45.572 28.9227 44.7003C27.4458 43.7563 26.0284 42.7289 24.6772 41.6241"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_3663">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p class="text-white mb-0">Phone:</p>
                            <p class="mb-0 text-white"><a href="tel:+919876543210"
                                    style="color: inherit; text-decoration: none">+91
                                    98765 43210</a></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer-contact-card d-flex align-items-center gap-3 wow fadeInUp"
                        data-wow-duration="1000ms" data-wow-delay="800ms">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                                fill="none">
                                <path
                                    d="M30.1149 4.68753C29.4668 4.68284 28.9383 5.20433 28.9336 5.85121C28.9289 6.49808 29.4493 7.0266 30.0973 7.03129C30.7442 7.03597 31.2727 6.51566 31.2774 5.86878C31.2821 5.22191 30.7618 4.69339 30.1149 4.68753Z"
                                    fill="#fe3f30" />
                                <path
                                    d="M30.0617 11.719C25.5369 11.6869 21.8313 15.3371 21.7971 19.8605C21.763 24.3836 25.4153 28.0909 29.9386 28.125C29.9596 28.1251 29.9804 28.1252 30.0014 28.1252C34.4959 28.1252 38.1692 24.4859 38.2032 19.9835C38.2373 15.4606 34.5851 11.7531 30.0617 11.719ZM30.0012 25.7816C29.9864 25.7816 29.971 25.7815 29.9562 25.7814C26.7252 25.757 24.1164 23.1088 24.1407 19.878C24.165 16.6618 26.7886 14.0624 29.9991 14.0624C30.0138 14.0624 30.0293 14.0625 30.0441 14.0626C33.2751 14.087 35.8839 16.7352 35.8595 19.9659C35.8351 23.1821 33.2117 25.7816 30.0012 25.7816Z"
                                    fill="#fe3f30" />
                                <path
                                    d="M35.1126 5.57551C34.503 5.35918 33.8328 5.67851 33.6165 6.28859C33.4003 6.89867 33.7196 7.5684 34.3295 7.78473C39.4913 9.61415 42.9314 14.5303 42.8901 20.0178C42.8853 20.665 43.406 21.1936 44.0532 21.1985C44.0561 21.1985 44.0592 21.1985 44.0622 21.1985C44.7051 21.1985 45.2289 20.6796 45.2339 20.0354C45.2826 13.5494 41.2152 7.73844 35.1126 5.57551Z"
                                    fill="#fe3f30" />
                                <path
                                    d="M37.1908 44.1144C44.9853 34.0814 49.8564 28.8495 49.9222 20.0717C50.0047 9.02756 41.0419 0 29.9986 0C19.0842 0 10.1618 8.83924 10.0788 19.7729C10.0118 28.7887 14.9734 34.0134 22.8217 44.1127C15.014 45.2795 10.0788 48.2112 10.0788 51.797C10.0788 54.199 12.299 56.3544 16.3306 57.8661C20.0001 59.2421 24.8549 60 30.0005 60C35.1461 60 40.0008 59.2421 43.6703 57.8661C47.7019 56.3543 49.9222 54.1989 49.9222 51.7969C49.9222 48.213 44.9915 45.282 37.1908 44.1144ZM12.4224 19.7905C12.4956 10.1426 20.3676 2.34375 29.9988 2.34375C39.744 2.34375 47.6512 10.3111 47.5785 20.0542C47.5162 28.3903 42.3503 33.5274 34.103 44.2786C32.6319 46.1953 31.281 48.0075 30.0022 49.7802C28.7272 48.0064 27.4032 46.2267 25.9102 44.2779C17.3219 33.0766 12.3589 28.3277 12.4224 19.7905ZM30.0005 57.6564C19.9398 57.6564 12.4224 54.563 12.4224 51.797C12.4224 49.7457 16.9163 47.1545 24.4724 46.2572C26.1427 48.4487 27.607 50.4397 29.0433 52.4731C29.2627 52.7837 29.6191 52.9686 29.9994 52.9689C29.9998 52.9689 30.0001 52.9689 30.0005 52.9689C30.3804 52.9689 30.7368 52.7846 30.9565 52.4747C32.3792 50.4677 33.8836 48.4276 35.5396 46.2584C43.0886 47.1567 47.5785 49.7471 47.5785 51.7971C47.5784 54.563 40.0612 57.6564 30.0005 57.6564Z"
                                    fill="#fe3f30" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-white mb-0">Address:</p>
                            <p class="mb-0 text-white">Advocate Chambers, 3rd Floor MG Road, Bengaluru – 560001</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer-contact-card d-flex align-items-center gap-3 wow fadeInUp"
                        data-wow-duration="1000ms" data-wow-delay="900ms">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                                fill="none">
                                <mask id="mask0_1_3701" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0"
                                    y="0" width="60" height="60">
                                    <path d="M0 7.62939e-06H60V60H0V7.62939e-06Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1_3701)">
                                    <path d="M5.64258 57.4062L21.0052 42.0437" stroke="#fe3f30" stroke-width="2.34375"
                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M54.3562 57.4062L38.8164 41.8665" stroke="#fe3f30" stroke-width="2.34375"
                                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M35.2734 58.8281H50.9169C53.6034 58.8281 55.7812 56.6503 55.7812 53.9638V26.7914C55.7812 25.5019 55.2691 24.265 54.3575 23.3529L50.1469 19.1402"
                                        stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M9.81574 19.1907L5.64445 23.3524C4.73156 24.2648 4.21875 25.5025 4.21875 26.7932V53.9637C4.21875 56.6502 6.39656 58.8281 9.08309 58.8281H24.7264"
                                        stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M38.5137 7.5L32.197 1.17949C30.4921 1.17891 29.5362 1.17867 27.8314 1.17809L21.5059 7.49988"
                                        stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M55.2956 25.2669L33.4549 47.1211C31.5558 49.0213 28.4759 49.0223 26.5757 47.1231L4.78711 25.3479"
                                        stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M31.4184 29.5866H29.5541C26.8221 29.5866 24.6075 27.3719 24.6075 24.64C24.6075 21.9082 26.8221 19.6933 29.5541 19.6933C32.1205 19.6933 34.201 21.7738 34.201 24.3402V27.0528C34.201 28.6244 35.475 29.8985 37.0468 29.8985C38.6184 29.8985 39.8924 28.6244 39.8924 27.0528V24.6513C39.8924 19.1878 35.4634 14.7588 29.9999 14.7588C24.5364 14.7588 20.1074 19.1878 20.1074 24.6513C20.1074 30.1984 24.6043 34.6953 30.1514 34.6953H37.2739"
                                        stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M9.84375 30.3828V11.0147C9.84375 9.07297 11.4177 7.49903 13.3594 7.49903H46.6406C48.5823 7.49903 50.1562 9.07297 50.1562 11.0147V29.999"
                                        stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <p class="text-white mb-0">Email:</p>
                            <p class="mb-0 text-white"><a href="mailto:contact@yourlawfirm.in"
                                    class="text-white">contact@yourlawfirm.in</a></p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="footer-contact-card d-flex align-items-center gap-3 wow fadeInUp"
                        data-wow-duration="1000ms" data-wow-delay="1000ms">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                                fill="none">
                                <g clip-path="url(#clip0_1_3727)">
                                    <mask id="mask0_1_3727" style="mask-type: luminance" maskUnits="userSpaceOnUse"
                                        x="0" y="0" width="60" height="60">
                                        <path d="M0 7.62939e-06H60V60H0V7.62939e-06Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1_3727)">
                                        <path
                                            d="M53.9153 13.8938C61.4842 25.1053 60.3065 40.4626 50.3844 50.3847C39.1266 61.6426 20.8733 61.6426 9.61535 50.3847C-1.64262 39.1268 -1.64262 20.8735 9.61535 9.61556C19.661 -0.429985 35.2775 -1.51221 46.5221 6.37146"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M30 53.2617C17.1735 53.2617 6.73828 42.8265 6.73828 30C6.73828 17.1735 17.1735 6.73828 30 6.73828C42.8266 6.73828 53.2617 17.1735 53.2617 30C53.2617 42.8265 42.8266 53.2617 30 53.2617Z"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M32.9297 30C32.9297 31.618 31.6181 32.9297 30 32.9297C28.382 32.9297 27.0703 31.618 27.0703 30C27.0703 28.382 28.382 27.0703 30 27.0703C31.6181 27.0703 32.9297 28.382 32.9297 30Z"
                                            stroke="#fe3f30" stroke-width="2.34375" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M30 27.0703V17.5781" stroke="#fe3f30" stroke-width="2.34375"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M32.0723 32.0714L36.6299 36.6289" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M30 11.4851V12.6719" stroke="#fe3f30" stroke-width="2.34375"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.7422 13.9643L21.3356 14.9922" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M13.9668 20.7425L14.9946 21.3359" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M11.4844 30H12.6711" stroke="#fe3f30" stroke-width="2.34375"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.9668 39.2578L14.9946 38.6645" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M20.7422 46.0352L21.3356 45.0073" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M30 48.5156V47.3289" stroke="#fe3f30" stroke-width="2.34375"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M39.2574 46.0352L38.6641 45.0073" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M46.0337 39.2578L45.0059 38.6645" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M48.515 30H47.3281" stroke="#fe3f30" stroke-width="2.34375"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M46.0337 20.7425L45.0059 21.3359" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M39.2574 13.9643L38.6641 14.9922" stroke="#fe3f30"
                                            stroke-width="2.34375" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M51.3426 9.009C51.7998 9.46627 51.7998 10.2076 51.3426 10.6649C50.8854 11.1221 50.1438 11.1221 49.6867 10.6649C49.2294 10.2076 49.2294 9.46627 49.6867 9.009C50.1438 8.55174 50.8854 8.55174 51.3426 9.009Z"
                                            fill="#fe3f30" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_3727">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p class="text-white mb-0">Working Hours:</p>
                            <p class="mb-0 text-white">Mon-Sat: 8am - 8pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="footer-line"></div>

        <!-- Bottom Content -->
        <div class="footer-bottom-content">
            <div class="container">
                <div
                    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between gap-4">
                    <!-- Copyright -->
                    <p class="mb-0 copyright">
                        <span id="year"></span> <a href="#">Legaleze</a> All Rights
                        Reserved.
                    </p>

                    <!-- Social Nav -->
                    <!-- <div class="social-nav">
                  <a href="#">
                     <i class="ti ti-brand-facebook"></i>
                  </a>
                  <a href="#">
                     <i class="ti ti-brand-x"></i>
                  </a>
                  <a href="#">
                     <i class="ti ti-brand-linkedin"></i>
                  </a>
                  <a href="#">
                     <i class="ti ti-brand-instagram"></i>
                  </a>
               </div> -->
                    <p class="mb-0 copyright">
                        <span id="year"></span>Designed By <a href="https://mavixy.com/"
                            style="color: #ff7900">Mavixy</a>
                    </p>

                    <!-- Footer Bottom Nav -->
                    <div class="footer-bottom-nav">
                        <a href="#">Privacy & Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    
                `;



}

// Initialize when document is ready
loadDocumentPage();
