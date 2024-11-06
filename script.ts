const MAX_FIELDS = 10;

function addNewField(): void {
    const weOb: HTMLElement | null = document.getElementById("we");
    const weAddButton: HTMLElement | null = document.getElementById("weAddButton");

    if (weOb && weAddButton) {
        const currentFields: HTMLCollectionOf<Element> = weOb.getElementsByClassName("weField");

        if (currentFields.length < MAX_FIELDS) {
            const newNode: HTMLTextAreaElement = document.createElement("textarea");
            newNode.classList.add("input", "weField");
            newNode.setAttribute("rows", "3");
            weOb.insertBefore(newNode, weAddButton);
        } else {
            alert("Maximum number of fields reached!");
        }
    } else {
        console.error("Element with ID 'we' or 'weAddButton' not found.");
    }
}




// Get the html resume form and display resume section here :

 const form = document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

 // Form submission :

form.addEventListener('submit' , (event:Event)=>{
     event.preventDefault(); 

     const name = (document.getElementById('inputname') as HTMLInputElement).value
     const email = (document.getElementById('inputemail') as HTMLInputElement).value
     const address = (document.getElementById('inputaddress') as HTMLInputElement).value     
     const phone = (document.getElementById('inputnumber') as HTMLInputElement).value
     const objective = (document.getElementById('cobj') as HTMLInputElement).value
     const education = (document.getElementById('edu') as HTMLInputElement).value
     const skills = (document.getElementById('skill') as HTMLInputElement).value
     const languages = (document.getElementById('lan') as HTMLInputElement).value
     const hobbies = (document.getElementById('hobbies') as HTMLInputElement).value

     // Dynamic resume generated here :
     const resumeHTML = `
     <div class="resume-display">
         <div class="profile">
             <div class="name">${name}</div>
             <h3 class="title">Contact Info</h3>
                 <div class="contact">
                     <ul>
                         <li class="icon"><i class="fa fa-phone"></i> ${phone}</li>
                         <li class="icon"><i class="fa fa-envelope"></i> ${email}</li>
                         <li class="icon"><i class="fa fa-map-marker"></i> ${address}</li>
                     </ul>
                 </div>

             <h3 class="title">Career Objective</h3>
                 <div class="obj">
                     <p>${objective}</p>
                 </div>

             <h3 class="title">Education</h3>
                 <div class="edu">
                     <p>${education}</p>                </div>
            
             <h3 class="title">Technical Skills</h3>
                 <div class="ts">
                     <p>${skills}</p>
              </div>
    
                
             <h3 class="title">Languages</h3>
                 <div class="lan">
                     <p>${languages}</p>
                    
                 </div>
             <h3 class="title">Hobbies</h3> 
              <div class="hobbies">
                 <p>${hobbies}</p>
             </div>
        
                
         </div>
     </div>
 `;
   // Display the resume:
   resumeDisplay.innerHTML = resumeHTML;
 });
    