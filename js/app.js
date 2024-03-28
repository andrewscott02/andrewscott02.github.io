//#region Enabling/Disabling JavaScript Elements

$(".javascript-disabled").hide();
$(".requires-javascript").show();

//#endregion

//#region Side Panel

//Resizes the side panel when page is ready
$(document).ready(()=>{
    SetSidePanelSize();
});

//Resizes the side panel when page is resized
$(window).on("resize", ()=>{
    SetSidePanelSize();
});

function SetSidePanelSize()
{
    //Sets the height of the side panel to the height of the body
    $(".sideMenu-container").css("height", $("#SideMenu").parent().css("height"));
    $(".sideMenu").css("height", $("#SideMenu").parent().css("height"));
}

//Ensures the side panel is closed at the start
CloseSidePanel();

function CloseSidePanel()
{
    //alert("Close Side Panel");
    $("#SideMenu").removeClass("sideMenuOpen"); //Shows/hides navbar
    $(".sideMenu-container").removeClass("sideMenuOpen"); //Shows/hides navbar
    $(".nav-btn-mobile").removeClass("sideMenuOpen"); //TODO: Styling for nav button - class not implemented yet
}

//When the mobile nav button is clicked
$(".nav-btn-mobile").on("click", (event)=>{

    event.preventDefault(); //Prevents the page from scrolling to the top
    $("#SideMenu").toggleClass("sideMenuOpen"); //Shows/hides navbar
    $(".sideMenu-container").toggleClass("sideMenuOpen"); //Shows/hides navbar
    $(".nav-btn-mobile").toggleClass("sideMenuOpen"); //TODO: Styling for nav button - class not implemented yet
})

//#endregion

//#region Carousel

$("#Featured").addClass("java-enabled");

//Scales the overlay of the videos to their width so videos cannot be interacted with
//$(".featured-overlay-container").css("width", $(".featured-overlay-container").parent().css("width"));

$(".slides").slick({
    //fade:true,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
    dots: true
});

//#endregion

//#region Hero Image Effects

const H_Content = $("#HeroImage h1").text();
const H_scrambleTime = 16;
const H_unscrambleTime = 40;
const H_unscrambleDelay = 20;

const P_Content = $("#HeroImage p").text();
const P_scrambleTime = 10;
const P_unscrambleTime = 15;
const P_unscrambleDelay = 400;

const P_Timeouts = [];

$( document ).ready(()=>{
    ClearAllTimeouts()
    ScrambleText($("#HeroImage h1"), 0); //Quickly scrambles text in case it isn't fully scrambled
    ScrambleText($("#HeroImage p"), 0); //Quickly scrambles text in case it isn't fully scrambled
    
    setTimeout(UnscrambleText, H_unscrambleDelay, $("#HeroImage h1"), H_unscrambleTime, H_Content);
    setTimeout(UnscrambleText, P_unscrambleDelay, $("#HeroImage p"), P_unscrambleTime, P_Content);
})

//Hover
$("#HeroImage").on("mouseenter", ()=>{
    ClearAllTimeouts()
    ScrambleText($("#HeroImage h1"), H_scrambleTime);
    ScrambleText($("#HeroImage p"), P_scrambleTime);
})

$("#HeroImage").on("mouseleave", ()=>{
    ClearAllTimeouts()
    ScrambleText($("#HeroImage h1"), 0); //Quickly scrambles text in case it isn't fully scrambled
    ScrambleText($("#HeroImage p"), 0); //Quickly scrambles text in case it isn't fully scrambled
    
    setTimeout(UnscrambleText, H_unscrambleDelay, $("#HeroImage h1"), H_unscrambleTime, H_Content);
    setTimeout(UnscrambleText, P_unscrambleDelay, $("#HeroImage p"), P_unscrambleTime, P_Content);
})

/** Clears all timeouts for writing the p element
 */
function ClearAllTimeouts()
{
    for(let i = 0; i < P_Timeouts.length;)
    {
        clearTimeout(P_Timeouts[0]);
        P_Timeouts.shift();

        if (P_Timeouts.length == 0)
        {
            break;
        }
    }
}

/** Scrambles Text
 * @param {*} $textObj - The jQeury Object to scramble
 * @param {*} typeTime - Inerval between each letter is typed
 */
function ScrambleText($textObj, typeTime)
{
    const originalContent = $($textObj).text();
    let scrambleContent = "";

    for (let i = 0; i < originalContent.length; i++)
    {
        scrambleContent += `${RandomRange(0, 10)}`;
    }

    for (let i = 0; i < originalContent.length; i++)
    {
        let newString = BuildString(originalContent, scrambleContent, i).join("");
        unscrambleContent = newString;

        let timeoutID = setTimeout(SetStringContent, i * typeTime, $textObj, newString);
        P_Timeouts.push(timeoutID);
    }
}

/** Unscrambles Text
 * @param {*} $textObj - The jQeury Object to scramble
 * @param {*} typeTime - Inerval between each letter is typed
 * @param {*} originalContent - The original text content to unscramble to
 */
function UnscrambleText($textObj, typeTime, originalContent)
{
    let unscrambleContent = $($textObj).text();
    for (let i = 0; i < originalContent.length; i++)
    {
        let newString = BuildString(unscrambleContent, originalContent, i).join("");
        unscrambleContent = newString;

        let timeoutID = setTimeout(SetStringContent, i * typeTime, $textObj, newString);
        P_Timeouts.push(timeoutID);
    }
}

/** Builds a string combining 2 strings together
 * @param {*} fromString - Uses as the base string for the message
 * @param {*} toString - Uses this string up to the index, then uses the fromString
 * @param {*} index - Index up to when the toString stops being used
 * @returns 
 */
function BuildString(fromString, toString, index)
{
    let newString = [];

    for (let i = 0; i < toString.length; i++)
    {
        let letterAdd = i <= index ? toString[i] : fromString[i];
        newString.push(letterAdd);
    }

    return newString;
}

/** Sets String Content
 * @param {*} $textObj - The jQuery Object to set content for
 * @param {*} newString - The new string to set as content
 */
function SetStringContent($textObj, newString)
{
    $($textObj).text(newString);
}

//#endregion

//#region Form Validation

/**
 * Implement JavaScript validation on the form
 * 
 * Required Fields
 * Regex checks for email and phone number formatting
 */

$(".form-sbmt").on("click", (event)=>{
    CheckFormFields(event);
})

$("input").on("keypress", (event)=>{
    if (event.which == 13)
    {
        CheckFormFields(event);
    }
})

function CheckFormFields(event)
{
    event.preventDefault();
    let canSubmit = true;
    let message = "Please fill out all required form fields";

    $("input").each((index, element)=>{
        if ($(element).prev().hasClass("required"))
        {
            if ($(element).attr("type") === "email")
            {
                let emailMessage = GetEmailMessage($(element).val());
                if(emailMessage !== "")
                {
                    message = emailMessage;
                    canSubmit = false;
                }
            }

            const content = $(element).val();
            if (content == "")
            {
                // alert("success: " + $(element) + " => " + content);
                canSubmit = false
            }
        }
    });

    if (canSubmit)
    {
        //TODO: Submit form
        alert("Form submission is not available yet");
        ClearFormFields();
    }
    else
    {
        alert(message);
    }
}

function ClearFormFields()
{
    $("input").each((index, element)=>{
        $(element).val("");
    });
}

const emailChecks =
[
    //Does not end on .
    {
        message: "'.' is used at the wrong position in the email address",
        regexCheck: [/\.$/, /@+\./],
        required: false
    },

    //Text after @
    {
        message: "Please enter some text after the '@' in the email address",
        regexCheck: [/@+\S/],
        required: true
    },

    //Includes @
    {
        message: "Please include an '@' in the email address",
        regexCheck: [/\S+@/],
        required: true
    }
]

function GetEmailMessage(input)
{
    message = "";

    for (let i= 0; i < emailChecks.length; i++)
    {
        let success = true;

        for (let j = 0; j < emailChecks[i].regexCheck.length; j++)
        {
            let match = input.match(emailChecks[i].regexCheck[j]) ? true : false;
            match = match == emailChecks[i].required;

            if (match == false)
            {
                success = false;
            }
        }

        if (!success)
        {
            //alert(emailChecks[i].message);
            message = emailChecks[i].message;
        }
    }

    if (input === "")
    {
        message = "Please include an email address";
    }
    
    return message;
}

//#endregion

//#region Smooth Anchor Scroll

const urlHIndex = window.location.href.indexOf("#");
const urlEnd = window.location.href.substring(urlHIndex);

//Replaces the anchor with featured so webpage
//still works without JavaScript but redirects
//to featured if JavaScript is enabled
const replaceAnchor = urlEnd == "#Games" ? "#Featured" : urlEnd;

//When page is loaded, scroll down to section
$('html, body').animate({
    scrollTop: $(replaceAnchor).offset().top
}, 500);

//If anchor links to section on same page, do not reload the page
//Instead, scroll to section
document.querySelectorAll('a').forEach(anchor => {
    const hashIndex = anchor.href.indexOf("#");
    if (hashIndex >= 0)
    {
        const anchorEnd = anchor.href.substring(hashIndex);

        anchor.addEventListener('click', function (e) {

            CloseSidePanel();

            $('html, body').animate({
                scrollTop: $(anchorEnd).offset().top
            }, 500);
        });
    }
});

//#endregion

//#region Show/Hide Code Snippets

$(".codeSnippet").find("a").next().hide();

$(".codeSnippet").find("a").on("click", (event)=>{
    if ($(event.target).next().css("display") ==="none")
    {
        $(".codeSnippet").find("a").next().hide(); //Hides all other snippets
        $(event.target).next().show();
    }
    else
    {
        $(event.target).next().hide();
    }
})

//#endregion

//#region Helper Functions

/** Random Range Function
 * @param {int} minRaw - Minimum value
 * @param {int} maxRaw - Maximum value (exclusive)
 * @returns {int} A random integer between the input values
 */
function RandomRange(minRaw = 0, maxRaw = 0)
{
    var min = parseInt(minRaw);
    var max = parseInt(maxRaw);
    
    var range = parseInt(max) - parseInt(min);
    var result = Math.floor(Math.random() * range) + parseInt(min);
    return result;

    // if (min && max) //This checks that the numbers are not NaN
    // {
    //     var range = parseInt(max) - parseInt(min);
    //     var result = Math.floor(Math.random() * range) + parseInt(min);
    //     return result;
    // }
    // else
    // {
    //     alert("Inputs are not valid inputs");
    //     throw Error("Inputs are not valid inputs");
    // }
}

//#endregion







//#region Not Implemented

//#region Scale Videos

//$("iframe").fitVids();

// $("iframe").each((item)=>{
//     $(item).width = $(item).contentWindow.document.body.scrollWidth;
//     $(item).height = $(item).contentWindow.document.body.scrollHeight;
// });

//#endregion

//#region Mouse Hover On Cards

// $(".project").on("mouseleave", (event)=>{
//     $(event.target).removeClass("show-vid");
//     //ResizeVidBorders();
// })

// ResizeVidBorders();

// function ResizeVidBorders()
// {
//     alert("Resizing videos");

//     $(".project iframe").each((item)=>{
//         alert("Resizing " + item + " video");
//         imgHeight = $(item).prev().outerHeight();
//         vidHeight = $(item).outerHeight();

//         heightDiff = imgHeight - vidHeight;

//         // vidTopPadding = $(item).css("paddingTop") + heightDiff/2;
//         // vidBottomPadding = $(item).css("paddingBottom") + heightDiff/2;

//         $(item).css("paddingTop", heightDiff/2)
//         $(item).css("paddingBottom", heightDiff/2)
//     })
// }

//#endregion

//#endregion