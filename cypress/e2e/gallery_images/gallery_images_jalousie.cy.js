describe('Integration test with visual testing - gallery images Jalousie-Konfigurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/jalousie-konfigurator')
    })

    it('argos snapshots of product picture galleries - jalousie 16 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(1)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.argosScreenshot('1st image of Jalousie-Konfigurator gallery 16 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.argosScreenshot('2nd image of Jalousie-Konfigurator gallery 16 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

    })

    it('argos snapshots of product picture galleries - Jalousie 25 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(2)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.argosScreenshot('1st image of Jalousie-Konfigurator gallery 25 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.argosScreenshot('2nd image of Jalousie-Konfigurator gallery 25 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(3) > .img-responsive').click({ force: true })
        cy.argosScreenshot('3rd image of Jalousie-Konfigurator gallery 25 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('argos snapshots of product picture galleries - Jalousie 50 mm', function () {

        cy.get('.blinds-type > ul > :nth-child(3)').click()

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(1) > .img-responsive').click({ force: true })
        cy.argosScreenshot('1st image of Jalousie-Konfigurator gallery 50 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('.gallery_jalousien_main_img > ul > :nth-child(2) > .img-responsive').click({ force: true })
        cy.argosScreenshot('2nd image of Jalousie-Konfigurator gallery 50 mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

    })
})