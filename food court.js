let pages = {
    "home": "home.html",
    "gallery": "gallery.html",
    "about us": "aboutus.html",
    "contact us": "contact.html",
    "mini water park": "mini_water_park.html",
    "food court": "food_court.html",
    "fun fair": "fun_fair.html",  // Ensure this is correct
    "ticket prices": "ticket.html"
};
document.addEventListener("DOMContentLoaded", function () {
    let searchToggle = document.querySelector(".searchToggle");
    let searchBox = document.querySelector(".search-box");
    
    searchToggle.addEventListener("click", function () {
        searchToggle.classList.toggle("active");
        searchBox.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.querySelector(".search-faild input");
    let searchIcon = document.querySelector(".search-faild i");

    // Updated pages object including dropdown items
    let pages = {
        "home": "home.html",
        "gallery": "gallery.html",
        "about us": "aboutus.html",
        "contact us": "contact.html",
        "mini water park": "mini water park.html",
        "food court": "food court.html",
        "fun fair": "fun fair.html",
        "ticket prices": "ticket.html"
    };

    function searchPage() {
        let query = searchInput.value.toLowerCase().trim(); // Get input value & format it

        if (query in pages) {
            window.location.href = pages[query]; // Redirect to matched page
        } else {
            alert("Page not found!"); // Show alert if page doesn't exist
        }
    }

    // Trigger search on search icon click
    searchIcon.addEventListener("click", searchPage);

    // Trigger search on Enter key press
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchPage();
        }
    });
});
function searchPage() {
    let query = searchInput.value.toLowerCase().trim();
    console.log(query);  // Check the search input in the console
    
    if (query in pages) {
        window.location.href = pages[query];
    } else {
        alert("Page not found!");
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
      alert("Thank you for your order!");
    });
  });
  
gsap.from("#details h1", {
    opacity: 0, // Initial opacity is 0 (invisible)
    duration: 1.5,
    y: -60,
    scrollTrigger: {
        trigger: "#details h1",
        scroll: "body",
        start: "top 45%", // Start when h1 is 45% in view
        end: "top 45%",
    }
});

gsap.from("#details p", {
    opacity: 0, // Initial opacity is 0 (invisible)
    duration: 1.6,
    y: 70,
    scrollTrigger: {
        trigger: "#details h1",
        scroll: "body",
        start: "top 55%", // Start when p is 55% in view
        end: "top 55%",
    }
});

gsap.from("#rvideo", {
    opacity: 0, // Make it fully invisible initially
    duration: 1.3,
    x: -70,
    scrollTrigger: {
        trigger: "#rvideo2",
        scroll: "body",
        start: "top 40%", // Trigger animation when 40% of the element is in view
        end: "top 40%",
    }
});

gsap.from("#rvideo2", {
    opacity: 0, // Make it fully invisible initially
    duration: 1.3,
    x: 70,
     
    scrollTrigger: {
        trigger: "#rvideo",
        scroll: "body",
        start: "top 40%", // Trigger when the element reaches 40% of the screen
        end: "top 40%",
    }
});
gsap.from(".container1 h2", {
    opacity: 0, // Initial opacity is 0 (invisible)
    duration: 1.5,
    y: -60,
    scrollTrigger: {
        trigger: ".container1 h2",
        scroll: "body",
        start: "top 45%", // Start when h1 is 45% in view
        end: "top 45%",
    }
});
gsap.from("#menuline p", {
    opacity: 0, // Initial opacity is 0 (invisible)
    duration: 1.5,
    y: -60,
    scrollTrigger: {
        trigger: "#menuline p",
        scroll: "body",
        start: "top 45%", // Start when h1 is 45% in view
        end: "top 45%",
    }
});
gsap.from("#lww h2", {
    opacity: 0, // Initial opacity is 0 (invisible)
    duration: 1.5,
    y: -60,
    scrollTrigger: {
        trigger: "#lww h2",
        scroll: "body",
        start: "top 45%", // Start when h1 is 45% in view
        end: "top 45%",
    }
});

 // Subscriptions start
 window.onload = function () {
    // Get necessary elements
    const form = document.querySelector("#Subscription .form20");
    const emailInput = document.querySelector("#Subscription input");
    const signUpButton = document.querySelector("#Subscription button");

    // Add event listener to the sign-up button
    signUpButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

        if (email === "") {
            alert("Please enter your email!");
        } else if (!emailPattern.test(email)) {
            alert("Invalid email address!");
        } else {
            alert("Thank you for signing up!");
            emailInput.value = ""; // Clear input after success
        }
    });

    // GSAP animations for different elements
    gsap.from("#Subscription .Subscription-text h4", {
        opacity: -0.5,
        duration: 1.3,
        x: 150,
        scrollTrigger: {
            trigger: "#Subscription .Subscription-text h4",
            scroll: "body",
            start: "top 80%",
            end: "top 30%",
        }
    });
    gsap.from("#Subscription .Subscription-text p", {
        opacity: 1,  // Make sure opacity starts from 1 (fully visible)
        duration: 1.5,
        y: -40,
        scrollTrigger: {
            trigger: "#Subscription .Subscription-text p",
            scroll: "body",
            start: "top 80%",
            end: "top 30%",
        }
    });
    
     

    gsap.from("#Subscription .form20", {
        opacity: 0,
        duration: 1.5,
        x: 0,
        stagger: { amount: 1 },
        scrollTrigger: {
            trigger: "#Subscription .form20",
            scroll: "body",
            start: "top 90%",
            end: "top 30%",
        }
    });
};

 // Subscriptions end
 
gsap.from("footer .colu .logo",{
    opacity:0,
    delay:0.5,
    x:20,
    scrollTrigger:{
        trigger:"footer .colu .logo",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .colu h4",{
    opacity:-0.5,
    duration:1.3,
    x:-100,
    scrollTrigger:{
        trigger:"footer .colu h4",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .colu p",{
    opacity:-0.5,
    duration:1.3,
    x:-100,
    scrollTrigger:{
        trigger:"footer .colu p",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .colu .follow .ichons",{
    opacity:-0.8,
    duration:1.3,
    y:-50,
    scrollTrigger:{
        trigger:"footer .colu .follow .ichons",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  
  gsap.from("footer .colu a",{
    opacity:-0.8,
    duration:1.3,
    y:-50,
    scrollTrigger:{
        trigger:"footer .colu a",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  
  gsap.from("footer .colu-inst h4",{
    opacity:-0.5,
    duration:1.3,
    x:100,
    scrollTrigger:{
        trigger:"footer .colu-inst h4",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .colu-inst p",{
    opacity:-0.5,
    duration:1.3,
    y:-50,
    scrollTrigger:{
        trigger:"footer .colu-inst p",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .colu-inst .logo2",{
    opacity:-0.5,
    duration:1.3,
    y:-60,
    scrollTrigger:{
        trigger:"footer .colu-inst .logo2",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .colu-inst .logo",{
    opacity:-0.5,
    duration:1.3,
    y:-60,
    scrollTrigger:{
        trigger:"footer .colu-inst .logo",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
    }
  })
  gsap.from("footer .copyright p",{
    opacity:-0.5,
    duration:1.3,
    y:60,
    scrollTrigger:{
        trigger:"footer .copyright p",
        scroll:"body",
    }
  });
    // booking ticket
   
    $(document).ready(function () {
        // Dropdown change event
        $("#category").change(function () {
          const category = $(this).val();
          if (category === "adult") {
            $("#numAdults").prop("disabled", false);
            $("#numChildren").prop("disabled", true);
          } else if (category === "child") {
            $("#numChildren").prop("disabled", false);
            $("#numAdults").prop("disabled", true);
          }
        });
    
        // Confirm button functionality
        $("#confirmButton").click(function () {
          const numPersons = parseInt($("#numPersons").val()) || 0;
          const numAdults = parseInt($("#numAdults").val()) || 0;
          const numChildren = parseInt($("#numChildren").val()) || 0;
    
          // Calculate total price
          const adultPrice = 200;
          const childPrice = 100;
    
          const totalAdultAmount = numAdults * adultPrice;
          const totalChildAmount = numChildren * childPrice;
          const totalAmount = totalAdultAmount + totalChildAmount;
    
          // Validate entries
          if (!numPersons || (!numAdults && !numChildren)) {
            $("#output").text("Please fill all required fields correctly.");
            return;
          }
    
          // Display output
          $("#output").html(
            `Details:<br>` +
            `Total Persons: ${numPersons}<br>` +
            `Number of Adults: ${numAdults}<br>` +
            `Number of Children: ${numChildren}<br>` +
            `Total Adult Amount: ${totalAdultAmount}<br>` +
            `Total Child Amount: ${totalChildAmount}<br>` +
            `Grand Total: ${totalAmount}`
          );
    
          // Save data in an object (optional)
          const data = {
            numPersons,
            numAdults,
            numChildren,
            totalAdultAmount,
            totalChildAmount,
            totalAmount,
          };
    
          console.log("Saved Data:", data);
        });
      });
    