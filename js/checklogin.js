var userid;
userid = localStorage.getItem('userid');
if (userid=="" || userid==null) {
    location.href = "login.html";
}
