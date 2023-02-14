(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/nazarii-cbf\.cashbackforex\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/nazarii-rkfx\.cashbackforex\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
})();
