$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat dave<br/>" +
      "><span class='caret'>$</span> job: Testing Engineer at GlobalLogic<br/> ^100" +
      "><span class='caret'>$</span> skills: Python, C++, SQL, ML<br/> ^100" +
      "><span class='caret'>$</span> hobbies: hiker, mountain-biker, traveller<br/> ^300" +
      "><span class='caret'>$</span> alias: Dave<br/> ^300" +
      "><span class='caret'>$</span> planet: Earth<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
