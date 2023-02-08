var peopleData = [];
var personName;
var surName;
var gender;
var dateOfBirth;

var firstNameVowels;
var firstNameCosonant;
var str = 'XXX';
var merge;

var birthArray = [];
var firstNameArray = [];
var surNameArray = [];

// firstNameArray.push(3);
// firstNameArray.push('test');
// firstNameArray.push('test');
// console.log(firstNameArray);


function submitData() {

    
    personName = document.getElementById('Input1').value;
     surName = document.getElementById('Input2').value;
     gender = document.getElementById('Input3').value;
     dateOfBirth = document.getElementById('Input4').value;
   

    // console.log(personName);
    // console.log(surName);
    // console.log(gender);
    // console.log(dateOfBirth);

    // if (name == "" || surName == "" || gender == "" || dateOfBirth == "") {
    //     alert("All fields name must be filled out");
    //     return false;
    // }

   
    const data = { 
        name : personName,
        surName : surName,
        gender : gender,
        dateOfBirth : dateOfBirth,
        code : ""
    }


      peopleData.push(data);


    document.getElementById('Input1').value = "";
    document.getElementById('Input2').value = "";
    document.getElementById('Input3').value = "";
    document.getElementById('Input4').value = "";




    // birthArray.push(3);

    function nameCheck() {
        personName = personName.toUpperCase();
        surName = surName.toUpperCase();
    
        console.log(personName);
        console.log(surName);


        firstNameCosonant = personName.replace(/[a,e,i,o,u]/gi , "");
        console.log(" Cosonant "+ firstNameCosonant);

        firstNameVowels = personName.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'');
        console.log( " Vowel " + firstNameVowels);

        // console.log('the length of ' +firstNameCosonant.length);

        if(firstNameCosonant.length === 3) {

            // firstNameArray.push(firstNameCosonant);
            for(let i = 0; i<3 ; i++) {
                firstNameArray[i] = firstNameCosonant[i];
            }

        }
        else if(firstNameCosonant.length > 3) {
           
            for(let i = 0; i<3 ; i++) {
                firstNameArray[i] = firstNameCosonant[i];
            }
        }

        // console.log("GReater the 3 " + firstNameArray);
        else if(firstNameCosonant.length < 3) {

            merge = firstNameCosonant + firstNameVowels + str;
            firstNameArray = merge.slice(0,3);

        // console.log(merge);
        // console.log('The merge length is ' + merge.length);
        // console.log('Test first name Array '+firstNameArray);

            // firstNameArray.push(firstNameCosonant);

            // if(firstNameCosonant.length === 0 ) {

            //     firstNameArray.push(firstNameVowels[0]); 
            //     firstNameArray.push(firstNameVowels[1]); 
            //     firstNameArray.push(firstNameVowels[2]); 

            // }

            // else if(firstNameCosonant.length === 1 ) {

            //     firstNameArray.push(firstNameVowels[0]); 
            //     firstNameArray.push(firstNameVowels[1]); 

            // }else if (firstNameCosonant.length === 2) {

            //     firstNameArray.push(firstNameVowels[0]); 
            // }


            // for(let i = 0 ; i<3 ; i++) {
            //     let counter = firstNameCosonant.length;

            //     if(firstNameCosonant.length < 4) {
            //         firstNameArray[counter] = firstNameVowels[i];  
            //     }
            // }

        }

        // console.log("test Firstname array length : " + firstNameArray);
        // console.log("array length  is : " + firstNameArray.length);
       

       


    }
    
    nameCheck();




    function DateOfBirth(dateOfBirth) {
   
    
        var day = new Date(dateOfBirth).getDate();
        console.log(day);
    
        var month = new Date(dateOfBirth).getMonth();
        month += 1;
        console.log(month);
    
        var year = new Date(dateOfBirth).getFullYear();
        console.log(year);


        // To store year data in a array

        year = year.toString();
        
        year = year.slice(2,4);
        
        birthArray.push(year);
    

        const monthArray = ['A','B','C','D','E','F','G','H','I','J','K','T'];

         for(let i = 0 ; i< monthArray.length ; i++) {
            
            if(month === i+1) {
                
                birthArray.push(monthArray[i]);
            }
         }

       

         if(gender == 'male' && day < 10 ) {

            birthArray.push('0'+ day);
         }
         if(gender == 'female' && day < 10 ) {

            birthArray.push(40 + day);
         }else {
            birthArray.push( day.toString());
         }
         

         console.log('birthArray');
    
          console.log(birthArray);
        
    }
    
    
    DateOfBirth(dateOfBirth);
    
    
   
   









    onLoadData(peopleData);

  
}


function onLoadData(peopleData) {
   document.getElementById('body').innerHTML = createTable(peopleData);

  
}

function createTable(peopleData) {
    var row = "<tr>";

    peopleData.forEach((value) => {
        // console.log(value.id);

        row += `<td> ${value.name} </td>`;
        row += `<td> ${value.surName} </td>`;
        row += `<td> ${value.gender} </td>`;
        row += `<td> ${value.dateOfBirth} </td>`;
        row += `<td> ${value.code} </td> </tr>`;
        
        

    });

    return row;
}