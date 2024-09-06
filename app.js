
function Buscar() {
    // Essa função é acionada quando o botão "Buscar" é clicado (assumindo que há um botão com um evento onclick)
  
    console.log("CLICOU"); // Mensagem no console para confirmar que a função foi chamada
  
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
    console.log(section); // Verifica se a seção foi encontrada corretamente
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let topico = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        topico = dado.topico.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se topico includes campoPesquisa
        if (topico.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.topico}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
        if(!campoPesquisa){
            section.innerHTML = "<h3>pesquisa vazia!</h3>"
            return;
        }
        if(!resultados){
            resultados = "não houve resultados";
        }

        campoPesquisa = campoPesquisa.toLowerCase();
            

  
    // Atribui o HTML gerado para o conteúdo interno da seção
    section.innerHTML = resultados;
  }
