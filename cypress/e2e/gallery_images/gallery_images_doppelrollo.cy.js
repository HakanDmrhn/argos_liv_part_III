describe('Integration test with visual testing - image popups Doppelrollo-Konfigurator', function () {

    it('argos snapshots of product picture galleries - PDP', function () {

        cy.visit('/doppelrollo/remsa-5067')

        cy.wait('@js_minify')

        cy.get('#big-img').click()
        cy.get('.lightbox_wrapper').should('be.visible')

        cy.argosScreenshot('1st popup image of remsa-5067', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('2nd popup image of remsa-5067', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('3rd popup image of remsa-5067', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('4th popup image of remsa-5067', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('argos snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/doppelrollo/doppelrollo-konfigurator')

        cy.get('.images a').last().click({ force: true })
        cy.get('.lightbox_wrapper').should('be.visible')

        cy.argosScreenshot('4th popup image of Doppelrollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-back').click()
        cy.argosScreenshot('3rd popup image of Doppelrollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-back').click()
        cy.argosScreenshot('2nd popup image of Doppelrollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-back').click()
        cy.argosScreenshot('1st popup image of Doppelrollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})