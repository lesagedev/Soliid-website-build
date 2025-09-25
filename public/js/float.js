/*! Copyright (C) GTranslate Inc. - Lite Version */
(function(){
  var gt = window.gtranslateSettings || {};
  gt = gt[document.currentScript.getAttribute('data-gt-widget-id')] || gt;

  if(gt.default_language == null) {
    console.log('gtranslateSettings is not properly initialized');
    return;
  }

  // Simplified language arrays - only essential languages
  var lang_array_english = {
    "fr": "French", "en": "English", "de": "German", "es": "Spanish",
    "it": "Italian", "ar": "Arabic", "tr": "Turkish", "pt": "Portuguese"
  };

  var lang_array_native = {
    "fr": "Français", "en": "English", "de": "Deutsch", "es": "Español",
    "it": "Italiano", "ar": "العربية", "tr": "Türkçe", "pt": "Português"
  };

  var default_language = gt.default_language;
  var languages = gt.languages || Object.keys(lang_array_english);
  var flags_location = 'https://cdn.gtranslate.net/flags/svg/';
  var switcher_vertical_position = gt.switcher_vertical_position || 'top';
  var float_switcher_open_direction = gt.float_switcher_open_direction || 'bottom';
  var native_language_names = gt.native_language_names || false;
  var detect_browser_language = gt.detect_browser_language || false;
  var wrapper_selector = gt.wrapper_selector || '.gtranslate_wrapper';

  var lang_array = native_language_names ? lang_array_native : lang_array_english;
  var u_class = '.gt_lite-' + Date.now();

  var current_lang = document.querySelector('html').getAttribute('lang') || default_language;
  var googtrans_matches = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');
  current_lang = googtrans_matches && googtrans_matches[2].split('/')[2] || current_lang;

  if(!lang_array[current_lang]) current_lang = default_language;

  // Enhanced CSS with fixed hover issues and 2-language support
  var widget_css = `
    .gt_lite_switcher {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      overflow: visible;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      min-width: 160px;
      border: 1px solid rgba(0,0,0,0.08);
      position: relative;
    }
    .gt_lite_switcher:hover {
      box-shadow: 0 6px 25px rgba(0,0,0,0.2);
      transform: translateY(-1px);
    }
    .gt_lite_switcher img {
      width: 24px;
      height: 18px;
      margin-right: 10px;
      vertical-align: middle;
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 3px;
      object-fit: cover;
      flex-shrink: 0;
      transition: transform 0.2s ease;
    }
    .gt_lite_selected {
      padding: 12px 16px;
      cursor: pointer;
      background: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background-color 0.2s ease;
      border-radius: 8px;
      position: relative;
      z-index: 10;
    }
    .gt_lite_selected:hover {
      background: #f8f9fa;
    }
    .gt_lite_options {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      max-height: 250px;
      overflow-y: auto;
      display: none;
      background: #fff;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      border: 1px solid rgba(0,0,0,0.08);
      border-top: none;
      transform: translateY(-10px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 999;
    }
    .gt_lite_options.open {
      display: block;
      transform: translateY(0);
      opacity: 1;
    }
    .gt_lite_options::-webkit-scrollbar {
      width: 6px;
    }
    .gt_lite_options::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    .gt_lite_options::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }
    .gt_lite_options a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      text-decoration: none;
      color: #333;
      transition: all 0.2s ease;
      white-space: nowrap;
      position: relative;
      border-bottom: none;
    }
    .gt_lite_options a:last-child {
      border-radius: 0 0 8px 8px;
    }
    .gt_lite_options a:hover {
      background: #e3f2fd;
      color: #1976d2;
    }
    .gt_lite_options a:hover img {
      transform: scale(1.1);
    }
    .gt_lite_arrow {
      margin-left: auto;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: #666;
      font-size: 14px;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gt_lite_arrow.rotate {
      transform: rotate(180deg);
    }

    /* Special handling for single language option */
    .gt_lite_switcher.single-option .gt_lite_options a:only-child {
      border-radius: 0 0 8px 8px;
    }
  `;

  // Helper functions
  function getFlagSrc(lang) {
    return flags_location + lang + '.svg';
  }

  function createWidget() {
    var widget = document.createElement('div');
    widget.style.cssText = `position:fixed;top:100px;right:20px;z-index:999999;`;
    widget.className = u_class.substring(1);

    var switcher = document.createElement('div');
    switcher.className = 'gt_lite_switcher';

    var selected = document.createElement('div');
    selected.className = 'gt_lite_selected';

    var flagImg = document.createElement('img');
    flagImg.src = getFlagSrc(current_lang);
    flagImg.alt = current_lang;
    flagImg.onerror = function() {
      this.style.display = 'none';
    };

    var langSpan = document.createElement('span');
    langSpan.textContent = lang_array[current_lang];
    langSpan.style.fontWeight = '500';

    selected.appendChild(flagImg);
    selected.appendChild(langSpan);

    var options = document.createElement('div');
    options.className = 'gt_lite_options';

    // Function to rebuild options excluding current language
    function rebuildOptions() {
      options.innerHTML = '';

      var availableLanguages = languages.filter(function(lang) {
        return lang !== current_lang;
      });

      // Add special class for styling
      if(availableLanguages.length === 1) {
        switcher.classList.add('single-option');
      } else {
        switcher.classList.remove('single-option');
      }

      // Only show arrow and create options if there are other languages
      var arrow = selected.querySelector('.gt_lite_arrow');
      if(availableLanguages.length > 0) {
        if(!arrow) {
          arrow = document.createElement('span');
          arrow.className = 'gt_lite_arrow';
          arrow.innerHTML = '▼';
          selected.appendChild(arrow);
        }

        availableLanguages.forEach(function(lang) {
          var langLink = document.createElement('a');
          langLink.href = '#';
          langLink.setAttribute('data-lang', lang);

          var flagImg = document.createElement('img');
          flagImg.src = getFlagSrc(lang);
          flagImg.alt = lang;
          flagImg.onerror = function() {
            this.style.display = 'none';
          };

          var langText = document.createElement('span');
          langText.textContent = lang_array[lang];

          langLink.appendChild(flagImg);
          langLink.appendChild(langText);
          options.appendChild(langLink);
        });
      } else {
        // Remove arrow if no other languages available
        if(arrow) {
          arrow.remove();
        }
      }
    }

    // Initial build
    rebuildOptions();

    switcher.appendChild(selected);
    switcher.appendChild(options);
    widget.appendChild(switcher);

    // Store rebuild function for later use
    widget.rebuildOptions = rebuildOptions;

    return widget;
  }

  // Add CSS
  var style = document.createElement('style');
  style.textContent = widget_css;
  document.head.appendChild(style);

  // Add Google Translate element (essential for functionality)
  var gtElement = document.createElement('div');
  gtElement.id = 'google_translate_element2';
  gtElement.style.display = 'none';
  document.body.appendChild(gtElement);

  // Add widget to wrapper
  var wrapper = document.querySelector(wrapper_selector);
  var widget;
  if(wrapper) {
    widget = createWidget();
    wrapper.appendChild(widget);
  }

  // Original Google Translate integration logic
  function get_current_lang() {
    var keyValue = document.cookie.match('(^|;) ?googtrans=([^;]*)(;|$)');
    return keyValue ? keyValue[2].split('/')[2] : null;
  }

  function fire_event(element, event) {
    try {
      if(document.createEventObject) {
        var evt = document.createEventObject();
        element.fireEvent('on' + event, evt);
      } else {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(event, true, true);
        element.dispatchEvent(evt);
      }
    } catch(e) {}
  }

  function load_tlib() {
    if(!window.gt_translate_script) {
      window.gt_translate_script = document.createElement('script');
      gt_translate_script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';
      document.body.appendChild(gt_translate_script);
    }
  }

  window.doGTranslate = function(lang_pair) {
    if(lang_pair.value) lang_pair = lang_pair.value;
    if(lang_pair == '') return;
    var lang = lang_pair.split('|')[1];
    if(get_current_lang() == null && lang == lang_pair.split('|')[0]) return;
    var teCombo;
    var sel = document.getElementsByTagName('select');
    for(var i = 0; i < sel.length; i++)
      if(sel[i].className.indexOf('goog-te-combo') != -1) {
        teCombo = sel[i];
        break;
      }
    if(document.getElementById('google_translate_element2') == null ||
      document.getElementById('google_translate_element2').innerHTML.length == 0 ||
      teCombo.length == 0 || teCombo.innerHTML.length == 0) {
      setTimeout(function() {
        doGTranslate(lang_pair);
      }, 500);
    } else {
      teCombo.value = lang;
      fire_event(teCombo, 'change');
      fire_event(teCombo, 'change');
    }
  };

  window.googleTranslateElementInit2 = function() {
    new google.translate.TranslateElement({
      pageLanguage: default_language,
      autoDisplay: false
    }, 'google_translate_element2');
  };

  // Load Google Translate
  if(current_lang != default_language) {
    load_tlib();
  } else {
    document.querySelectorAll(u_class).forEach(function(e) {
      e.addEventListener('pointerenter', load_tlib);
    });
  }

  // Enhanced event handlers with dynamic option rebuilding
  var gt_open = false;

  function showOptions(switcher) {
    var options = switcher.querySelector('.gt_lite_options');
    var arrow = switcher.querySelector('.gt_lite_arrow');

    // Don't show options if there are no other languages
    if(!options || options.children.length === 0) {
      return;
    }

    gt_open = true;
    options.style.display = 'block';
    if(arrow) arrow.classList.add('rotate');

    setTimeout(function() {
      options.classList.add('open');
    }, 10);
  }

  function hideOptions() {
    gt_open = false;
    var options = document.querySelector('.gt_lite_options.open');
    var arrow = document.querySelector('.gt_lite_arrow.rotate');

    if(options) options.classList.remove('open');
    if(arrow) arrow.classList.remove('rotate');

    setTimeout(function() {
      if(options) options.style.display = 'none';
    }, 300);
  }

  function updateLanguage(langElement) {
    var lang = langElement.getAttribute('data-lang');
    var switcher = langElement.closest('.gt_lite_switcher');
    var selected = switcher.querySelector('.gt_lite_selected');

    var flagImg = selected.querySelector('img');
    var langSpan = selected.querySelector('span:not(.gt_lite_arrow)');

    // Update the selected language display
    flagImg.src = getFlagSrc(lang);
    flagImg.alt = lang;
    langSpan.textContent = lang_array[lang];

    // Update current language
    current_lang = lang;

    // Rebuild options to exclude the new current language
    if(widget && widget.rebuildOptions) {
      widget.rebuildOptions();
    }

    hideOptions();
  }

  // Event listeners with dynamic option support
  document.addEventListener('click', function(e) {
    var selected = e.target.closest('.gt_lite_selected');
    var langLink = e.target.closest('a[data-lang]');

    if(selected) {
      e.preventDefault();
      var switcher = selected.closest('.gt_lite_switcher');
      var options = switcher.querySelector('.gt_lite_options');

      // Only show options if there are available languages
      if(options && options.children.length > 0) {
        if(gt_open) {
          hideOptions();
        } else {
          showOptions(switcher);
        }
      }
    } else if(langLink) {
      e.preventDefault();

      // Perform translation
      doGTranslate(default_language + '|' + langLink.getAttribute('data-lang'));

      // Update UI
      updateLanguage(langLink);
    } else if(gt_open) {
      hideOptions();
    }
  });

  // Hide Google Translate elements
  var hideCSS = `
    div.skiptranslate, #google_translate_element2 { display: none !important; }
    body { top: 0 !important; }
    font font { background-color: transparent !important; box-shadow: none !important; position: initial !important; }
  `;
  var hideStyle = document.createElement('style');
  hideStyle.textContent = hideCSS;
  document.head.appendChild(hideStyle);

  // Auto-detect browser language with original logic
  if(detect_browser_language && window.localStorage && window.navigator &&
    localStorage.getItem('gt_autoswitch') == null &&
    !/bot|spider|slurp|facebook/i.test(navigator.userAgent)) {

    var accept_language = (navigator.language || navigator.userLanguage).toLowerCase();
    var preferred_language;

    switch(accept_language) {
      case 'zh':
      case 'zh-cn': preferred_language = 'zh-CN'; break;
      case 'zh-tw':
      case 'zh-hk': preferred_language = 'zh-TW'; break;
      case 'he': preferred_language = 'iw'; break;
      default: preferred_language = accept_language.substr(0, 2); break;
    }

    if(current_lang == default_language && preferred_language != default_language &&
      languages.includes(preferred_language)) {
      load_tlib();
      window.gt_translate_script.onload = function() {
        doGTranslate(default_language + '|' + preferred_language);
        var el = document.querySelector(u_class + ' a[data-lang="' + preferred_language + '"]');
        if(el) updateLanguage(el);
      };
    }

    localStorage.setItem('gt_autoswitch', 1);
  }
})();
