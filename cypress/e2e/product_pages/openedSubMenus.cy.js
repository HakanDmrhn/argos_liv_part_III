
describe('Integration test with visual testing - diverse submenus', function () {


    it('Visueller Test der vorhandenen aufklappbaren Submenus verschiedener Produktgruppen', function () {

        cy.visit('/')

        //***************************************************
        //******************PLISSEE SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(1)').click()


        cy.get('#plissee-sub-menu > #colors > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Plissee-Menü: Plissee nach Farben')
        cy.argosScreenshot('Plissee-Menü: Plissee nach Farben', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#plissee-sub-menu #rooms > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Plissee-Menü: Plissee für Räume')
        cy.argosScreenshot('Plissee-Menü: Plissee für Räume', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#plissee-sub-menu #characteristics > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Plissee-Menü: Plissee nach Eigenschaften')
        cy.argosScreenshot('Plissee-Menü: Plissee nach Eigenschaften', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#plissee-sub-menu #guide > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Plissee-Menü: Ratgeber')
        cy.argosScreenshot('Plissee-Menü: Ratgeber', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()




        //***************************************************
        //******************ROLLO SUBMENU********************

        cy.get('.nav-primary.clearfix > :nth-child(2)').click()


        cy.get('#rollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Rollo-Menü: Rollo nach Farben')
        cy.argosScreenshot('Rollo-Menü: Rollo nach Farben', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#rollo-sub-menu > #rooms > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Rollo-Menü: Rollo für Räume')
        cy.argosScreenshot('Rollo-Menü: Rollo für Räume', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#rollo-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Rollo-Menü: Rollo nach Eigenschaften')
        cy.argosScreenshot('Rollo-Menü: Rollo nach Eigenschaften', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#rollo-sub-menu > #guide > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Rollo-Menü: Ratgeber')
        cy.argosScreenshot('Rollo-Menü: Ratgeber', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()




        //*******************************************************
        //******************DOPPELROLLO SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(3)').click()

        cy.get('#doppelrollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Doppelrollo-Menü: Doppelrollo nach Farben')
        cy.argosScreenshot('Doppelrollo-Menü: Doppelrollo nach Farben', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()




        //****************************************************
        //******************VORHÄNGE SUBMENU******************

        // VORHÄNGE mit Percy nicht testbar, denn Seite enthält zu viele Ressourcen.
        //Fehlermeldung: "Exceeded the number of resources allowed in a single snapshot. Limit: 500. Given: 601."

        cy.get('.nav-primary.clearfix > :nth-child(6)').click()


        cy.get('#vorhaenge-sub-menu > :nth-child(1) > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Vorhänge-Menü: Vorhänge')
        cy.argosScreenshot('Vorhänge-Menü: Vorhänge', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(2) > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Vorhänge-Menü: Gardinen')
        cy.argosScreenshot('Vorhänge-Menü: Gardinen', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(3) > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Vorhänge-Menü: Ösenschal')
        cy.argosScreenshot('Vorhänge-Menü: Ösenschal', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(4) > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Vorhänge-Menü: Schlaufenschal')
        cy.argosScreenshot('Vorhänge-Menü: Schlaufenschal', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(5) > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Vorhänge-Menü: Dekoschal')
        cy.argosScreenshot('Vorhänge-Menü: Dekoschal', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(8) > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Vorhänge-Menü: Zubehör')
        cy.argosScreenshot('Vorhänge-Menü: Zubehör', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        //***********************************************************
        //******************SCHIEBEGARDINEN SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(7)').click()

        cy.get('#schiebegardine-sub-menu > #colors > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Schiebegardinen-Menü: Schiebegardinen nach Farben')
        cy.argosScreenshot('Schiebegardinen-Menü: Schiebegardinen nach Farben', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#schiebegardine-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Schiebegardinen-Menü: Schiebegardinen nach Eigenschaften')
        cy.argosScreenshot('Schiebegardinen-Menü: Schiebegardinen nach Eigenschaften', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        //***********************************************************
        //******************RAFFROLLO SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(8)').click()


        cy.get('#raffrollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Raffrollo-Menü: Raffrollo nach Farben')
        cy.argosScreenshot('Raffrollo-Menü: Raffrollo nach Farben', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#raffrollo-sub-menu > #rooms > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Raffrollo-Menü: Raffrollo für Räume')
        cy.argosScreenshot('Raffrollo-Menü: Raffrollo für Räume', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#raffrollo-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Raffrollo-Menü: Raffrollo nach Eigenschaften')
        cy.argosScreenshot('Raffrollo-Menü: Raffrollo nach Eigenschaften', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()



        cy.get('#raffrollo-sub-menu > #guide > .menu-wrapper').invoke('show')
        // cy.percySnapshot('Raffrollo-Menü: Ratgeber')
        cy.argosScreenshot('Raffrollo-Menü: Ratgeber', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        cy.reload()
    })
})
















