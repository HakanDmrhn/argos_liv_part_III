describe('Integration test with visual testing - image popups Rollo-Konfigurator', function () {



    it('argos snapshots of product picture galleries - PDP', function () {

        cy.visit('/rollo/blackout-reflex-3517')
        cy.wait('@js_minify')

        cy.get('#big-img').click()
        // cy.percySnapshot('1st popup image of blackout-reflex-3517')
        cy.argosScreenshot('1st popup image of blackout-reflex-3517', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of blackout-reflex-3517')
        cy.argosScreenshot('2nd popup image of blackout-reflex-3517', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('3rd popup image of blackout-reflex-3517')
        cy.argosScreenshot('3rd popup image of blackout-reflex-3517', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('4th popup image of blackout-reflex-3517')
        cy.argosScreenshot('4th popup image of blackout-reflex-3517', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })


    it('argos snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/rollo/rollo-konfigurator')
        // 

        cy.get('.images a').first().click({ force: true })
        // cy.percySnapshot('1st popup image of Rollo-Konfigurator')
        cy.argosScreenshot('1st popup image of Rollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of Rollo-Konfigurator')
        cy.argosScreenshot('2nd popup image of Rollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('4th popup image of Rollo-Konfigurator')
        cy.argosScreenshot('3rd popup image of Rollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('5th popup image of Rollo-Konfigurator')
        cy.argosScreenshot('4th popup image of Rollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('6th popup image of Rollo-Konfigurator')
        cy.argosScreenshot('5th popup image of Rollo-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})