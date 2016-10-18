(function() {
  if (Discourse.dialect_deprecated) { return; }

  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/surveygizmo\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(http?:)?\/\/surveygizmo\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
})();
