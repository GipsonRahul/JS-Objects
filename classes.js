class Student {
    regno;
    name;
    address;
    department;
    gender; 
    dob;
    contactno;
    mark1;
    mark2;
    mark3;
    mark4;
    mark5;

    constructor(regnoArg ,nameArg ,addressArg ,departmentArg ,genderArg ,dobArg ,contactnoArg ,mark1Arg ,mark2Arg ,mark3Arg ,mark4Arg ,mark5Arg){
        regnoArg = document.getElementById('reg-no').value;
        this.regno = regnoArg;

        nameArg = document.getElementById('f-name').value;
        this.name = nameArg;

        addressArg = document.getElementById('address').value;
        this.address =   addressArg;

        departmentArg = document.getElementById('dept').value;
        this.department = departmentArg;

        genderArg = document.getElementById('gender').value;
        this.gender = genderArg;

        dobArg = document.getElementById('dob').value;
        this.dob = dobArg;

        contactnoArg = document.getElementById('contact-no').value;
        this.contactno = contactnoArg;

        mark1Arg = document.getElementById('mark-1').value;
        this.mark1 = mark1Arg;
        
        mark2Arg = document.getElementById('mark-2').value;
        this.mark2 = mark2Arg;
        
        mark3Arg = document.getElementById('mark-3').value;
        this.mark3 = mark3Arg;
        
        mark4Arg = document.getElementById('mark-4').value;
        this.mark4 = mark4Arg;
        
        mark5Arg = document.getElementById('mark-5').value;
        this.mark5 = mark5Arg;

    }

    getPrefix(){
        let prefix;
        if(this.gender == 'male' || this.gender == 'Male'){
            prefix = "Mr.";
        }else if(this.gender == 'female' || this.gender == 'Female'){
            prefix = "Ms.";
        }else{
            prefix = "NA";
        }

        return prefix;
    }
}

var stud;
let i =1;
let sect = document.querySelector('p');

function create(event){
    event.preventDefault();

    stud = new Student();
    
    if(i==1){           // This "if" executes only once
        table = document.createElement('table');
        sect.appendChild(table);
        table.appendChild(tableHeader());
        i--;
    }   

    table.appendChild(createRow(stud));

    sect = document.querySelector('tr');
    
}

function tableHeader(){
    let hrow = document.createElement('tr');

    let hcol = document.createElement('th');
    hcol.textContent = "Mr. / Ms.";
    hrow.appendChild(hcol);

    hcol = document.createElement('th');
    hcol.textContent = "RegNo";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Name";
    hrow.appendChild(hcol);

    hcol = document.createElement('th');
    hcol.textContent = "Address";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Department";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Gender";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Date of Birth";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Contact No.";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Mark 1";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Mark 2";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Mark 3";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Mark 4";
    hrow.appendChild(hcol);
    
    hcol = document.createElement('th');
    hcol.textContent = "Mark 5";
    hrow.appendChild(hcol);

    return hrow;
}

function createRow(student){
    let row = document.createElement('tr');

    let col = document.createElement('td');
    col.innerHTML= student.getPrefix();
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.regno;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.name;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.address;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.department;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.gender;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.dob;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.contactno;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.mark1;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.mark2;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.mark3;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.mark4;
    row.appendChild(col);

    col = document.createElement('td');
    col.textContent = student.mark5;
    row.appendChild(col);

    return row;
}