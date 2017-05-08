<%@ Page Language="C#" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Monopoly Shop Play Win Game Piece Tracker</title>

    <meta name="robots" content="index, follow" />
<meta name="description" content="Monopoly Game" />
<meta name="keywords" content="monopoly, game, shop play win, piece, Tracker" />
<meta name="language" content="English" />
<meta name="author" content="Charlie Pecot" />
<meta name="copyright" content="2017" />
<meta name="revisit-after" content="1 day" />
<meta name="reply-to" content="info@meritmedia.com" />
<meta name="document-class" content="Living Document" />
<meta name="document-rights" content="Copyrighted Work" />

<meta name="document-rating" content="Safe for Kids" />
<meta name="document-distribution" content="Global" />
<meta name="document-state" content="Dynamic" />
<meta name="cache-control" content="Public" />
<meta name="Publisher" content="MeritMedia" />
<meta name="Publisher-Email" content="info@meritmedia.com" />
<meta name="Placename" content="MeritMedia" />
<meta name="Contributors" content="Merit Media" />




    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/bootstrap-responsive.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://ajax.aspnetcdn.com/ajax/bootstrap/3.3.6/css/bootstrap.min.css" />
    <link href="css/site.css" rel="stylesheet" />


    <meta property="og:url"                content="https://fb.beatfreaks.com/MonopolyGame/default.aspx" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="Monopoly Shop Play Win Game Piece Tracker" />
    <meta property="og:description"        content="Track your game pieces while on Facebook" />
    <meta property="og:image"              content="https://fb.beatfreaks.com/MonopolyGame/img/FB-Monopoly-Icon-200.jpg" />
    <meta property="fb:app_id"             content="214996705566640"  />

<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@MeritMediaGames">
<meta name="twitter:creator" content="@MeritMediaUS">
<meta name="twitter:title" content="Monopoly Shop Play Win Game Piece Tracker">
<meta name="twitter:description" content="A way to visually record and track which pieces you have or still need to win!">
<meta name="twitter:image" content="https://fb.beatfreaks.com/MonopolyGame/img/FB-Monopoly-Icon-200.jpg">


    <script type="text/javascript" src="https://fb.beatfreaks.com/scripts/meritmedia.js"></script>
    <script type="text/javascript">page_access(document.URL);</script>
</head>
<body id="myBody">
    <img id="myCover" src="img/MonopolyGame-myCover.jpg" onclick="fadeCoverOut();" alt=""/>
    <div id="fb-root"></div>

<script>var userID = "";
    window.fbAsyncInit = function () {
        FB.init({
            appId: '214996705566640',
            xfbml: true,
            version: 'v2.8'
        });

        // ADD ADDITIONAL FACEBOOK CODE HERE
        function onLogin(response) {
            if (response.status == 'connected') {
                FB.api('/me?fields=first_name', function (data) {
                    var welcomeBlock = document.getElementById('fb-welcome');
                    welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
                    userID = data.email;
                   // console.log(data);
                   // console.log("Data ID= " + data.id);
                    appLogin(data.id, '214996705566640', data.first_name);
                });

                FB.api(
                    '/me',
                    'GET',
                    { "fields": "id,name,email" },
                    function (response) {
                        console.log(response.id + "-" + response.name + "-" + response.email);
                    }
                );

            }
        }

        FB.getLoginStatus(function (response) {
            // Check login status on load, and if the user is
            // already logged in, go directly to the welcome message.
            if (response.status == 'connected') {
                onLogin(response);
            } else {
                // Otherwise, show Login dialog first.
                FB.login(function (response) {
                    onLogin(response);
                }, { scope: 'user_friends, email' });
            }
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
    <div class="fb-quote"></div>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    <div class="outside">

        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
<%--                    <a class="navbar-brand">
                        <img src="img/icon-and-logo.jpg" class="img img-responsive" /></a>--%>
                    <div class="siteName" style="display:inline-block">
                        GAME PIECE TRACKING
                        </div>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav" style="float:right;" >

                        <li><div class="twitterShareBtn"><a id="twitterPost" href="https://twitter.com/share" class="twitter-share-button"
                                     data-text="MonopolyGame" data-hashtags="MonopolyGame" data-related="merit media us" 
                                     data-show-count="false">Tweet</a></div></li>
                         <li><div class="twitterShareBtn"><a class="twitter-follow-button"  href="https://twitter.com/MeritMediaGames">Follow @MeritMediaGames</a></div></li>
                        <li><a href="#" onclick="postTofeed('');"><img src="img/facebook.png" alt="facebook" />&nbsp;Share</a></li>
                        <li><a href="mailto:MonopolyGame@MeritMedia.com" target="_blank">
                            <img src="img/email.png" alt="email" />&nbsp;Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="inside">



<%--            <div class="row ">
                
                <div class="col-md-12">
                    <div class="banner">
                    <span>MonopolyGame.com</span>
                        </div>
                </div>
            </div>--%>

            <div class="row" style="padding-top: 20pt;">
                <div class="row">
                    <div class="col-md-8">

                        <div id="SurveyIntro" class="padding-left">
                            <a href="https://apps.facebook.com/mymonopolygame" target="_top"><img src="img/MonopolyGame-logo-200.png" class="img img-responsive"/></a>
                            <p><span id="fb-welcome"></span>
                                You're playing the Monopoly Shop Play Win Game and you're collecting all your game pieces and having a blast except for one thing:
                                It's getting increasingly more difficult to figure out which pieces you already have and which ones
                                you still need.  The "board" to which you're affixing the pieces is getting thrashed by the day. Well, your troubles
                                are over! This app gives you a list of all the pieces, so all you have to do is find your piece and click it!
                                The app tracks your pieces and tells which ones you still need to win! Leave comments <a href="#fbComments">below</a>.
                            </p>
                            <%--<p><a href="https://fb.beatfreaks.com/MonopolyGame" target="_top">Retake the survey</a> at any time.</p>--%>
                        </div>
                        <div class="grad"></div>
                        <div id="content"></div>
<%--                        <div class="row">
                            <div class="col-md-6" >

                                <div class="mySocial">
                                    <ul class="nav">
                                        <li><a href="https://twitter.com/MeritMediaGames" target="_blank">
                                            <img src="img/twitter.png" alt="twitter" />&nbsp;@MeritMediaGames</a></li>
                                        <li><a href="https://facebook.com/MonopolyGame/" target="_blank">
                                            <img src="img/facebook.png" alt="facebook" />&nbsp;MonopolyGame</a></li>
                                        <li><a href="MonopolyGame@MeritMedia.com" target="_blank">
                                            <img src="img/email.png" alt="email" />&nbsp;Submit&nbsp;a&nbsp;question</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6" style="margin: 0 auto;">
                                <div id="addlContent" class="padding-left"></div>
                            </div>
                        </div>--%>
                        <div id="fbComments" style="width: 96%; max-width: 800px;margin: 0 auto;">
                            <div  class="fb-comments" data-href="https://fb.beatfreaks.com/MonopolyGame"  data-colorscheme="dark"
                                data-numposts="10" data-width="100%" data-order-by="reverse_time"></div>
                            </div>


                    </div>
                    <div class="col-md-4">
                        <div style="margin:0 auto;width:100%;max-width:400px;">
                        <iframe class='gfm-media-widget' image='1' coinfo='1' style="width: 96%; height: 100%;" frameborder='0' id='beyourownhero'></iframe>
                        <script src='//funds.gofundme.com/js/5.0/media-widget.js'></script>
                        <ul class="nav navbar-nav" >
                            <li><a id="fsButton" />Go Fullscreen</a></li>
                            <li><a href="https://www.playmonopoly.us/login">Official Monopoly Shop Play Win site</a></li>
                            <li><a href="http://rn.falik.us" target="_blank">Falik on ReverbNation</a></li>
                           </ul>
                        <div id="someVideo"><a href="https://twitter.com/intent/tweet?screen_name=MeritMediaGames" class="twitter-mention-button" 
                                data-text=" #BeYourOwnHero" data-related="MonopolyGame" data-show-count="false">Tweet to @MeritMediaGames</a>
                            <script async src="//platform.twitter.com/widgets.js"      charset="utf-8"></script>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
        <footer>
            

            
            <div id="footerBtns">
                <div><a><img src="img/facebook.png" alt="facebook"  onclick="window.open('https://apps.facebook.com/MonopolyGame/');"/></a>
                     &nbsp;
                    <a href="#" onclick="postTofeed('You can use this app to track your Monopoly Game Pieces!');">Share</a>
                    &nbsp;
                    <div class="fb-like" data-share="false"  data-width="150"  data-show-faces="true"></div>
                </div>
                <div><a class="twitter-follow-button"  href="https://twitter.com/MeritMediaGames">Follow @MeritMediaGames</a>
                    <a id="twitterPost2" href="https://twitter.com/share" class="twitter-share-button"
                                     data-text="MonopolyGame" data-hashtags="MonopolyGame" data-related="MonopolyGame Shop Play Win" 
                                     data-show-count="false">Tweet</a>
                </div>

                <div style="width:100%;max-width:800px;height:80px;margin:0 auto;">
                            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-2306417965893434"
                    data-ad-slot="3767635739"
                    data-ad-format="auto"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
                <div id="author">Site Created by Charlie Pecot of <a href="http://meritmedia.us" target="_blank">Merit Media US</a> &copy;2017
                    &nbsp;<a href="mailto:MonopolyGame@MeritMedia.com" target="_blank">
                                            <img src="img/email.png" alt="email" />&nbsp;MonopolyGame@MeritMedia.com</a>
                    <br />
                    <div style="font-size:8pt;color:yellow;margin:0 auto;">Not associated or affiliated with any of the stores that offer this game, or with Monopoly, Hasbro, or anyboody who works for them.</div>
                </div>
            </div>
        </footer>
    </div>

    <script src="js/FBSurvey.js"></script>
</body>
</html>
