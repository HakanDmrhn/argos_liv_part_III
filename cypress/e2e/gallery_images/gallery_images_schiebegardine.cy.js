describe('Integration test with visual testing - image popups Schiebegardinen-Konfigurator', function () {

    it('argos snapshots of product picture galleries - PDP', function () {

        cy.visit('/schiebegardinen/philo-7324')

        cy.wait('@js_minify')

        cy.get('#big-img').click()
        // cy.percySnapshot('1st popup image of philo-7324')
        cy.argosScreenshot('1st popup image of philo-7324', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of philo-7324')
        cy.argosScreenshot('2nd popup image of philo-7324', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('argos snapshots of product picture galleries - Konfigurator', function () {

        cy.visit('/schiebegardinen/schiebegardinen-konfigurator')
        // 

        cy.get('.images a').first().click({ force: true })
        // cy.percySnapshot('1st popup image of Schiebegardinen-Konfigurator') // only one image at configurator
        cy.argosScreenshot('1st popup image of Schiebegardinen-Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('2nd popup image of Schiebegardinen-Konfigurator')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('3rd popup image of Schiebegardinen-Konfigurator')

        // cy.get('#img-popup-next').click()
        // cy.percySnapshot('4th popup image of Schiebegardinen-Konfigurator')

    })
})