/*
 * Sidebar email button: copy the address to the clipboard and show a short
 * note, then let the link continue to open the visitor's email app. This way
 * the button still helps when no email app is set up.
 *
 * The theme builds the link as
 *   javascript:location.href = 'mailto:' + ['user','domain'].join('@')
 * so the address is read from that instead of being written into the page.
 */
(function () {
  'use strict';

  function emailFromLink(link) {
    var match = (link.getAttribute('href') || '').match(/\[\s*'([^']+)'\s*,\s*'([^']+)'\s*\]/);
    return match ? match[1] + '@' + match[2] : null;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = document.execCommand('copy');
      } catch (e) {}
      document.body.removeChild(area);
      ok ? resolve() : reject();
    });
  }

  var toast;
  var hideTimer;

  function showToast(message) {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'email-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3000);
  }

  function init() {
    var links = document.querySelectorAll('#sidebar a[aria-label="email"]');
    links.forEach(function (link) {
      var email = emailFromLink(link);
      if (!email) return;
      link.setAttribute('title', email);
      link.addEventListener('click', function () {
        copyText(email).then(
          function () {
            showToast('Email copied: ' + email);
          },
          function () {
            showToast(email);
          }
        );
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
