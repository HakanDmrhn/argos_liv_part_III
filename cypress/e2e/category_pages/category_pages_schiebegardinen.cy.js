var data = require("../../fixtures/cat_pages_schiebegardinen.json");
var categoryPages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Schiebegardinen category pages', function () {


    categoryPages.forEach(function (link) {

        it('Load page: ' + link + ' & take argos snapshot', function () {

            cy.visit(link)
            cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));
            
            //ignore youtube videos
            cy.ignoreYouTube()
            cy.argosScreenshot(link, {
                viewports: [
                    "iphone-6", // Use device preset for iphone-6
                    { width: 1280, height: 1024 }, // Specify dimensions directly
                ]
            });
        })
    })
})