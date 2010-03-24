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
  {
    regexp: /(ask|projects|music|jobs|podcast|metatalk)\.metafilter\.com/,
    func: false,
    name: 'other_metafilter'
  },
  {
    regexp: /metafilter\.com\/$/,
    func: metafilter_main,
    name: 'metafilter'
  },
  {
    regexp: /metafilter\.com\/[\d]+/,
    func: metafilter_topic,
    name: 'metafilter'
  },
  {
    regexp: /reddit\.com/,
    func: reddit_main,
    name: 'reddit'
  },
  {
    regexp: /reddit\.com\/r\/AskReddit\/comments/,
    func: false,
    name: 'ask_reddit'
  },
  {
    regexp: /reddit\.com\/r\/[\w]\/comments/,
    func: reddit_comments,
    name: 'reddit'
  },
  {
    regexp: /news\.ycombinator\.com\/item/,
    func: hacker_news_topic,
    name: 'hacker_news'
  },
  {
    regexp: /news\.ycombinator\.com\//,
    func: hacker_news_main,
    name: 'hacker_news'
  },
  {
    regexp: /youtube\.com\/watch\?/,
    func: youtube_video,
    name: 'youtube'
  }
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
