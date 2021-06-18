        function getData() {
            var flname = document.getElementById("flname").value;
            var email = document.getElementById("email").value;
            var number = document.getElementById("number").value;
            var genderS = findGender("gender");
            var address = document.getElementById("address").value;
            var hobbieS = findHobbies("hobbies");
            var countrY = document.getElementById("country").value

            document.write("Profile Information <BR><br>" + "NAME : " + flname + "<br><br>");
            document.write("EMAIL:  " + email + "<br><br>");
            document.write("NUMBER: " + number + "<br><br>");
            document.write("GENDER: " + genderS + "<br><br>");
            document.write("ADDRESS: " + address + "<br><br>");
            document.write("HOBBIES: " + hobbieS + "<br><br>");
            document.write("COUNTRY: " + countrY);
        }

        function findHobbies(hobbies) {
            var test = document.getElementsByName(hobbies);
            var size = test.length;
            console.log(size);
            var returnString = "";
            for (i = 0; i < size; i++) {
                if (test[i].checked == true) {
                    returnString = returnString + test[i].value + ",";
                }
            }
            return returnString
        }

        function findGender(gender) {
            var test = document.getElementsByName(gender);
            var size = test.length;
            for (i = 0; i < size; i++) {
                if (test[i].checked == true) {
                    return test[i].value;
                }
            }
        }