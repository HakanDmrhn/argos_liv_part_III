describe('Integration test with visual testing - image popups Raffrollo-Konfigurator', function () {



    it('argos snapshots of product picture galleries - PDP', function () {

        cy.visit('/raffrollo/grada-9236')

        cy.wait('@js_minify')

        cy.get('#big-img').click()
        cy.get('.lightbox_wrapper').should('be.visible')
        
        cy.argosScreenshot('1st popup image of grada-9236', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('2nd popup image of grada-9236', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

    })


    it('argos snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/raffrollo/raffrollo-konfigurator')

        cy.get('.images a').first().click({ force: true })
        cy.argosScreenshot('1st popup image of Raffrollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

    })
})