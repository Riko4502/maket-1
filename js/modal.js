
document.addEventListener('DOMContentLoaded', function() {
    let modalBtn = document.querySelectorAll('.open-modal');
    let closeBtn = document.querySelectorAll('.modal-close');

    modalBtn.forEach(function(item){
        item.addEventListener('click', function(e) {
            let modalId = this.getAttribute('data-modal'), 
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.remove('hidden');
            modalElem.classList.add('open');
        });
    });

    closeBtn.forEach(function(item){
        item.addEventListener('click', function(e) {
           let parentModal = this.closest('.modal');
  
           parentModal.classList.add('hidden');
           parentModal.classList.remove('open');
        });
    });
});