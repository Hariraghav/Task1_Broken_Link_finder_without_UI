var { SiteChecker } = require("broken-link-checker");

const siteChecker = new SiteChecker(
    { 
        excludeInternalLinks: false,
        excludeExternalLinks: false, 
        filterLevel: 0,
        acceptedSchemes: ["http", "https"],
        excludedKeywords: ["linkedin"],
    },
    {
        "error": (error) => {
            console.error(error);
        },
        "link": (result) => {
            if(result.broken) {
                if(result.http.response ) {
                    console.log(`${result.http.response.statusCode} - ${result.url.original}`);
                }
            }
        },
        "end": () => {
            console.log("All links are scanned");
        }
    }
);

siteChecker.enqueue("https://www.raymondcamden.com/");