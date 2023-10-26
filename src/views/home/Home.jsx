import React from "react";

export default function Home () {

   return(
    <html>
        <body >
            <div class="menu-div">
            
      
    <nav class="nav-MenuHome">
        <ul classe="Menu">
            <li class="menu-login">
                <a href="">Login</a>
            </li>
            <li class="menu-cadastro">
                <a href="">Cadastrar-se</a>
                <ul class="subs-Cadastro">
                  <li>
                    <a href="/CadaCliente">Cliente</a>
                    </li>  
                    <li>
                    <a href="/CadaFornecedor">Fornecedor</a>
                    </li>
                </ul>
            </li>
            <li class="menu-planejamento">
               <a href="">Planejamento</a>
            </li>
            <li class="menu-regiao">
               <a href="">Região</a>
            </li>
            <li class="menu-categorias">
                <a href="">Categorias</a>
                <ul class="subs-catego">
                  <li>
                    <a href="">Decoração    </a>
                    </li>  
                    <li>
                    <a href="">Buffet    </a>
                    </li>
                    <li>
                    <a href="">Fotográfos   </a>
                    </li>  
                </ul>
            </li>
            </ul>

    </nav>
    </div>
    <div class="div-meiosite">
    <p >De aniversários a casamentos, reuniões familiares a festas temáticas,
         o Meraki é o seu destino perfeito para planejar e organizar o evento dos seus sonhos. 
         Nós tornamos o processo de planejamento de festas mais fácil, mais inspirador e mais divertido!</p>
    </div>
   
    </body>
   
 
    </html>
   )
}
