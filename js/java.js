var peopleData = [];
var personName;
var surName;
var gender;
var dateOfBirth;

var birthArray = [];
var nameArray = [];

// console.log(birthArray.length);

// birthArray.push(3);
// birthArray.push('c');
// console.log(birthArray);
// const monthCode =[];

// var name1 = "Matt";
// var surName1 = "Edabit";
// var gender1 = "male";
// var dob = "1/1/1900";


// console.log('test');

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
    
        // console.log(personName);
        // console.log(surName);


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
         }
         

         console.log('birthArray');
    
          console.log(birthArray);
        
    }
    
    
    DateOfBirth(dateOfBirth);
    
    
   
   









    onLoadData(peopleData);

  
}








// console.log(test);

// function validation(name1 , surName1 , gender1 , dob) {

//     console.log('This is testing people data');
//     console.log(name1);
//     console.log(surName1);
//     console.log(gender1);
//     console.log(dob);

//     for(let i = 0 ; i<name1.length ; i++) {
//         // console.log(name1[i]);
//         if(name1[i] == 'a' || name1[i] == 'e' || name1[i] == 'i' || name1[i] == 'o' || name1[i] == 'u') {
            
//             console.log("if" + name1[i]);
//         }
//         else {
//             console.log("else if" + name1[i]);
//         }
//     }

    
    
// }

// validation(name1 , surName1 , gender1 , dob);





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