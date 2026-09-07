(function(){
  var checkoutUrl = '/checkout-page/';
  var popup = document.getElementById('leadPopup');
  var form = document.getElementById('leadForm');
  var close = document.querySelector('.popup-close');
  function openPopup(e){
    var href = this.getAttribute('href') || '';
    if(href.includes('/checkout-page')){
      e.preventDefault();
      if(popup){popup.classList.add('active');popup.setAttribute('aria-hidden','false');}
    }
  }
  document.querySelectorAll('a[href*="/checkout-page"]').forEach(function(a){a.addEventListener('click',openPopup)});
  if(close){close.addEventListener('click',function(){popup.classList.remove('active');popup.setAttribute('aria-hidden','true')})}
  if(popup){popup.addEventListener('click',function(e){if(e.target===popup){popup.classList.remove('active');popup.setAttribute('aria-hidden','true')}})}
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var data = new FormData(form);
    var params = new URLSearchParams();
    ['firstName','lastName','email','phone','country','city'].forEach(function(k){params.set(k,data.get(k)||'')});
    window.location.href = checkoutUrl + '?' + params.toString();
  })}
})();
