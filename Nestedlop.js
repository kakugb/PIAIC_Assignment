"use strict";
var FirstName = ["Karamat", "Zulqarnain", "Mubarak", "Ilyas"];
var LastName = ["Ali", "Abbas", "Shah", "Azad"];
var FullName = [];
for (var i = 0; i < FirstName.length; i++) {
    for (var j = 0; j < LastName.length; j++) {
        FullName.push(FirstName[i] + " " + LastName[j]);
        console.log(FullName);
    }
}
