
describe('Integration test with visual testing - diverse submenus', function () {


    it('Visueller Test der vorhandenen aufklappbaren Submenus verschiedener Produktgruppen', function () {

        cy.visit('/')

        //***************************************************
        //******************PLISSEE SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(1)').click()
        //ignore youtube videos
        cy.ignoreYouTube()


        cy.get('#plissee-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Plissee-Menü: Plissee nach Farben', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6  // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#plissee-sub-menu #rooms > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Plissee-Menü: Plissee für Räume', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#plissee-sub-menu #characteristics > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Plissee-Menü: Plissee nach Eigenschaften', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#plissee-sub-menu #guide > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Plissee-Menü: Ratgeber', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });



        //***************************************************
        //******************ROLLO SUBMENU********************

        cy.get('.nav-primary.clearfix > :nth-child(2)').click()
        //ignore youtube videos
        cy.ignoreYouTube()


        cy.get('#rollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Rollo-Menü: Rollo nach Farben', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#rollo-sub-menu > #rooms > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Rollo-Menü: Rollo für Räume', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#rollo-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Rollo-Menü: Rollo nach Eigenschaften', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#rollo-sub-menu > #guide > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Rollo-Menü: Ratgeber', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });



        //*******************************************************
        //******************DOPPELROLLO SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(3)').click()
        //ignore youtube videos
        cy.ignoreYouTube()


        cy.get('#doppelrollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Doppelrollo-Menü: Doppelrollo nach Farben', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });



        //****************************************************
        //******************VORHÄNGE SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(6)').click()
        //ignore youtube videos
        cy.ignoreYouTube()


        cy.get('#vorhaenge-sub-menu > :nth-child(1) > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Vorhänge-Menü: Vorhänge', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(2) > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Vorhänge-Menü: Gardinen', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(3) > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Vorhänge-Menü: Ösenschal', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(4) > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Vorhänge-Menü: Dekoschal', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        cy.get('#vorhaenge-sub-menu > :nth-child(7) > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Vorhänge-Menü: Zubehör', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        //***********************************************************
        //******************SCHIEBEGARDINEN SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(7)').click()
        //ignore youtube videos
        cy.ignoreYouTube()


        cy.get('#schiebegardine-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Schiebegardinen-Menü: Schiebegardinen nach Farben', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        cy.get('#schiebegardine-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Schiebegardinen-Menü: Schiebegardinen nach Eigenschaften', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        //***********************************************************
        //******************RAFFROLLO SUBMENU******************

        cy.get('.nav-primary.clearfix > :nth-child(8)').click()
        //ignore youtube videos
        cy.ignoreYouTube()



        cy.get('#raffrollo-sub-menu > #colors > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Raffrollo-Menü: Raffrollo nach Farben', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        //cy.reload()


        cy.get('#raffrollo-sub-menu > #rooms > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Raffrollo-Menü: Raffrollo für Räume', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        //cy.reload()


        cy.get('#raffrollo-sub-menu > #characteristics > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Raffrollo-Menü: Raffrollo nach Eigenschaften', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        //cy.reload()


        cy.get('#raffrollo-sub-menu > #guide > .menu-wrapper').invoke('show')
        cy.argosScreenshot('Raffrollo-Menü: Ratgeber', {
            viewports: [
                // "iphone-6", // Use device preset for iphone-6 // --> Menü bei mobile viewport nicht vorhanden
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        //cy.reload()
    })
})
















