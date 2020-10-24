







function gettakeid1() {
    var sref1 = localStorage.getItem("ref1_webpr");
    return sref1;

}

function gettakeid2() {
    var sref2 = localStorage.getItem("ref2_webpr");
    return sref2;
}


function getlogin() {

    var sref1 = localStorage.getItem("ref1_webpr");
    var sref2 = localStorage.getItem("ref2_webpr");

    //document.write(sref1);
    //document.write(sref2);
    if (sref1 == "" || sref2 == "" || sref1 == null || sref2 == null) {

        location.href = "users.aspx";
    }


    
}

function companyinfo() {

}

