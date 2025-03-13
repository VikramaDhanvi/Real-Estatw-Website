    document.addEventListener("DOMContentLoaded", function() {
        var loginLink = document.querySelector(".account > li > a[href='Buyer_Login.html']");
        var userTypeList = document.querySelector(".user-type");

        loginLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Toggle the visibility of the user type list
            if (userTypeList.style.display === "none") {
                userTypeList.style.display = "block";
            } else {
                userTypeList.style.display = "none";
            }
        });
    });
