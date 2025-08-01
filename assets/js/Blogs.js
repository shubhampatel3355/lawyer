
async function loadDocumentPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("doc");

  try {
    const response = await fetch("data/Blogs_data.json");
    const documents = await response.json();

    const doc = documents.find((d) => d.slug === slug);

    if (!doc) {
      document.getElementById(
        "doc-container"
      ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
      return;
    }

    document.title = `Laweze | ${doc.title}`;

    // Your existing template code here...
    async function loadDocumentPage() {
      const params = new URLSearchParams(window.location.search);
      const doc = params.get("doc");


      try {
        const response = await fetch("data/Blogs_data.json");
        const documents = await response.json();

        const doc = documents.find((d) => d.slug === slug);

        if (!doc) {
          document.getElementById(
            "doc-container"
          ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
          return;
        }

        document.title = `Laweze | ${doc.title}`;

        // Your existing template code here...
        document.getElementById("doc-container").innerHTML = `
   <!-- Breadcrumb Section -->
   <div class="breadcrumb-section bg-img jarallax" data-jarallax="" data-speed="0.6"
      style="background-image: url('assets/img/bg-img/73.jpg');">
      <div class="divider"></div>
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
               <div class="breadcrumb-content">
                  <h2 class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">${doc.title}</h2>
                  <ul class="list-unstyled wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1000ms">
                     <li><a class="magnet-link" href="index.html">Home</a></li>
                     <li><a class="magnet-link" href="blog-1.html">Blogs</a></li>
                     <li>${doc.title}</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="divider"></div>
   </div>

   <!-- Blog Wrapper -->
   <div class="blog-page-section bg-white">
      <div class="divider"></div>

      <div class="container">
         <div class="row g-4 g-xl-5">
            <div class="col-12 col-md-7 col-lg-8">
               <!-- Blog Title -->
               <div class="single-blog">
                  <img src="${doc.coverImage}" alt="">

                  <div class="blog-meta gap-4 d-flex flex-wrap align-items-center py-4 border-bottom mb-4">
                     <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                           fill="none">
                           <path
                              d="M9.85626 9.63408C11.1798 9.63408 12.3257 9.15938 13.2623 8.22279C14.1986 7.28636 14.6735 6.14058 14.6735 4.81689C14.6735 3.49365 14.1988 2.34771 13.2622 1.41098C12.3256 0.4747 11.1797 0 9.85626 0C8.53256 0 7.38678 0.4747 6.45035 1.41113C5.51392 2.34756 5.03906 3.49349 5.03906 4.81689C5.03906 6.14058 5.51392 7.28652 6.45035 8.22295C7.38708 9.15922 8.53302 9.63408 9.85626 9.63408ZM7.27921 2.23983C7.99774 1.5213 8.84064 1.17203 9.85626 1.17203C10.8717 1.17203 11.7148 1.5213 12.4335 2.23983C13.152 2.95852 13.5014 3.80157 13.5014 4.81689C13.5014 5.83251 13.152 6.6754 12.4335 7.39409C11.7148 8.11278 10.8717 8.46205 9.85626 8.46205C8.84094 8.46205 7.99805 8.11263 7.27921 7.39409C6.56052 6.67555 6.21109 5.83251 6.21109 4.81689C6.21109 3.80157 6.56052 2.95852 7.27921 2.23983Z"
                              fill="#E8BF96" />
                           <path
                              d="M18.2863 15.3784C18.2593 14.9887 18.2047 14.5636 18.1242 14.1146C18.0431 13.6624 17.9385 13.2348 17.8134 12.844C17.684 12.4401 17.5084 12.0413 17.291 11.6591C17.0656 11.2623 16.8007 10.9169 16.5034 10.6326C16.1926 10.3352 15.8121 10.0961 15.372 9.92169C14.9335 9.7482 14.4475 9.66031 13.9276 9.66031C13.7234 9.66031 13.526 9.74408 13.1447 9.99234C12.91 10.1454 12.6355 10.3224 12.3291 10.5182C12.0671 10.6851 11.7122 10.8415 11.2738 10.9831C10.8461 11.1215 10.4118 11.1917 9.98306 11.1917C9.5546 11.1917 9.12033 11.1215 8.69232 10.9831C8.25439 10.8416 7.89932 10.6852 7.63779 10.5183C7.33429 10.3244 7.05963 10.1474 6.82144 9.99219C6.44043 9.74393 6.24298 9.66016 6.03882 9.66016C5.5188 9.66016 5.03296 9.7482 4.59457 9.92184C4.15482 10.0959 3.77411 10.3351 3.46298 10.6327C3.16574 10.9172 2.90085 11.2625 2.67563 11.6591C2.4585 12.0413 2.28271 12.44 2.15332 12.8442C2.02835 13.235 1.92383 13.6624 1.84265 14.1146C1.76208 14.5629 1.70761 14.9882 1.6806 15.3788C1.65405 15.7608 1.64062 16.1583 1.64062 16.5599C1.64062 17.6039 1.9725 18.449 2.62695 19.0724C3.27332 19.6875 4.12842 19.9993 5.16861 19.9993H14.7987C15.8386 19.9993 16.6937 19.6875 17.3402 19.0724C17.9948 18.4495 18.3267 17.604 18.3267 16.5597C18.3266 16.1567 18.313 15.7592 18.2863 15.3784ZM16.5321 18.2232C16.105 18.6297 15.538 18.8273 14.7986 18.8273H5.16861C4.42902 18.8273 3.862 18.6297 3.43506 18.2234C3.0162 17.8247 2.81265 17.2804 2.81265 16.5599C2.81265 16.1851 2.82501 15.8151 2.84973 15.4599C2.87384 15.1113 2.92313 14.7285 2.99622 14.3217C3.06839 13.9199 3.16025 13.5429 3.2695 13.2016C3.37433 12.8743 3.5173 12.5502 3.69461 12.238C3.86383 11.9404 4.05853 11.6851 4.27338 11.4795C4.47433 11.287 4.72763 11.1296 5.02609 11.0115C5.30212 10.9022 5.61234 10.8424 5.9491 10.8334C5.99014 10.8552 6.06323 10.8969 6.18164 10.9741C6.42258 11.1311 6.70029 11.3102 7.00729 11.5063C7.35336 11.727 7.79922 11.9262 8.33191 12.0982C8.8765 12.2743 9.43192 12.3637 9.98322 12.3637C10.5345 12.3637 11.0901 12.2743 11.6344 12.0984C12.1675 11.9261 12.6132 11.727 12.9597 11.506C13.2739 11.3052 13.5439 11.1313 13.7848 10.9741C13.9032 10.897 13.9763 10.8552 14.0173 10.8334C14.3542 10.8424 14.6645 10.9022 14.9406 11.0115C15.239 11.1296 15.4922 11.2872 15.6932 11.4795C15.9081 11.685 16.1028 11.9403 16.272 12.2381C16.4494 12.5502 16.5926 12.8744 16.6972 13.2014C16.8066 13.5432 16.8987 13.9201 16.9707 14.3216C17.0436 14.7291 17.093 15.1121 17.1172 15.46V15.4603C17.142 15.8142 17.1545 16.184 17.1547 16.5599C17.1545 17.2805 16.951 17.8247 16.5321 18.2232Z"
                              fill="#E8BF96" />
                        </svg>${doc.written_by}</a>
                     <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                           fill="none">
                           <g clip-path="url(#clip0_1_7058)">
                              <mask id="mask0_1_7058" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                                 width="20" height="20">
                                 <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white" />
                              </mask>
                              <g mask="url(#mask0_1_7058)">
                                 <path
                                    d="M15.4297 1.75781H2.14844C1.28551 1.75781 0.585938 2.45738 0.585938 3.32031V5.66406H16.9922V3.32031C16.9922 2.45738 16.2927 1.75781 15.4297 1.75781Z"
                                    stroke="#E8BF96" stroke-width="1.20443" stroke-miterlimit="10"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M3.86719 2.92969V0.585938" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M13.7109 2.92969V0.585938" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M10.4297 2.92969V0.585938" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M7.14844 2.92969V0.585938" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M10.0391 8.30078H11.0156" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M6.5625 8.30078H7.53906" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M13.5156 8.30078H14.4922" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M3.08594 10.9375H4.0625" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M6.5625 10.9375H7.53906" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M10.0391 10.9375H11.0156" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M3.08594 13.5742H4.0625" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M6.5625 13.5742H7.53906" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path
                                    d="M19.4141 15.1172C19.4141 17.4903 17.4903 19.4141 15.1172 19.4141C12.7441 19.4141 10.8203 17.4903 10.8203 15.1172C10.8203 12.7441 12.7441 10.8203 15.1172 10.8203C17.4903 10.8203 19.4141 12.7441 19.4141 15.1172Z"
                                    stroke="#E8BF96" stroke-width="1.20443" stroke-miterlimit="10"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M15.1172 13.1641V15.1172H17.0703" stroke="#E8BF96" stroke-width="1.20443"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                 <path
                                    d="M16.9922 11.25V5.66406H0.585938V15.0391C0.585938 15.6863 1.11062 16.2109 1.75781 16.2109H10.961"
                                    stroke="#E8BF96" stroke-width="1.20443" stroke-miterlimit="10"
                                    stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                           </g>
                           <defs>
                              <clipPath id="clip0_1_7058">
                                 <rect width="20" height="20" fill="white" />
                              </clipPath>
                           </defs>
                        </svg>${doc.Date}</a>
                     
                  </div>
               </div>

               <!-- Blog Content -->
               <div class="blog-details-content">
               <p>${doc.description}</p>
               <h3> ${doc.Heading}</h3>
               <ol>
               <li>${doc.Point1}</li>
               <br>
               <li>${doc.Point2}</li>
               <br>
               <li>${doc.Point3}</li>
               <br>
               <li>${doc.Point4}</li>
                  </ol>

                  <p>${doc.description1}</p>

                    <h3> ${doc.Heading1}</h3>

                  <p>${doc.description2}</p>
               </div>





            </div>

            <div class="col-12 col-md-5 col-lg-4">
               <div class="d-flex flex-column gap-5">




                  <!-- Widget -->
                  <div class="blog-widget">
                     <div class="h4 mb-4">Recent Posts</div>

                     <div class="d-flex flex-column gap-4">
                        <!-- Widget Blog Post -->
                        <div class="widget-blog-post">
                           <div class="blog-thumbnail">
                              <img src="${doc.coverImage1}" alt="">
                           </div>
                           <div class="blog-content">
                              <a href="blog-details.html">${doc.title1}</a>
                              <p class="mb-0">${doc.Date1}</p>
                           </div>
                        </div>
                        <!-- Widget Blog Post -->
                        <div class="widget-blog-post">
                           <div class="blog-thumbnail">
                              <img src="${doc.coverImage1}" alt="">
                           </div>
                           <div class="blog-content">
                              <a href="blog-details.html">${doc.title1}</a>
                              <p class="mb-0">${doc.Date1}</p>
                           </div>
                        </div>

                     </div>
                  </div>


               </div>
            </div>
         </div>
      </div>

      <div class="divider"></div>
   </div>
    
                `;

        // After the form is loaded in the DOM, set up the form handler
        setupFormHandler();
        setupDropdownButtons();
      } catch (error) {
        console.error("Error loading document:", error);
        document.getElementById(
          "doc-container"
        ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
      }
    }
    

    // Initialize when document is ready
    loadDocumentPage();
    

    // After the form is loaded in the DOM, set up the form handler
    setupFormHandler();
    setupDropdownButtons();
  } catch (error) {
    console.error("Error loading document:", error);
    document.getElementById(
      "doc-container"
    ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
  }
}

// Initialize when document is ready
loadDocumentPage();
