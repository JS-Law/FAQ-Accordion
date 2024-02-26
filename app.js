// This was coded by ChatGPT after I asked how I would have condensed the code I had provided

// document.querySelectorAll('.btn, .link').forEach(toggle => {
//     toggle.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default for links

//         const targetId = this.getAttribute('data-target') || this.id.replace('btn', 'answer');
//         const content = document.getElementById(targetId);

//         // Close all sections and reset icons, except the current one
//         document.querySelectorAll('.textContent').forEach(otherContent => {
//             if (otherContent.id !== targetId) {
//                 otherContent.style.maxHeight = '0px';
//                 // Assuming icons are within the .section container of each .textContent
//                 const section = otherContent.closest('.section');
//                 section.querySelector('.expandBtn').style.display = 'block';
//                 section.querySelector('.contractBtn').style.display = 'none';
//             }
//         });

//         // Toggle the clicked section and icons
//         if (content.style.maxHeight && content.style.maxHeight !== '0px') {
//             content.style.maxHeight = '0px';
//             const section = content.closest('.section');
//             section.querySelector('.expandBtn').style.display = 'block';
//             section.querySelector('.contractBtn').style.display = 'none';
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//             const section = content.closest('.section');
//             section.querySelector('.expandBtn').style.display = 'none';
//             section.querySelector('.contractBtn').style.display = 'block';
//         }
//     });
// });


// I need to declare the buttons(expand, contract), links and textContent

function closeAllExcept(currentId) {
    const answers = [answerOne, answerTwo, answerThree, answerFour];
    const expands = [expandOne, expandTwo, expandThree, expandFour];
    const contracts = [contractOne, contractTwo, contractThree, contractFour];

    answers.forEach((answer, index) => {
        if (answer.id !== currentId) {
            answer.style.maxHeight = '0px';
            expands[index].style.display = 'block';
            contracts[index].style.display = 'none';
        }
    });
}

// Variable Declarations
// Expand buttons
const expandOne = document.getElementById('expandOne');
const expandTwo = document.getElementById('expandTwo');
const expandThree = document.getElementById('expandThree');
const expandFour = document.getElementById('expandFour');

// Contract
const contractOne = document.getElementById('contractOne');
const contractTwo = document.getElementById('contractTwo');
const contractThree = document.getElementById('contractThree');
const contractFour = document.getElementById('contractFour');

// Links
const linkOne = document.getElementById('linkOne');
const linkTwo = document.getElementById('linkTwo');
const linkThree = document.getElementById('linkThree');
const linkFour = document.getElementById('linkFour');

// Answers
const answerOne = document.getElementById('answerOne');
const answerTwo = document.getElementById('answerTwo');
const answerThree = document.getElementById('answerThree');
const answerFour = document.getElementById('answerFour');

// QUESTION ONE
// EXPAND
onload = () => expandOne.click();

expandOne.addEventListener('click', () => {
    closeAllExcept('answerOne')
    if (answerOne.style.maxHeight && answerOne.style.maxHeight !== '0px') {
        answerOne.style.maxHeight = '0px';
        expandOne.style.display = 'block';
        contractOne.style.display = 'none';
    } else {
        answerOne.style.maxHeight = answerOne.scrollHeight + "px";
        expandOne.style.display = 'none';
        contractOne.style.display = 'block';
    }
});
// CONTRACT
contractOne.addEventListener('click', () => {
    closeAllExcept('answerOne')
    if (answerOne.style.maxHeight && answerOne.style.maxHeight !== '0px') {
        answerOne.style.maxHeight = '0px';
        // const section = answerOne.closest('.section');
        expandOne.style.display = 'block';
        contractOne.style.display = 'none';
    } else {
        answerOne.style.maxHeight = answerOne.scrollHeight + "px";
        // const section = answerOne.closest('.section');
        expandOne.style.display = 'none';
        contractOne.style.display = 'block';
    }
});


// QUESTION TWO
// EXPAND
expandTwo.addEventListener('click', () => {
    closeAllExcept('answerTwo')
    if (answerTwo.style.maxHeight && answerTwo.style.maxHeight !== '0px') {
        answerTwo.style.maxHeight = '0px';
        expandTwo.style.display = 'block';
        contractTwo.style.display = 'none';
    } else {
        answerTwo.style.maxHeight = answerTwo.scrollHeight + "px";
        expandTwo.style.display = 'none';
        contractTwo.style.display = 'block';
    }
});
// CONTRACT
contractTwo.addEventListener('click', () => {
    closeAllExcept('answerTwo')
    if (answerTwo.style.maxHeight && answerTwo.style.maxHeight !== '0px') {
        answerTwo.style.maxHeight = '0px';
        expandTwo.style.display = 'block';
        contractTwo.style.display = 'none';
    } else {
        answerTwo.style.maxHeight = answerTwo.scrollHeight + "px";
        expandTwo.style.display = 'none';
        contractTwo.style.display = 'block';
    }
});


// QUESTION THREE
// EXPAND
expandThree.addEventListener('click', () => {
    closeAllExcept('answerThree')
    if (answerThree.style.maxHeight && answerThree.style.maxHeight !== '0px') {
        answerThree.style.maxHeight = '0px';
        // const section = answerOne.closest('.section');
        expandThree.style.display = 'block';
        contractThree.style.display = 'none';
    } else {
        answerThree.style.maxHeight = answerThree.scrollHeight + "px";
        // const section = answerOne.closest('.section');
        expandThree.style.display = 'none';
        contractThree.style.display = 'block';
    }
});
// CONTRACT
contractThree.addEventListener('click', () => {
    closeAllExcept('answerThree')
    if (answerThree.style.maxHeight && answerThree.style.maxHeight !== '0px') {
        answerThree.style.maxHeight = '0px';
        expandThree.style.display = 'block';
        contractThree.style.display = 'none';
    } else {
        answerThree.style.maxHeight = answerThree.scrollHeight + "px";
        expandThree.style.display = 'none';
        contractThree.style.display = 'block';
    }
});

// QUESTION FOUR
// EXPAND
expandFour.addEventListener('click', () => {
    closeAllExcept('answerFour')
    if (answerFour.style.maxHeight && answerFour.style.maxHeight !== '0px') {
        answerFour.style.maxHeight = '0px';
        // const section = answerOne.closest('.section');
        expandFour.style.display = 'block';
        contractFour.style.display = 'none';
    } else {
        answerFour.style.maxHeight = answerFour.scrollHeight + "px";
        // const section = answerOne.closest('.section');
        expandFour.style.display = 'none';
        contractFour.style.display = 'block';
    }
});
// CONTRACT
contractFour.addEventListener('click', () => {
    closeAllExcept('answerFour')
    if (answerFour.style.maxHeight && answerFour.style.maxHeight !== '0px') {
        answerFour.style.maxHeight = '0px';
        // const section = answerOne.closest('.section');
        expandFour.style.display = 'block';
        contractFour.style.display = 'none';
    } else {
        answerOne.style.maxHeight = answerFour.scrollHeight + "px";
        // const section = answerOne.closest('.section');
        expandFour.style.display = 'none';
        contractFour.style.display = 'block';
    }
});




// LINKS =======================================================
// LINK ONE
linkOne.addEventListener('click', () => {
    closeAllExcept('answerOne')
    if (answerOne.style.maxHeight && answerOne.style.maxHeight !== '0px') {
        answerOne.style.maxHeight = '0px';
        expandOne.style.display = 'block';
        contractOne.style.display = 'none';
    } else {
        answerOne.style.maxHeight = answerOne.scrollHeight + "px";
        expandOne.style.display = 'none';
        contractOne.style.display = 'block';
    }
});

// LINK TWO
linkTwo.addEventListener('click', () => {
    closeAllExcept('answerTwo')
    if (answerTwo.style.maxHeight && answerTwo.style.maxHeight !== '0px') {
        answerTwo.style.maxHeight = '0px';
        expandTwo.style.display = 'block';
        contractTwo.style.display = 'none';
    } else {
        answerTwo.style.maxHeight = answerTwo.scrollHeight + "px";
        expandTwo.style.display = 'none';
        contractTwo.style.display = 'block';
    }
});

// LINK THREE
linkThree.addEventListener('click', () => {
    closeAllExcept('answerThree')
    if (answerThree.style.maxHeight && answerThree.style.maxHeight !== '0px') {
        answerThree.style.maxHeight = '0px';
        expandThree.style.display = 'block';
        contractThree.style.display = 'none';
    } else {
        answerThree.style.maxHeight = answerThree.scrollHeight + "px";
        expandThree.style.display = 'none';
        contractThree.style.display = 'block';
    }
});

// LINK FOUR
linkFour.addEventListener('click', () => {
    closeAllExcept('answerFour')
    if (answerFour.style.maxHeight && answerFour.style.maxHeight !== '0px') {
        answerFour.style.maxHeight = '0px';
        expandFour.style.display = 'block';
        contractFour.style.display = 'none';
    } else {
        answerFour.style.maxHeight = answerFour.scrollHeight + "px";
        expandFour.style.display = 'none';
        contractFour.style.display = 'block';
    }
});