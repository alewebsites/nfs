document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    header.addEventListener('click', function() {
      const isOpen = item.classList.contains('active');
      
      // Cerrar todos los acordeones
      accordionItems.forEach(accItem => {
        accItem.classList.remove('active');
        accItem.querySelector('.accordion-content').style.height = '0px';
      });
      
      if (!isOpen) {
        // Abrir el acordeón clickeado
        item.classList.add('active');
        content.style.height = 'auto';
        let height = content.clientHeight + 'px';
        content.style.height = '0px';
        setTimeout(function() {
          content.style.height = height;
        }, 0);
      }
    });
  });
});