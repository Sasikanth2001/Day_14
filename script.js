//<label for = "email">Email</label>
function label_create(ele_name,attr_name_1,attr_value_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_value_2);
    ele.innerHTML = content;
    return ele;
}
//var label = label_create("lable","for","email","Email");
//document.body.append(label);

//<br>
function break_create(){
    var br = document.createElement("br");
    return br;
}
//<input type= "email" id="email">
function input_create(ele_name,attr_name_1,attr_value_1,id_val_1){
    var input = document.createElement(ele_name);
     input.setAttribute(attr_name_1,attr_value_1);
     input.id = id_val_1;
     return input;
}
var label_firstName = label_create("label","for","firstname","Firstname");
var break_1=break_create();
var firstName = input_create("input","type","firstname","firstname");
var break_2 = break_create();

var label_middleName = label_create("label","for","middlename","Middlename")
var break_3=break_create();
var middleName = input_create("input","type","middlename","middlename");
var break_4 = break_create();

var label_lastName = label_create("label","for","lastname","Lastname")
var break_5=break_create();
var lastName = input_create("input","type","lastname","lastname");
var break_6 = break_create();

var label_emailName = label_create("label","for","email","Email");
var break_7=break_create();
var emailName = input_create("input","type","email","Email");
var break_8 = break_create();

var label_password= label_create("label","for","password","Password")
var break_9=break_create();
var password = input_create("input","type","password","Password");
var break_10 = break_create();

var label_phone = label_create("label","for","Phone","Phone")
var break_11=break_create();
var phone = input_create("input","type","phone","lPhone");
var break_12 = break_create();

document.body.append(
    label_firstName,break_1,firstName,break_2,
    label_middleName,break_3,middleName,break_4,
    label_lastName,break_5, lastName,break_6,
    label_emailName,break_7,emailName,break_8,
    label_password,break_9,password,break_10,
    label_phone,break_11,phone,break_12,
);
