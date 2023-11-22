sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementfreestylev4/test/integration/FirstJourney',
		'riskmanagementfreestylev4/test/integration/pages/RisksList',
		'riskmanagementfreestylev4/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementfreestylev4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);