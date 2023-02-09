var peopleData = [];
var personName;
var surName;
var gender;
var dateOfBirth;

var firstNameVowels;
var firstNameCosonant;
var surNameVowels;
var surNameCosonant;
var str = 'XXX';
var merge ;
var merge2 ;

var birthArray = [];
var firstNameArray = [];
var surNameArray = [];
var resultArray = [];
var result;

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

    if (personName == "" || surName == "" || gender == "" || dateOfBirth == "") {
        alert("All fields name must be filled out");
        return false;
    }

   
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
        // console.log(" first Cosonant "+ firstNameCosonant);

        firstNameVowels = personName.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'');
        // console.log( "first Vowel " + firstNameVowels);


       
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


        }

        // console.log("test Firstname array length : " + firstNameArray);
        // console.log("array length  is : " + firstNameArray.length);
       

        surNameCosonant = surName.replace(/[a,e,i,o,u]/gi , "");
        console.log(" second Cosonant "+ surNameCosonant);

        surNameVowels = surName.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'');
        console.log( "second Vowel " + surNameVowels);

        if (surNameCosonant.length > 3) {
            for(let i = 0; i<4 ; i++) {
                if(i === 1) {
                    continue;
                }
                else {
                    surNameArray[i] = surNameCosonant[i];
                }
                
            }

        }

        else if(surNameCosonant.length === 3) {

            // firstNameArray.push(firstNameCosonant);
            for(let i = 0; i<3 ; i++) {
                surNameArray[i] = surNameCosonant[i];
            }

        }
        else if(surNameCosonant.length < 3) {

            merge2 = surNameCosonant + surNameVowels + str;
            surNameArray = merge2.slice(0,3);


        }



        console.log('TEst surname array ' + surNameArray );


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
         else if(gender == 'female' && day < 10 ) {

            birthArray.push(40 + day);
         }else {
            birthArray.push( day.toString());
         }
         

         console.log('birthArray');
    
          console.log(birthArray);
        
    }
    
    
    DateOfBirth(dateOfBirth);
    
    
   function mergeData() {

   
   resultArray = surNameArray.concat(firstNameArray, birthArray);
   console.log('The result of concat array ');
   console.log("Result Array "+ resultArray);
   
   result = resultArray.toString();
   console.log('Result ' + result);

   result = result.replace(/[,]/gi, '');
   console.log('Result ' + result);
      
   }

   mergeData();



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
        row += `<td> ${result} </td> </tr>`;
        
       
    });

    return row;

    
}