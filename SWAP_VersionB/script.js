// FOR PASSWORD SHOW + HIDE

function passwordToggle() {
  var x = document.getElementById("pswInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


// FOR THE LAUNCH ANIMATION

setTimeout(function() {
    $('#modal').fadeOut('fast');
}, 3000);


// FOR THE NAVIGATION BAR

$( ".open" ).click(function() {
    $( "nav" ).toggleClass("navToggled");
    $( 'main' ).toggleClass("mainToggled");
    $( '.inner' ).toggleClass("innerToggled");
    $( '.open' ).toggleClass("openToggled");
    $( '.stickerCanvas' ).fadeToggle();
    $( '.instruction' ).fadeToggle();
    $( '.cross' ).fadeToggle();
});

$( ".cross" ).click(function() {
    $( "nav" ).toggleClass("navToggled");
    $( 'main' ).toggleClass("mainToggled");
    $( '.inner' ).toggleClass("innerToggled");
    $( '.open' ).toggleClass("openToggled");
    $( '.stickerCanvas' ).fadeToggle();
    $( '.instruction' ).fadeToggle();
    $( '.cross' ).fadeToggle();
});

// FOR THE NAVIGATION DOT

$( ".stickerDot" ).click(function() {
    $( "nav" ).toggleClass("navToggled");
    $( 'main' ).toggleClass("mainToggled");
    $( '.inner' ).toggleClass("innerToggled");
    $( '.stickerDot' ).toggleClass("openToggled");
    $( '.stickerCanvas' ).fadeToggle();
    $( '.instruction' ).fadeToggle();
    $( '.cross' ).fadeToggle();
});


// ABOUT MODAL

function hideAboutModal() {
    document.getElementById("aboutModal").style.display ='none';
}

function showAboutModal() {
    document.getElementById("aboutModal").style.display ='block';
}

// HIDE + REVEAL

function toggleSection(sectionID) {
    for (s in sa) {
        document.getElementById(sa[s]).style.display = 'none';
    }
    var myTarget = document.getElementById(sectionID);
    myTarget.style.display = 'block';
}


// CHECKBOXES

$('.defaultTick').each(function(){
    $(this).hide().after('<div class="jqTick" />');

});

$('.jqTick').on('click',function(){
    $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
});


// FOR SEARCH BAR 

function showResult(str) {
    var livesearch = document.getElementById("livesearch");
    if (str.length==0) {
        livesearch.innerHTML="";
        return;
    }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            livesearch.innerHTML=this.responseText;
            livesearch.style.position="absolute";
            livesearch.style.zIndex="200";
            livesearch.style.marginTop="0.5em";
            livesearch.style.backgroundColor="#FFDF34";
            livesearch.style.padding="1em";
            
            if ($(window).width() > 850) {
                livesearch.style.width="80%";
                livesearch.style.left="2em";
            }   
                
        }
    }
    xmlhttp.open("GET","livesearch.php?q="+str,true);
    xmlhttp.send();
}


// ADD TO COLLECTION

function addToCollection() {
//    document.getElementById("takgalbi").style.display="none";
}
