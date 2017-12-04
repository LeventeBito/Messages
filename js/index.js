var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
        
        
        
        
		createNotification("Title", "Message", notificationTime);
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
	
	if(buttonIndex==1) {
        new Toast({content: "I don't care!", duration: 6000}); 
        createNotification("Title", "Message", scheduleTime(30000));
    
    }
   	else if(buttonIndex==2) new Toast({content: "I still don't care", duration: 6000});

}

 function scheduleTime(delay) {
     //
        //generate a time to post notification
        //
        var currentTime = new Date().getTime(); //current time
        var notificationTime = new Date(currentTime + delay); //delayed time  - add 1 second
        return notificationTime;
 }  

   
function createNotification(title, message, notficationTime) {
        		
			
    //
    //setup notification
    //
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		title,
        message: 	message,
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}