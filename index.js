
const aboutMeBTN = document.getElementById('aboutMeButton')
const knowMe = document.getElementById("getToKnowMe")
const educationBTN = document.getElementById('educationButton')
const Education = document.getElementById("Education")
const goalsBTN = document.getElementById('goalsButton')
const Goals = document.getElementById("Goals")


// About Me Section //

aboutMeBTN.addEventListener('click', function(){
    knowMe.style.display = "block";
    aboutMeBTN.style.display = 'none'
})



document.getElementById('closeGetToKnowMe').addEventListener('click', function(){
    knowMe.style.display = "none";
    aboutMeBTN.style.display = 'block'
})



//Education Section//

educationBTN.addEventListener('click', function(){
    Education.style.display = "block";
    educationBTN.style.display = 'none'
})

document.getElementById('closeEducation').addEventListener('click', function(){
    Education.style.display = "none";
    educationBTN.style.display = 'block'
})


//Goals Section//

goalsBTN.addEventListener('click', function(){
    Goals.style.display = "block";
    goalsBTN.style.display = "none"
})

document.getElementById('closeGoals').addEventListener('click', function(){
    Goals.style.display = "none";
    goalsBTN.style.display = "block"
})






