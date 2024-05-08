describe('Integration test with visual testing - image popups Zubehör', function () {

    it('argos snapshots of product picture galleries - wandwinkel', function () {

        cy.visit('/wandwinkel')
        cy.wait('@js_minify')

        cy.get('#big-img').click()
        cy.get('.lightbox_wrapper').should('be.visible')

        cy.argosScreenshot('1st popup image of wandwinkel', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('2nd popup image of wandwinkel', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('3rd popup image of wandwinkel', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('argos snapshots of product picture galleries - gelenkklebeplatten', function () {

        cy.visit('/gelenkklebeplatten')
        // cy.wait('@js_minify')

        cy.get('#big-img').click()
        cy.get('.lightbox_wrapper').should('be.visible')

        cy.argosScreenshot('1st popup image of gelenkklebeplatten', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('2nd popup image of gelenkklebeplatten', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        cy.argosScreenshot('3rd popup image of gelenkklebeplatten', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})