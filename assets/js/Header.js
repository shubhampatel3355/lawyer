async function loadDocumentPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("doc");

  try {
    const response = await fetch("data/Legal-docs.json");
    const documents = await response.json();

    const doc = documents.find((d) => d.slug === slug);

    if (!doc) {
      document.getElementById(
        "doc-header"
      ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
      return;
    }

    

    // Your existing template code here...
    async function loadDocumentPage() {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("doc");

      try {
        const response = await fetch("data/Legal-docs.json");
        const documents = await response.json();

        const doc = documents.find((d) => d.slug === slug);

        if (!doc) {
          document.getElementById(
            "doc-header"
          ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
          return;
        }

        

        // Your existing template code here...
        document.getElementById("doc-header").innerHTML = `
                        <header class="header-area style-two">
        <div class="header-top headermob">
            <div class="container h-100 d-flex align-items-center justify-content-between">
                <div class="left-side d-flex align-items-center gap-4 gap-lg-5">
                    <div class="d-flex align-items-center gap-2 text-white">
                        <i class="ti ti-phone"></i>
                        <span class="d-none d-md-block">+91 98765 43210</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 text-white">
                        <i class="ti ti-mail"></i>
                        <span class="d-none d-md-block">contact@yourlawfirm.in</span>
                    </div>
                </div>
                <div class="right-side">
                    <div class="d-flex align-items-center gap-2 text-white">
                        <i class="ti ti-map-pin"></i>
                        <span class="d-none d-md-block">Advocate Chambers, 3rd Floor, MG Road, Bengaluru – 560001</span>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/img/core-img/Color_Logo.svg" alt="Logo" width="150" height="150">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#lawgisNav"
                    aria-controls="lawgisNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="ti ti-category"></i>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="lawgisNav">
                    <ul class="navbar-nav navbar-nav-scroll justify-content-center">
                        <li><a class="magnet-link" href="index.html">Home</a></li>
                        <li><a class="magnet-link" href="about-us.html">About Us</a></li>

                        <li class="lawgis-dd">
                            <a class="magnet-link" href="service.html">Products <i class="ti ti-chevron-down"></i></a>
                            <ul class="lawgis-dd-menu">
                                <!-- Startups Menu -->
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">Startups / Small Businesses <i
                                            class="ti ti-chevron-right"></i></a>
                                    <ul class="lawgis-dd-menu">
                                        <li><a class="magnet-link" href="NDA.html?doc=non-disclosure-agreement">Non-Disclosure Agreement
                                                (NDA)</a>
                                        </li>
                                        <li><a class="magnet-link" href="Founder's_Agreement.html?doc=co-founder-agreement">Founders' Agreement /
                                                Co-founder Agreement </a></li>
                                        <li><a class="magnet-link" href="Startup_Employment.html?doc=startup-employment-agreement">Startup Employment
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Equity_Vesting.html?doc=equity-vesting-agreement">Equity Vesting
                                                Agreement</a></li>
                                        <li><a class="magnet-link" href="Angel_Investment.html">Angel Investment
                                                Agreement /
                                                Convertible Note</a></li>
                                        <li><a class="magnet-link" href="SAFE.html?doc=safe-agreement">SAFE Agreement</a></li>
                                        <li><a class="magnet-link" href="Share_Subscription.html?doc=share-subscription-agreement">Share Subscription Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Shareholders.html?doc=shareholders-agreement">Shareholders Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Consultancy.html?doc=consultancy-agreement">Consultancy Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Vendor.html?doc=vendor-supplier-agreement">Vendor / Supplier Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="SLA.html?doc=service-level-agreement">Service Level Agreement (SLA)</a>
                                        </li>
                                    </ul>
                                </li>

                                <!-- Freelancers Menu -->
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">Creatives & Freelancers <i
                                            class="ti ti-chevron-right"></i></a>
                                    <ul class="lawgis-dd-menu">
                                        <li><a class="magnet-link" href="Freelance_Services.html?doc=freelance-services-agreement">Freelance Services
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Work_for_Hire.html?doc=work-for-hire-agreement">Work-for-Hire Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Content_creation.html?doc=content-creation-agreement">Content Creation
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="influencer.html?doc=influencer-collaboration-agreement">Influencer Collaboration
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="wedding.html?doc=wedding-photography-agreement">Wedding Photography / Videography
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Commissioned_Art.html?doc=commissioned-artwork-agreement">Commissioned Artwork
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Royalty.html?doc=royalty-licensing-agreement">Royalty / Licensing Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Design-And-Logo.html?doc=design-logo-agreement">Design & Logo Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Performance.html?doc=performance-contracts">Performance Contracts</a>
                                        </li>
                                        <li><a class="magnet-link" href="Portfolio_Usage.html?doc=portfolio-usage-consent-agreement">Portfolio Usage Consent
                                                Agreement</a></li>
                                        <li><a class="magnet-link" href="Music_Licensing.html?doc=music-licensing-agreement">Music Licensing
                                                Agreement</a></li>
                                        <li><a class="magnet-link" href="Creative_Retainer.html?doc=creative-retainer-agreement">Creative Retainer
                                                Agreement</a>
                                        </li>
                                    </ul>
                                </li>

                                <!-- Business Menu -->
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">General Business <i
                                            class="ti ti-chevron-right"></i></a>
                                    <ul class="lawgis-dd-menu">
                                        <li><a class="magnet-link" href="Sales.html?doc=sales-purchase-agreement">Sales / Purchase Agreement </a>
                                        </li>
                                        <li><a class="magnet-link" href="Joint_Venture.html?doc=joint-venture-agreement">Joint Venture Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Master_Service.html?doc=master-service-agreement">Master Service Agreement
                                                (MSA)</a>
                                        </li>
                                        <li><a class="magnet-link" href="Service_Level.html?doc=service-level-agreement">Service Level Agreement
                                                (SLA)</a>
                                        </li>
                                        <li><a class="magnet-link" href="Distribution.html?doc=distribution-agreement">Distribution Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Franchise.html?doc=franchisee-agreement">Franchise Agreement</a></li>
                                        <li><a class="magnet-link" href="Marketing.html?doc=marketing-agency-agreement">Marketing / Agency Agreement
                                            </a></li>
                                        <li><a class="magnet-link" href="Loan_Agreement.html?doc=loan-agreement">Loan Agreement</a></li>
                                        <li><a class="magnet-link" href="Promissory_Note.html?doc=promissory-note">Promissory Note</a></li>
                                        <li><a class="magnet-link" href="Commission_Based.html?doc=commission-based-referral-agreement">Commission-Based
                                                Referral
                                                Agreement </a></li>
                                        <li><a class="magnet-link" href="Business_Purchase.html?doc=business-transfer-agreement">Business Purchase /
                                                Transfer
                                                Agreement</a></li>
                                        <li><a class="magnet-link" href="MOU.html?doc=memorandum-of-understanding">MOU (Memorandum of Understanding)
                                            </a></li>
                                    </ul>
                                </li>

                                <!-- Employment Menu -->
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">Employment & HR <i
                                            class="ti ti-chevron-right"></i></a>
                                    <ul class="lawgis-dd-menu">
                                        <li><a class="magnet-link" href="Employment_Agreement.html?doc=employment-agreement">Employment
                                                Agreement</a></li>
                                        <li><a class="magnet-link" href="POSH_Policy.html?doc=posh-policy">POSH Policy</a></li>
                                        <li><a class="magnet-link" href="Employee_Handbook.html?doc=employee-handbook">Employee Handbook</a>
                                        </li>

                                        <li><a class="magnet-link" href="Non_Compete_and_Non_Solicitation.html?doc=non-compete-non-solicitation-agreement">Non-Compete Agreement</a>
                                        </li>

                                        <li><a class="magnet-link" href="Consultancy_Agreement.html?doc=consultancy-agreement-ip">Contractor Agreement
                                                (domestic
                                                + international) </a></li>

                                        <li><a class="magnet-link" href="Remote_Work.html?doc=remote-work-agreement">Remote Work Agreement</a>
                                        </li>
                                    </ul>
                                </li>

                                <!-- Property Menu -->
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">Property & Real Estate <i
                                            class="ti ti-chevron-right"></i></a>
                                    <ul class="lawgis-dd-menu">
                                        <li><a class="magnet-link" href="Residential_Lease.html?doc=residential-lease-agreement">Resedential Lease
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Commercial_Lease.html?doc=commercial-lease-agreement">Commercial Lease</a>
                                        </li>
                                        <li><a class="magnet-link" href="Leave_and_License.html?doc=leave-and-license-agreement"> Leave and License
                                                Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Property_Sale.html?doc=property-sale-agreement">Property Sale Agreement</a>
                                        </li>
                                        <li><a class="magnet-link" href="Sales-Deed.html?doc=sales-deed-agreement">Sales Deed</a></li>
                                        <li><a class="magnet-link" href="Brokerage_Agreement.html?doc=brokerage-agreement">Brokerage
                                                Agreement</a></li>
                                    </ul>
                                </li>

                                <!-- Digital Menu -->
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">Digital & Tech <i
                                            class="ti ti-chevron-right"></i></a>
                                    <ul class="lawgis-dd-menu">
                                        <li><a class="magnet-link" href="Website_Terms.html?doc=website-terms-and-conditions">Website Terms &
                                                Conditions</a></li>
                                        <li><a class="magnet-link" href="Privacy_Policy.html?doc=privacy-policy">Privacy Policy (Indian
                                                DPDPA + GDPR
                                                hybrid) </a></li>
                                        <li><a class="magnet-link" href="Software_Development.html?doc=software-development-agreement">Software Development
                                                Agreement</a></li>
                                        <li><a class="magnet-link" href="Website_Development.html?doc=website-development-agreement">Website Development
                                                Agreement</a></li>

                                        <li><a class="magnet-link" href="SaaS_Agreement.html?doc=saas-agreement">SaaS Agreement
                                                (Subscription /
                                                Licensing)</a></li>
                                        <li><a class="magnet-link" href="App_Development.html?doc=app-development-agreement">App Development &
                                                Maintenance
                                                Contract</a></li>
                                    </ul>
                                </li>
                                <li class="lawgis-dd">
                                    <a class="magnet-link" href="#">Legal Document Review</a>
                                </li>
                            </ul>
                        </li>

                        <li><a class="magnet-link" href="blog-1.html">Blogs</a></li>
                        <li><a class="magnet-link" href="contact-1.html">Contact Us</a></li>
                    </ul>
                </div>

                <a href="contact-1.html" class="btn btn-primary btncontact">
                    <span>CONTACT US <i class="ti ti-arrow-up-right"></i></span>
                    <span>CONTACT US <i class="ti ti-arrow-up-right"></i></span>
                </a>
            </div>
        </nav>
    </header>
    
                `;

        // After the form is loaded in the DOM, set up the form handler

      } catch (error) {
        console.error("Error loading document:", error);
        document.getElementById(
          "doc-header"
        ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
      }
    }

    // Initialize when document is ready
    loadDocumentPage();

    // After the form is loaded in the DOM, set up the form handler

  } catch (error) {
    console.error("Error loading document:", error);
    document.getElementById(
      "doc-header"
    ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
  }
}

// Initialize when document is ready
loadDocumentPage();
