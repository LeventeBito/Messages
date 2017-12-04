var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message. Very well done.', duration: 12000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'What do you think of this dialog?',  // message
        dialogDismissed,         // callback
        'Are you hungry?',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {new Toast({content: "I don't care!", duration: 6000}); hungryNotification();}
   	else if(buttonIndex==2) new Toast({content: "I still don't care", duration: 6000});

}

 
   
function createNotification() {
        		
		//
        //generate a time to post notification
        //
        var currentTime = new Date().getTime(); //current time
        var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second	
    //
    //setup notification
    //
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey",
        message: 	"Example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}
function hungryNotification() {
        		
		//
        //generate a time to post notification
        //
        var currentTime = new Date().getTime(); //current time
        var notificationTime = new Date(currentTime + 30000); //delayed time  - add 1 second	
    //
    //setup notification
    //
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Are you still hungry?",
        message: 	"I still really don't care",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}