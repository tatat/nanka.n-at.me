$ ->
  $('.image').fancybox();

  $(@).on 'click', 'a:not(:has(img))', (e)->
    if /^https?:\/\//.test(@.href) && @.host != location.host
      e.stopPropagation()
      e.preventDefault()
      window.open @.href, null
