sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementfioriv4/test/integration/FirstJourney',
		'riskmanagementfioriv4/test/integration/pages/RisksList',
		'riskmanagementfioriv4/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementfioriv4') + '/index.html'
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