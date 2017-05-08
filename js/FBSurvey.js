var pg = 0;
var uID = "";
var userName = "";
var DataConnect = "https://fb.beatfreaks.com/DataConnect/Monopoly/";
$(document).ready(function () {
    $.get("content/home.html", function (data) {
        $("#content").html(data);
        fadeCoverOut();
        //$("#SurveyIntro").css("display", "none");
       // getGoogleAd();
       // getAddlContent();
        $("#content").addClass("welcome");
        $("#SurveyIntro p").addClass("welcomeP");
        $("#SurveyIntro img").addClass("bigger");
        //getSomeVideo();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        //FB.AppEvents.logEvent("MonopolyGame Home");
        
    });
    function fadeCoverOut() {
        $("#myCover").fadeOut(3000);
    }

    //$.get("content/FBAd_1.html", function (data) {
    //    $("#FBAd_1").html(data);
    //});



});
function getAddlContent() {
    myURL = "content/SitesOfInterest.html";
    $.get(myURL, function (data) {
        $("#addlContent").html(data);
    });
};

function appLogin(userID, password, userName) {
    myURL = DataConnect + "UserLogin?userID=" + userID + "&password=" + password + "&userName=" + userName;
   // console.log(myURL);

    var divContents = "";
    $.get(myURL, function (data) {
        data = data.replace("<div id=\"myData\">", '');
        data = data.replace("</div>", '');
        var dataObj = JSON.parse(data);
      //  alert(dataObj);
        $.each(dataObj, function (key, innerjson) {
            uID = innerjson.uID;
            userName = innerjson.userName;
            divContents += "uID=" + uID + ", userName=" + userName;
        });
        //console.log(dataObj);
      //  $("#loginfo").html(divContents);
    });
};




function displayPieces() {
    myURL = DataConnect + "TilesAll?uID=" + uID;
   // console.log(myURL);
    $.get(myURL, function (data) {
        $("#SurveyIntro img").removeClass("bigger").addClass("smaller");
        $("#SurveyIntro p").removeClass("welcomeP");
        data = data.replace("<div id=\"myData\">", '');
        data = data.replace("</div>", '');
        var dataObj = JSON.parse(data);
        var divContents = "";
        var prize = "";
        divContents += "<div id='choiceBox' class=\"allChoices\" >";
        $.each(dataObj, function (key, innerjson) {
            
            tile = innerjson.tile;
            match = innerjson.match;
            id = innerjson.id;
            var action = 0;
            if (match == 0) {
                action = 1;
            }
          //  console.log(prize);
            if (innerjson.prize != prize) {
                if (prize != "") {
                    divContents += "</div></div>";
                }
                divContents += "<div class='PrizeContainer'><div class='QText'>Prize: " + innerjson.prize + "</div><div class='myChoicesContainer'>";
            }
            prize = innerjson.prize;
            if (match == 0) {
                matchClass = "myChoices";
            } else {
                matchClass = "myChoicesMatch";
            }
            divContents += "<div id='choice" + id + "' class='" + matchClass + "' onclick=\"tileAccept('" + uID + "','" + id + "');\"><span>" + tile + "</span></div>";


        });




        divContents += "</div></div></div>";


        $("#content").html(divContents);
       // getGoogleAd();
        //$("#SurveyIntro").css("display", "block");
        //tweetThisQuestion('tweetQuest');
        //tweetThisQuestion('someVideo');
        $("#SurveyIntro").hide();
        $(".grad").css("height", "20pt");
        $(".grad").html("Click for details");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".allChoices").slideDown("slow");

        displayListeners();
       // FB.AppEvents.logEvent("Survey pg " + pg + " viewed");
    });
    
};

$(".grad").click(function () {
    $(".grad").html("");
    $(".grad").css("height", "5pt");
    $("#SurveyIntro").slideDown();

});

function tweetThisQuestion(myDivID) {
    //console.log(currentQuestion);
    myDivID = "#" + myDivID;
    var qLen = currentQuestion.length;
    if (qLen > 80) {
        var currentQuestion_Short = currentQuestion.substring(0, 77) + "...";
    }
    var divContents = "&nbsp;<a href=\"https://twitter.com/intent/tweet?screen_name=MeritMediaGames\" class=\"twitter-mention-button\"";
    divContents += " data-text=\"Question: " + currentQuestion_Short + " https://fb.beatfreaks.com/monopolygame #BeYourOwnHero\" data-related=\"monopoly,game,play,shop,win,albertsons\" data-show-count=\"false\">Tweet to @MeritMediaGames</a>";
    divContents += "<script async src=\"//platform.twitter.com/widgets.js\"      charset=\"utf-8\"></script>";
    divContents += "<img src=\"img/facebook.png\" class=\"FBPostBtn\"  onclick=\"postTofeed('" + currentQuestion + " - https://fb.beatfreaks.com/monopolygame  #Monopoly');\" alt=\"facebook\" />";
    $(myDivID).html(divContents);
};






function tileAccept(uID,id) {
  //  FB.AppEvents.logEvent("Choice selected pg " + pg );
    myURL = DataConnect + "TileAccept?uID=" + uID + "&id=" + id;
    $.get(myURL);
   // $(".myChoiceSelected").addClass("myChoices").removeClass("myChoiceSelected");
    $("#choice" + id).toggleClass("myChoicesMatch");

}



function postTofeed(myContent) {
  //  FB.AppEvents.logEvent("PostToFeed pg " + pg);
    if (window.loggedin == 0) {
        alert("Let's log in to Facebook, first.");
        fbLogin();
    }

    else {
        if (myContent == "") {
           // addToShare('content');
         //   var myContent = $("#contentForPrint").text() ;
            myContent = "This app gives you a list of all the pieces, so all you have to do is find your piece and click it! " +
                "The app tracks your pieces and tells which ones you still need to win! GREEN means you have it, RED means you need it. " +
                "If you click a piece accidentally just click it again."
        }
        FB.ui(
            {
                method: 'feed',
                name: 'Monopoly Game Piece Tracker by Merit Media US',
                link: 'https://fb.beatfreaks.com/MonopolyGame',
                picture: 'https://fb.beatfreaks.com/MonopolyGame/img/FB-Monopoly-Icon-200.jpg',
                caption: 'Monopoly Game Piece Tracker',
                description: myContent
            },
            function (response) {
                if (response && response.post_id) {
                    //alert('Post was published.');
                } else {
                    // alert('Post was not published.');
                }
            }
        );
    }
}




(function () {
    var
        fullScreenApi = {
            supportsFullScreen: false,
            isFullScreen: function () { return false; },
            requestFullScreen: function () { },
            cancelFullScreen: function () { },
            fullScreenEventName: '',
            prefix: ''
        },
        browserPrefixes = 'webkit moz o ms khtml'.split(' ');

    // check for native support
    if (typeof document.cancelFullScreen != 'undefined') {
        fullScreenApi.supportsFullScreen = true;
    } else {
        // check for fullscreen support by vendor prefix
        for (var i = 0, il = browserPrefixes.length; i < il; i++) {
            fullScreenApi.prefix = browserPrefixes[i];

            if (typeof document[fullScreenApi.prefix + 'CancelFullScreen'] != 'undefined') {
                fullScreenApi.supportsFullScreen = true;

                break;
            }
        }
    }

    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
        fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';

        fullScreenApi.isFullScreen = function () {
            switch (this.prefix) {
                case '':
                    return document.fullScreen;
                case 'webkit':
                    return document.webkitIsFullScreen;
                default:
                    return document[this.prefix + 'FullScreen'];
            }
        }
        fullScreenApi.requestFullScreen = function (el) {
            return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
        }
        fullScreenApi.cancelFullScreen = function (el) {
            return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
        }
    }

    // jQuery plugin
    if (typeof jQuery != 'undefined') {
        jQuery.fn.requestFullScreen = function () {

            return this.each(function () {
                if (fullScreenApi.supportsFullScreen) {
                    fullScreenApi.requestFullScreen(this);
                }
            });
        };
    }

    // export api
    window.fullScreenApi = fullScreenApi;
})();

var myBody = document.getElementById('myBody');

if (fullScreenApi.supportsFullScreen) {
    fsButton.addEventListener('click', function () {
        fullScreenApi.requestFullScreen(myBody);
    }, true);
}
var contentForPrintTitle = "All the Pieces";
function displayListeners() {
    $("#piecesView").show();
$("#needP").on('click', function () {
    // choice = the ones you NEED, match = 0, color= red
    // choiceMatch = the ones you have, match = 1,color = green
   // console.log("needP");
    $(".myChoices").show();
    $(".myChoicesMatch").hide();
    contentForPrintTitle = "Pieces I Need";
});
$("#haveP").on('click', function () {
    // choice = the ones you NEED, match = 0, color= red
    // choiceMatch = the ones you have, match = 1,color = green
   // console.log("haveP");
    $(".myChoices").hide();
    $(".myChoicesMatch").show();
    contentForPrintTitle = "Pieces I Have";
});
$("#allP").on('click', function () {
    // choice = the ones you NEED, match = 0, color= red
    // choiceMatch = the ones you have, match = 1,color = green
   // console.log("allP");
    $(".myChoices").show();
    $(".myChoicesMatch").show();
    contentForPrintTitle = "All the Pieces";
});
}

function PrintElem(content) {
    $("#contentForPrint").show();
    contentForPrintPrep(content);


    var mywindow = window.open('', 'PRINT', 'height=800,width=600');
    var myPrintContent = '<html><head><title>' + document.title + '</title>' +
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>' +
        '<link href="https://fb.beatfreaks.com/MonopolyGame/css/print.css" rel="stylesheet" />' +
         '</head><body >' +
        '<h1>' + document.title + '</h1>' +
        "<div id='copyToClip' >Select All and Copy to Clipboard</div>" + 
        document.getElementById("contentForPrint").innerHTML +
        '<script src="https://fb.beatfreaks.com/MonopolyGame/js/print.js"></script>' +
        
        '</body></html>';

    mywindow.document.write(myPrintContent);

    //console.log(document.getElementById(elem).innerHTML  );
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
   
    //mywindow.print();
    //mywindow.close();
    $("#contentForPrint").hide();

    return true;
}

function addToShare(centent) {
    PrintElem('content');
    postTofeed('');
}

function contentForPrintPrep(centent) {

    $("#contentForPrint").html( $("#" + centent).html());
    $("#contentForPrint .allChoices").prepend("<h2>" + contentForPrintTitle + "</h2>");
    $("#contentForPrint .QText").prepend("- ");
    $("#contentForPrint .QText").append(": ");
    
    $("#contentForPrint span").prepend("[");
    $("#contentForPrint span").append("] ");
    $("#contentForPrint myChoicesContainer").append("\r\n");
    var str = $("#contentForPrint").html().replace(/Prize:/g, '');
    $("#contentForPrint").html(str);
}


    function CopyHTMLToClipboard() {    
        if (document.body.createControlRange) {
            var htmlContent = document.getElementById('allChoices');
            var controlRange;

            var range = document.body.createTextRange();
            range.moveToElementText(htmlContent);

            //Uncomment the next line if you don't want the text in the div to be selected
            range.select();

            controlRange = document.body.createControlRange();
            controlRange.addElement(htmlContent);

            //This line will copy the formatted text to the clipboard
            controlRange.execCommand('Copy');

            alert('Your HTML has been copied\n\r\n\rGo to Word and press Ctrl+V');
        }
    }
