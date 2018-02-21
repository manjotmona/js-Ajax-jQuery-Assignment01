function ValidateForm() {

    var status = 1;

    if ((document.registrationForm.gender[0].checked === false) && (document.registrationForm.gender[1].checked === false)) {
        status = 0;

        document.getElementById("genderValidation").innerHTML = "please select!!!!";
        document.getElementById("genderValidation").style.color = "red";
    }


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!document.registrationForm.email.value.match(mailformat)) {
        status = 0;
        document.getElementById("emailValidation").innerHTML = "enter valid emailid!!!!";
        document.getElementById("emailValidation").style.color = "red";


    }


    if (document.registrationForm.email.value !== document.registrationForm.confirmEmail.value) {
        status = 0;

        document.getElementById("confirmEmailValidation").innerHTML = "enter same mail!!!!";
        document.getElementById("confirmEmailValidation").style.color = "red";

    }

    var inpObj = document.getElementById("id1");

    if (inpObj.value.length !== 10) {
        status = 0;
        document.getElementById("phone").innerHTML = "enter valid number!!!!";
        document.getElementById("phone").style.color = "red";
    }

    var fname = document.getElementById("fname");
    if (fname.value.length === 0) {
        status = 0;

        document.getElementById("firstNameValidation").innerHTML = "please enter name!!!!";
        document.getElementById("firstNameValidation").style.color = "red";

    }


    if (status === 1) {


        document.write('Loading......');
        getInfo();
    }


}


function getInfo() {
    $.ajax({
        url: "https://reqres.in/api/users/10",
        async: false,
        dataType: 'json',
        beforeSend: function () {
        },
        type: "GET",
        cache: false,
        success: function (data) {
            document.write("<br>");
            document.writeln(data.data.id);
            document.write("<br>");
            document.writeln(data.data.first_name);
            document.write("<br>");
            document.write(data.data.last_name);
            document.write("<br>");
            document.write(data.data.avatar);
        },
        error: function (er) {
            console.log(er)
        }
    });
}
