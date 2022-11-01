(function(){

    function Start(){
        console.log("My Portfolio");

      let deleteButtons =  document.querySelectorAll('.btn-danger')

      for(button of deleteButtons)
      {
        button.addEventListener('click',(event)=>{
         if (!confirm("Are you sure?"))
         {
            event.preventDefault();
            window.location.assign('/business-list');
         }
        });
      }

    }

    window.addEventListener("load",Start);
})();

