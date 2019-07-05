var Messages = {
    // Add here your messages for the default language.
    // Generate a similar file with a language suffix containing the translated messages.
    // key1 : message1,
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){

    //MFP APIs should only be called within wlCommonInit() or after it has been called, to ensure that the APIs have loaded properly

	// Common initialization code goes here
    document.getElementById('app_version').textContent = WL.Client.getAppProperty("APP_VERSION");
    document.getElementById('mobilefirst').setAttribute('style', 'display:block;');
}

function actionLog (level){
    var logger = WL.Logger.create({pkg: 'com.example.helloworld'});

    switch (level) {
        case constants.TRACE:
            logger.trace("mensaje trace");
            break;
        case constants.DEBUG:
            logger.debug("mensaje debug");
        break;

        case constants.LOG:
            logger.log("mensaje log");
        break;

        case constants.INFO:
            logger.info("mensaje info");
        break;

        case constants.WARN:
            logger.warn("mensaje warn");
        break;

        case constants.ERROR:
        logger.error("mensaje de error");
        break;

        case constants.FATAL:
        logger.fatal("mensaje de fatal");
        break;

        default:
                logger.trace("click todos");
                logger.debug("click todos");
                logger.log("click todos");
                logger.info("click todos");
                logger.warn("click todos");
                logger.error("click todos");
                logger.fatal("click todos");
            break;
    }

    WL.Logger.send();

}

function eventLog(eventName){
    var eventObject = {
        eventName: eventName,
        eventData :'some data',
        errorLog : ''
    }; 

    WL.Analytics.log({"eventClick" : eventLog});
    WL.Analytics.send();
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, 'app.receivedEvent(...);' must be explicitly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update the DOM on a received event.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



app.initialize();
