/*
One Very Important User (VIU) has a Very Confidential Document (VCD)
stored on his Dropbox account. He doesn't let anyone see the VCD,
especially his roommates who often have access to his devices.

Opening the Dropbox mobile app on the VIU's tablet requires
a four-digit passcode. To ensure the confidentiality of the stored
information, the device is locked out of Dropbox after 10 consecutive
failed passcode attempts. We need to implement a function that given
an array of attempts made throughout the day and the correct passcode 
checks to see if the device should be locked, i.e. 10 or more 
consecutive failed passcode attempts were made.

Link to the description: http://bit.ly/antoncodeit-description-3
Link to the live coding: http://bit.ly/antoncodeit-live-3
*/

function incorrectPasscodeAttempts(passcode, attempts) {
    let counter = 0;

    for (let i = 0; i < attempts.length; i++) {
        if (attempts[i] === passcode) {
            counter = 0;
        } else {
            counter++;
        }

        if (counter === 10) {
            return true;
        }
    }

    return false;
}
