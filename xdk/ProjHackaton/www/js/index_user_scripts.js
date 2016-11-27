/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Entrar */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#login"); 
         return false;
    });
    
        /* button  Cadastro */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_page */
         activate_page("#cadastro"); 
         return false;
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_page */
         activate_page("#login"); 
         return false;
    });
    
        /* button  Entrar */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#main"); 
         return false;
    });
    
        /* button  Registrar-se */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#perguntas"); 
         return false;
    });
    
        /* button  Finalizar cadastro */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#login"); 
         return false;
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#cadastro"); 
         return false;
    });
    
        /* button  Fazer denúncia */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_page */
         activate_page("#denuncia"); 
         return false;
    });
    
        /* button  #voltarDenuncia */
    $(document).on("click", "#voltarDenuncia", function(evt)
    {
         /*global activate_page */
         activate_page("#main"); 
         return false;
    });
    
        /* button  Registrar */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#main"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
