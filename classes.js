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
        
        this.regno = regnoArg;
        this.name = nameArg;
        this.address =   addressArg;
        this.department = departmentArg;
        this.gender = genderArg;
        this.dob = dobArg;
        this.contactno = contactnoArg;
        this.mark1 = mark1Arg;
        this.mark2 = mark2Arg;
        this.mark3 = mark3Arg;
        this.mark4 = mark4Arg;
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

let students = [];
let isFirstTime = true;
let sect = document.querySelector('#res');
let table = document.createElement('table');
table.setAttribute('id' ,'mytable');
sect.appendChild(table);

function updateForm(event){
    event.preventDefault();

    let index = this.dataset.id;
    // let x =document.getElementById('mytable').rows[index];
    // x.classList.add('selected');

    // set current student data in the form
    document.getElementById('reg-no').value = students[index-1].regno;
    document.getElementById('f-name').value = students[index-1].name;
    document.getElementById('address').value = students[index-1].address;
    document.getElementById('dept').value = students[index-1].department;
    document.getElementById('gender').value = students[index-1].gender;
    document.getElementById('dob').value = students[index-1].dob;
    document.getElementById('contact-no').value = students[index-1].contactno;
    document.getElementById('mark-1').value = students[index-1].mark1;
    document.getElementById('mark-2').value = students[index-1].mark2;
    document.getElementById('mark-3').value = students[index-1].mark3;
    document.getElementById('mark-4').value = students[index-1].mark4;
    document.getElementById('mark-5').value = students[index-1].mark5;

    document.getElementById('update-btn').addEventListener('click' ,update);

    function update(event){
        event.preventDefault();

        // let x =document.getElementById('mytable').rows[index];
        // x.classList.remove('selected');

        // update data property of update button
        let regnoArg = document.getElementById('reg-no').value;
        students[index-1].regno = regnoArg;
        let nameArg = document.getElementById('f-name').value;
        students[index-1].name = nameArg;
        let addressArg = document.getElementById('address').value;
        students[index-1].address = addressArg;
        let departmentArg = document.getElementById('dept').value;
        students[index-1].department = departmentArg;
        let genderArg = document.getElementById('gender').value;
        students[index-1].gender = genderArg;
        let dobArg = document.getElementById('dob').value;
        students[index-1].dob = dobArg;
        let contactnoArg = document.getElementById('contact-no').value;
        students[index-1].contactno = contactnoArg;
        let mark1Arg = document.getElementById('mark-1').value;
        students[index-1].mark1 = mark1Arg;
        let mark2Arg = document.getElementById('mark-2').value;
        students[index-1].mark2 = mark2Arg;
        let mark3Arg = document.getElementById('mark-3').value;
        students[index-1].mark3 = mark3Arg;
        let mark4Arg = document.getElementById('mark-4').value;
        students[index-1].mark4 = mark4Arg;
        let mark5Arg = document.getElementById('mark-5').value;
        students[index-1].mark5 = mark5Arg;

        let prefix;
        if(genderArg == 'male' || genderArg == 'Male'){
            prefix = "Mr.";
        }else if(genderArg == 'female' || genderArg == 'Female'){
            prefix = "Ms.";
        }else{
            prefix = "NA";
        }
    
        document.getElementById('mytable').rows[index].cells[0].innerHTML = prefix;
        document.getElementById('mytable').rows[index].cells[1].innerHTML = students[index-1].regno;
        document.getElementById('mytable').rows[index].cells[2].innerHTML = students[index-1].name;
        document.getElementById('mytable').rows[index].cells[3].innerHTML = students[index-1].address;
        document.getElementById('mytable').rows[index].cells[4].innerHTML = students[index-1].department;
        document.getElementById('mytable').rows[index].cells[5].innerHTML = students[index-1].gender;
        document.getElementById('mytable').rows[index].cells[6].innerHTML = students[index-1].dob;
        document.getElementById('mytable').rows[index].cells[7].innerHTML = students[index-1].contactno;
        document.getElementById('mytable').rows[index].cells[8].innerHTML = students[index-1].mark1;
        document.getElementById('mytable').rows[index].cells[9].innerHTML = students[index-1].mark2;
        document.getElementById('mytable').rows[index].cells[10].innerHTML = students[index-1].mark3;
        document.getElementById('mytable').rows[index].cells[11].innerHTML = students[index-1].mark4;
        document.getElementById('mytable').rows[index].cells[12].innerHTML = students[index-1].mark5;
    }
}

function removeElement(event){
    event.preventDefault();

    let index = this.dataset.id;
    
    students.splice(index-1 ,1);
    document.getElementById('mytable').deleteRow(index);
    console.log(students);
}

function create(event){
    event.preventDefault();

    let regnoArg = document.getElementById('reg-no').value;
    let nameArg = document.getElementById('f-name').value;
    let addressArg = document.getElementById('address').value;
    let departmentArg = document.getElementById('dept').value;
    let genderArg = document.getElementById('gender').value;
    let dobArg = document.getElementById('dob').value;
    let contactnoArg = document.getElementById('contact-no').value;
    let mark1Arg = document.getElementById('mark-1').value;
    let mark2Arg = document.getElementById('mark-2').value;
    let mark3Arg = document.getElementById('mark-3').value;
    let mark4Arg = document.getElementById('mark-4').value;
    let mark5Arg = document.getElementById('mark-5').value;
    let stud;

    stud = new Student(regnoArg ,nameArg ,addressArg ,departmentArg ,genderArg ,dobArg ,contactnoArg ,mark1Arg ,mark2Arg ,mark3Arg ,mark4Arg ,mark5Arg);
    
    students.push(stud);
    
    if(isFirstTime){           // This "if" executes only once
        
        table.appendChild(tableHeader());
        isFirstTime = false;
    }   
    table.appendChild(createRow(stud));
    
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

    hcol = document.createElement('th');
    hcol.textContent = "Action";
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

    col = document.createElement('td');

    let edit = document.createElement('button');
    let remove = document.createElement('button');  
    edit.textContent = "Edit";
    remove.textContent = "Remove";
    edit.dataset.id = (students.length);
    remove.dataset.id = (students.length);
    edit.addEventListener('click' ,updateForm);
    remove.addEventListener('click' ,removeElement);

    col.appendChild(edit);
    col.appendChild(remove);

    row.appendChild(col);

    document.getElementById('reg-no').value = "";
    document.getElementById('f-name').value = "";
    document.getElementById('address').value = "";
    document.getElementById('dept').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('contact-no').value = "";
    document.getElementById('mark-1').value = "";
    document.getElementById('mark-2').value = "";
    document.getElementById('mark-3').value = "";
    document.getElementById('mark-4').value = "";
    document.getElementById('mark-5').value = "";

    return row;

}