var http = createRequestObject();
var areal = Math.random() + "";
var real = areal.substring(2, 6);

function createRequestObject() {
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (f) {
      xmlhttp = null;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

function sendRequest() {
  var rnd = Math.random();
  var name = escape(document.getElementById("name").value);
  var email = escape(document.getElementById("email").value);
  var subject = escape(document.getElementById("subject").value);
  var body = escape(document.getElementById("body").value);

  try {
    http.open('POST', 'pform.php');
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = handleResponse;
    http.send('name=' + name + '&email=' + email + '&subject=' + subject + '&body=' + body + '&rnd=' + rnd);
  } catch (e) {} finally {}
}

function check_values() {
  var valid = '';

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var body = document.getElementById("body").value;
  if (trim(name) == "" ||
    trim(email) == "" ||
    trim(subject) == "" ||
    trim(body) == "") {
    alert("Please complete all fields");
  } else {
    if (isEmail(email)) {
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").value = 'Please Wait..';
      sendRequest();
    } else {
      alert("Email appears to be invalid\nPlease check and try again");
      document.getElementById("email").focus();
      document.getElementById("email").select();
    }
  }
}

function handleResponse() {
  try {
    if ((http.readyState == 4) && (http.status == 200)) {
      var response = http.responseText;
      document.getElementById("confirmation").innerHTML = response;
      document.getElementById("confirmation").style.display = "";
    }
  } catch (e) {} finally {}
}

function isUndefined(a) {
  return typeof a == 'undefined';
}

function trim(a) {
  return a.replace(/^s*(S*(s+S+)*)s*$/, "$1");
}

function isEmail(a) {
  return (a.indexOf(".") > 0) && (a.indexOf("@") > 0);
}
