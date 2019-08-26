
function test(cb){
  let out = document.querySelector('.out span');
  out.innerHTML = `Val: ${cb.val}, Html: ${cb.html}`;
}

function selecter(element, cb) {
  
  let el = document.querySelectorAll(element);
  
  for (let i = 0; i < el.length; i++) {
    
    let self      = el[i];
    let btn       = self.querySelector('.selecter-btn--val');
    let btnCont   = btn.querySelector('.selecter-btn__content');
    let items     = self.querySelectorAll('.selecter-btn--item');
    
    btn.addEventListener('click', function(e){
      e.preventDefault();
      self.classList.toggle('is-open');
    })
    
    for (let j = 0; j < items.length; j++) {
      
      let item = items[j];
      item.addEventListener('click', function(e){
        e.preventDefault();
        
        let itemCont      = item.querySelector('.selecter-btn__content').innerHTML;
        let itemValue     = this.getAttribute('data-value');
        btnCont.innerHTML = itemCont;
        self.classList.remove('is-open');
        self.setAttribute('data-value', itemValue);
        let cbobj = {
          el: this,
          parent: self,
          html: itemCont,
          val: itemValue
        };
        if(cb) cb(cbobj);
      })
      
    }
    
  }
  
  
}


selecter('.selecter', test)
