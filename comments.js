var template = function(){
  return {
    off: function(){
      
    },
    on: function(){
      
    }
  }
}

var latimes = function(){
  return {
    off: function(){
      var comments = $('#gallery-subcontent');
      if (comments.length > 0) {comments.hide()};
    },
    on: function(){
      var comments = $('#gallery-subcontent');
      if (comments.length > 0) {comments.show()};
    }
  }
}



var huff = function(){
  return {
    off: function(){
      var comments_header = $('#comments-header');
      if (comments_header.length > 0) {comments_header.parent().hide()};
      var comment_badge = $('.badge_v2_comments')
      if (comment_badge.length > 0) {comment_badge.parent().hide()};
    },
    on: function(){
      var comments_header = $('#comments-header');
      if (comments_header.length > 0) {comments_header.parent().show()};
      var comment_badge = $('.badge_v2_comments')
      if (comment_badge.length > 0) {comment_badge.parent().show()};
    }
  }
}

var reuters = function(){
  return {
    off: function(){
      var comments = $('.articleComments');
      if (comments.length > 0) {comments.hide()};
      var comment_tab = $(".tabs > ul > li > a[href^='/article/comments']");
      if (comment_tab.length > 0) {comment_tab.parent().hide()};
    },
    on: function(){
      var comments = $('.articleComments');
      if (comments.length > 0) {comments.show()};
      var comment_tab = $(".tabs > ul > li > a[href^='/article/comments']");
      if (comment_tab.length > 0) {comment_tab.parent().show()};
    }
  }
}

var usatoday = function(){
  return {
    off: function(){
      var comments = $('.uslComments');
      if (comments.length > 0) {comments.hide()};
    },
    on: function(){
      var comments = $('.uslComments');
      if (comments.length > 0) {comments.show()};
    }
  }
}

var cbcca = function(){
  return {
    off: function(){
      var comments = $('#socialcomments');
      if (comments.length > 0) {comments.hide()};
    },
    on: function(){
      var comments = $('#socialcomments');
      if (comments.length > 0) {comments.show()};
    }
  }
}

var slashdot = function(){
  return {
    off: function(){
      var comments = $('.a2commentwrap');
      if (comments) {comments.hide()};
      var commentcnt = $('.commentcnt');
      if (commentcnt.length > 0) {commentcnt.hide()};
    },
    on: function(){
      var comments = $('.a2commentwrap');
      if (comments.length > 0) {comments.show()};
      var commentcnt = $('.commentcnt');
      if (commentcnt.length > 0) {commentcnt.show()};
    }
  }
}



var gametrailers = function(){
  return {
    off: function(){
      var comments = $('.comment_full_container');
      if (comments.length > 0) {comments.hide()};
      var comment_link = $("a[href='#comments_top']:first")
      if (comment_link.length > 0) {comment_link.parent().hide()};
    },
    on: function(){
      var comments = $('.comment_full_container');
      if (comments.length > 0) {comments.show()};
      var comment_link = $("a[href='#comments_top']:first")
      if (comment_link.length > 0) {comment_link.parent().show()};
    }
  }
}



var lvrj = function(){
  return {
    off: function(){
      $('#commenting').parents('table:first').hide()      
    },
    on: function(){
      $('#commenting').parents('table:first').show()
    }
  }
}



var slate = function(){
  return {
    off: function(){
      $('#js_kit_cntr').hide();
      $('#comments_button').hide();
    },
    on: function(){
      $('#js_kit_cntr').show();
      $('#comments_button').show();
    }
  }
}



var yahoo_news = function(){
  return {
    off: function(){
      var comments = $('#mwpphu-container');
      if (comments.length > 0) {comments.hide()};
      var form = $('.mwpphu-post-form')
      if (form.length > 0) {form.hide()};
    },
    on: function(){
      var comments = $('#mwpphu-container');
      if (comments.length > 0) {comments.show()};
      var form = $('.mwpphu-post-form')
      if (form.length > 0) {form.show()};
    }
  }
}

var cracked = function(){
  return {
    off: function(){
      var comments_section = $('#comments_section');
      if (comments_section.length > 0) { comments_section.hide() };
    },
    on: function(){
      var comments_section = $('#comments_section');
      if (comments_section.length > 0) { comments_section.show() }
    }
  }
}

var yahoo_buzz_main = function(){
  return {
    off: function(){
      $('.articleBottomContainer').find('a:first').hide();
    },
    on: function(){
      $('.articleBottomContainer').find('a:first').show();
    }
  }
}

var yahoo_buzz = function(){
  return {
    off: function(){
      $('#articleTabsContainer').hide();
    },
    on: function(){
      $('#articleTabsContainer').show()
    }
  }
}

var nytimes_article = function(){
  return {
    off: function(){
      $('#commentsWell').hide();
    },
    on: function(){
      $('#commentsWell').show()
    }
  }
}

var techcrunch_article = function(){
  return {
    off: function(){
      $('#comments_area').hide()
      $('#addcomment').hide()
    },
    on: function(){
      $('#comments_area').show()
      $('#addcomment').show()
    }
  }
}

var gothamist_main = function(){
  return {
    off: function(){
      $('.entry-meta-comments').hide()
    },
    on: function(){
      $('.entry-meta-comments').show()
    }
  }
}



var gothamist_topic = function(){
  return {
    off: function(){
      $('#comments-list').hide()
    },
    on: function(){
      $('#comments-list').show()
    }
  }
}

var gawker_main = function(){
  return {
    off: function(){
      $('.pm_comments').hide()
    },
    on: function(){
      $('.pm_comments').show()
    }
  }
}

var gawker = function(){
  return {
    off: function(){
      $('#comments').hide();
    },
    on: function(){
      $('#comments').show();
    }
  }
}

var aint = function(){
  return {
    off: function(){
      $('.block-talkback_story').hide();
    },
    on: function(){
      $('.block-talkback_story').show();
    }
  }
}

var cnn = function(){
  return {
    off: function(){
      $('#dsq-content').hide();
    },
    on: function(){
      $('#dsq-content').show();
    }
  }
}

var digg = function(){
  return {
    off: function(){
      $('.comments').hide()
      $('#comments').hide()
    },
    on: function(){
      $('.comments').show()
      $('#comments').show()
    }
  }
}

var hacker_news_main = function(){
  return {
    off: function(){
      $(".subtext > a[href^='item']").hide();
    },
    on: function(){
      $(".subtext > a[href^='item']").show();
    }
  }
  
}
  
var hacker_news_topic = function(){
  return {
    off: function(){
      $('.comment:first').parent().parent().parent().parent().parent().parent().parent().hide();
      $('form:first').hide()
      $(".subtext > a[href^='item']").hide();      
    },
    on: function(){
      $('.comment:first').parent().parent().parent().parent().parent().parent().parent().show();
      $('form:first').show()
      $(".subtext > a[href^='item']").show();      
    }
  }

}

var metafilter_main = function(){
  return {
    off: function(){
      $('.more').hide();
      $('.new').parent().hide();
      $('.welcome').html($('.welcome').html().replace(/and ([\d]* comments)/, ''));
    },
    on: function(){
      $('.more').show();
      $('.new').parent().show();
      // $('.welcome').html($('.welcome').html().replace(/and ([\d]* comments)/, ''));
    }
  }

}

var metafilter_topic = function(){
  return {
    off: function(){
      $('.comments').hide();
      $('#page').find('br').hide();
      $('#commentform').hide();      
    },
    on: function(){
      $('.comments').show();
      $('#page').find('br').show();
      $('#commentform').show();      
    }
  }

}

var reddit_main = function(){
  return {
    off: function(){
      $('.comments').each(function(index, elem){
        var link = $(elem);
        if(link.parent().parent().parent().find('.domain > a').html().match(/AskReddit/)){
          // do nothing
        }else{
          link.parent().hide();
        }
  
      });      
    },
    on: function(){
      $('.comments').parent().show();
    }
  }

}

var reddit_comments = function(){
  return {
    off: function(){
      $('.commentarea').hide();
      reddit_main().off();      
    },
    on: function(){
      $('.commentarea').show();
      reddit_main().on();      
    }
  }

}

var youtube_video = function(){
  return {
    off: function(){
      $('#watch-discussion').hide();
    },
    on: function(){
      $('#watch-discussion').show();
    }
  }
}

var do_nothing = function(){
  // do nothing
  return {
    off: function(){},
    on: function(){}
  }
}

var routes = [
  { regexp: /(ask|projects|music|jobs|podcast|metatalk)\.metafilter\.com/, func: false, name: 'other_metafilter' },
  { regexp: /metafilter\.com\/$/, func: metafilter_main, name: 'metafilter' },
  { regexp: /metafilter\.com\/[\d]+/, func: metafilter_topic, name: 'metafilter' },
  { regexp: /reddit\.com\/r\/AskReddit\/comments/, func: false, name: 'ask_reddit' },
  { regexp: /reddit\.com\/r\/[\w]\/comments/, func: reddit_comments, name: 'reddit' },
  { regexp: /reddit\.com/, func: reddit_main, name: 'reddit' },
  { regexp: /news\.ycombinator\.com\/item/, func: hacker_news_topic, name: 'hacker_news' },
  { regexp: /news\.ycombinator\.com\//, func: hacker_news_main, name: 'hacker_news' },
  { regexp: /youtube\.com\/watch\?/, func: youtube_video, name: 'youtube' },
  { regexp: /digg\.com\/[\w]+\/[\w_]+\/?$/, func: digg, name: 'digg' },
  { regexp: /digg\.com\/[\w]+\/?$/, func: digg, name: 'digg' },
  { regexp: /digg\.com/, func: digg, name: 'digg' },
  { regexp: /cnn\.com/, func: cnn, name: 'cnn' },
  { regexp: /aintitcool\.com\/node/, func: aint, name: 'aint' },
  { regexp: /(deadspin|gawker|kotaku|jezebel|io9|jalopnik|gizmodo|lifehacker)\.com\/[\d]+/, func: gawker, name: 'gawker' },
  { regexp: /(deadspin|gawker|kotaku|jezebel|io9|jalopnik|gizmodo|lifehacker)\.com/, func: gawker_main, name: 'gawker' },
  { regexp: /gothamist\.com\/[\d]+\/[\d]+/, func: gothamist_topic, name: 'gothamist' },
  { regexp: /gothamist\.com/, func: gothamist_main, name: 'gothamist' },
  { regexp: /techcrunch\.com\/[\d]+/, func: techcrunch_article, name: 'techcrunch' },
  { regexp: /nytimes\.com\/[\d]+/, func: nytimes_article, name: 'nytimes' },
  { regexp: /buzz\.yahoo\.com\/article/, func: yahoo_buzz, name: 'yahoo_buzz' },
  { regexp: /buzz\.yahoo\.com\/?$/, func: yahoo_buzz_main, name: 'yahoo_buzz' },
  { regexp: /cracked\.com/, func: cracked, name: 'cracked' },
  { regexp: /news\.yahoo\.com/, func: yahoo_news, name: 'yahoo_news' },
  { regexp: /slate\.com\/id/, func: slate, name: 'slate' },
  { regexp: /lvrj\.com\/[\w]+/, func: lvrj, name: 'lvrj' },
  { regexp: /gametrailers\.com\/video/, func: gametrailers, name: 'gametrailers' },
  { regexp: /slashdot\.org/, func: slashdot, name: 'slashdot'},
  { regexp: /cbc\.ca/, func: cbcca, name: 'cbcca'},
  { regexp: /usatoday\.com/, func: usatoday, name: 'usatoday'},
  { regexp: /reuters\.com/, func: reuters, name: 'reuters'},
  { regexp: /huffingtonpost\.com\/[\d]+/, func: huff, name: 'huff'},
  { regexp: /latimes\.com\/[\w]+/, func: latimes, name: 'latimes'}
]

var match_route = function(r, h){
  for(var i = 0; i < r.length; i++){
    if(h.match(r[i].regexp)){
      return r[i];
    }
  }
}

var route = match_route(routes, document.location.href);

if(route && route.func){
  chrome.extension.sendRequest({}, function(response){});
  
  console.log(route);
  
  if(localStorage[route.name] == "on"){
    localStorage['current_route'] = "on";
  }else{
    localStorage['current_route'] = "off";
    route.func().off();
  }
  
}

// gotta listen for the popup to send a message for turning on/off comments:

chrome.extension.onConnect.addListener(function(port) {
  
  port.onMessage.addListener(function(msg) {
    
    if(msg.comments){
      // comments turned on
      console.log('in comments.js: the checkbox changed to checked');
      route.func().on()
      localStorage[route.name] = "on";
      localStorage['current_route'] = "on";
    }else{
      // comments turned off
      console.log('in comments.js: the checkbox changed to unchecked');
      route.func().off()
      localStorage[route.name] = "off";
      localStorage['current_route'] = "off";
    }
  });
});
