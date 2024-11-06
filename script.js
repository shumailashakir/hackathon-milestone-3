var MAX_FIELDS = 10;
function addNewField() {
    var weOb = document.getElementById("we");
    var weAddButton = document.getElementById("weAddButton");
    if (weOb && weAddButton) {
        var currentFields = weOb.getElementsByClassName("weField");
        if (currentFields.length < MAX_FIELDS) {
            var newNode = document.createElement("textarea");
            newNode.classList.add("input", "weField");
            newNode.setAttribute("rows", "3");
            weOb.insertBefore(newNode, weAddButton);
        }
        else {
            alert("Maximum number of fields reached!");
        }
    }
    else {
        console.error("Element with ID 'we' or 'weAddButton' not found.");
    }
}
// Get the html resume form and display resume section here :
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Form submission :
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('inputname').value;
    var email = document.getElementById('inputemail').value;
    var address = document.getElementById('inputaddress').value;
    var phone = document.getElementById('inputnumber').value;
    var objective = document.getElementById('cobj').value;
    var education = document.getElementById('edu').value;
    var skills = document.getElementById('skill').value;
    var languages = document.getElementById('lan').value;
    var hobbies = document.getElementById('hobbies').value;
    // Dynamic resume generated here :
    var resumeHTML = "\n     <div class=\"resume-display\">\n         <div class=\"profile\">\n             <div class=\"name\">".concat(name, "</div>\n             <h3 class=\"title\">Contact Info</h3>\n                 <div class=\"contact\">\n                     <ul>\n                         <li class=\"icon\"><i class=\"fa fa-phone\"></i> ").concat(phone, "</li>\n                         <li class=\"icon\"><i class=\"fa fa-envelope\"></i> ").concat(email, "</li>\n                         <li class=\"icon\"><i class=\"fa fa-map-marker\"></i> ").concat(address, "</li>\n                     </ul>\n                 </div>\n\n             <h3 class=\"title\">Career Objective</h3>\n                 <div class=\"obj\">\n                     <p>").concat(objective, "</p>\n                 </div>\n\n             <h3 class=\"title\">Education</h3>\n                 <div class=\"edu\">\n                     <p>").concat(education, "</p>                </div>\n            \n             <h3 class=\"title\">Technical Skills</h3>\n                 <div class=\"ts\">\n                     <p>").concat(skills, "</p>\n              </div>\n    \n                \n             <h3 class=\"title\">Languages</h3>\n                 <div class=\"lan\">\n                     <p>").concat(languages, "</p>\n                    \n                 </div>\n             <h3 class=\"title\">Hobbies</h3> \n              <div class=\"hobbies\">\n                 <p>").concat(hobbies, "</p>\n             </div>\n        \n                \n         </div>\n     </div>\n ");
    // Display the resume:
    resumeDisplay.innerHTML = resumeHTML;
});
