async function loadDocumentPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("doc");

  try {
    const response = await fetch("data/Legal-docs.json");
    const documents = await response.json();

    const doc = documents.find((d) => d.slug === slug);

    if (!doc) {
      document.getElementById(
        "doc-container"
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
            "doc-container"
          ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
          return;
        }

        

        // Your existing template code here...
        document.getElementById("doc-sidebar").innerHTML = `
                        <ul class="service-list">
                
                                              
                                                <li>
                                                    <button class="dropdown-btn">StartUps / Small Business <i
                                                            class="ti ti-arrow-down"></i></button>
                                                    <ul class="dropdown-content">
                                                        <li><a class="magnet-link" href=${doc.id}>Non-Disclosure Agreement (NDA)</a>
                                                        </li>
                                                        <li><a class="magnet-link" href=${doc.Link1}>Founders' Agreement /
                                                                Co-founder
                                                                Agreement </a></li>
                                                        <li><a class="magnet-link" href="Startup_Employment.html">Startup Employment
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Equity_Vesting.html">Equity Vesting
                                                                Agreement</a></li>
                                                        <li><a class="magnet-link" href="Angel_Investment.html">Angel Investment
                                                                Agreement /
                                                                Convertible
                                                                Note</a></li>
                                                        <li><a class="magnet-link" href="SAFE.html">SAFE Agreement</a></li>
                                                        <li><a class="magnet-link" href="Share_Subscription.html">Share Subscription
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Shareholders.html">Shareholders Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Consultancy.html">Consultancy Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Vendor.html">Vendor / Supplier Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="SLA.html">Service Level Agreement (SLA)</a>
                                                        </li>
                                                    </ul>
                                                </li>
                
                                        
                                                <li>
                                                    <button class="dropdown-btn">Creatives & Freelancers <i
                                                            class="ti ti-arrow-down"></i></button>
                                                    <ul class="dropdown-content">
                                                        <li><a class="magnet-link" href="Freelance_Services.html">Freelance Services
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Work_for_Hire.html">Work-for-Hire Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Content_Creation.html">Content Creation
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="influencer.html">Influencer Collaboration
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Photography.html">Photography / Videography
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Commissioned_Art.html">Commissioned Artwork
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Royalty.html">Royalty / Licensing Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Design_&_Logo.html">Design & Logo Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Performance.html">Performance Contracts</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Portfolio_Usage.html">Portfolio Usage Consent
                                                                Agreement</a></li>
                                                        <li><a class="magnet-link" href="Music_Licensing.html">Music Licensing
                                                                Agreement</a></li>
                                                        <li><a class="magnet-link" href="Creative_Retainer.html">Creative Retainer
                                                                Agreement</a>
                                                        </li>
                                                    </ul>
                
                                                </li>
                
                                               
                                                <li>
                                                    <button class="dropdown-btn">General Business Contracts <i
                                                            class="ti ti-arrow-down"></i></button>
                                                    <ul class="dropdown-content">
                                                        <li><a class="magnet-link" href="Sales.html">Sales / Purchase Agreement </a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Joint_Venture.html">Joint Venture Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Master_Service.html">Master Service Agreement
                                                                (MSA)</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Service_Level.html">Service Level Agreement
                                                                (SLA)</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Distribution.html">Distribution Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Franchise.html">Franchise Agreement</a></li>
                                                        <li><a class="magnet-link" href="Marketing.html">Marketing / Agency Agreement
                                                            </a></li>
                                                        <li><a class="magnet-link" href="Loan_Agreement.html">Loan Agreement</a></li>
                                                        <li><a class="magnet-link" href="Promissory_Note.html">Promissory Note</a></li>
                                                        <li><a class="magnet-link" href="Commission_Based.html">Commission-Based
                                                                Referral
                                                                Agreement </a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Business_Purchase.html">Business Purchase /
                                                                Transfer
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="MOU.html">MOU (Memorandum of Understanding)
                                                            </a></li>
                                                    </ul>
                
                                                </li>
                
                                                
                                                <li>
                                                    <button class="dropdown-btn">Employment & HR <i
                                                            class="ti ti-arrow-down"></i></button>
                                                    <ul class="dropdown-content">
                                                        <li><a class="magnet-link" href="Employment_Agreement.html">Employment
                                                                Agreement</a></li>
                                                        <li><a class="magnet-link" href="POSH_Policy.html">POSH Policy</a></li>
                                                        <li><a class="magnet-link" href="Employee_Handbook.html">Employee Handbook</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Internship.html">Internship Agreement</a></li>
                                                        <li><a class="magnet-link" href="Non_Compete.html">Non-Compete Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Non_Solicitation.html">Non-Solicitation
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Offer_Letter.html">Offer Letter with Employment
                                                                Terms
                                                            </a></li>
                                                        <li><a class="magnet-link" href="Contractor_Agreement.html">Contractor Agreement
                                                                (domestic
                                                                +
                                                                international) </a></li>
                                                        <li><a class="magnet-link" href="Termination.html">Termination Letter with
                                                                Release Clause
                                                            </a></li>
                                                        <li><a class="magnet-link" href="Remote_Work.html">Remote Work Agreement</a>
                                                        </li>
                                                    </ul>
                
                                                </li>
                
                                                
                                                <li>
                                                    <button class="dropdown-btn">Property & Real Estate <i
                                                            class="ti ti-arrow-down"></i></button>
                                                    <ul class="dropdown-content">
                                                        <li><a class="magnet-link" href="Residential_Lease.html">Resedential Lease
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Commercial_Lease.html">Commercial Lease</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Leave_and_License.html"> Leave and License
                                                                Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="Property_Sale.html">Property Sale Agreement</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="POA.html">Power of Attorney (POA)</a></li>
                                                        <li><a class="magnet-link" href="Brokerage_Agreement.html">Brokerage
                                                                Agreement</a></li>
                                                    </ul>
                
                                                </li>
                
                                               
                                                <li>
                                                    <button class="dropdown-btn">Digital & Tech <i
                                                            class="ti ti-arrow-down"></i></button>
                                                    <ul class="dropdown-content">
                                                        <li><a class="magnet-link" href="Website_Terms.html">Website Terms &
                                                                Conditions</a></li>
                                                        <li><a class="magnet-link" href="Privacy_Policy.html">Privacy Policy (Indian
                                                                DPDPA + GDPR
                                                                hybrid)
                                                            </a></li>
                                                        <li><a class="magnet-link" href="Software_Development.html">Software Development
                                                                Agreement</a></li>
                                                        <li><a class="magnet-link" href="Website_Development.html">Website Development
                                                                Agreement</a></li>
                                                        <li><a class="magnet-link" href="DPA.html">Data Processing Agreement (DPA)</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="SaaS_Agreement.html">SaaS Agreement
                                                                (Subscription /
                                                                Licensing)</a>
                                                        </li>
                                                        <li><a class="magnet-link" href="App_Development.html">App Development &
                                                                Maintenance
                                                                Contract</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                               
                                         
                
                                            </ul>
    
                `;

        // After the form is loaded in the DOM, set up the form handler

      } catch (error) {
        console.error("Error loading document:", error);
        document.getElementById(
          "doc-sidebar"
        ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
      }
    }

    // Initialize when document is ready
    loadDocumentPage();

    // After the form is loaded in the DOM, set up the form handler

  } catch (error) {
    console.error("Error loading document:", error);
    document.getElementById(
      "doc-sidebar"
    ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
  }
}

// Initialize when document is ready
loadDocumentPage();
