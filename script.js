
window.onload = function() {
    alert("Seja bem-vindo(a) ao IFCE Campus Boa Viagem!");


    const titulo = document.querySelector('.apresentacao__conteudo__titulo');
    titulo.addEventListener('click', function() {
        const tamanhoAtual = parseFloat(window.getComputedStyle(titulo).fontSize);
        titulo.style.fontSize = (tamanhoAtual + 2) + 'px';
    });

    
    const exibirAvisoBtn = document.createElement('button');
    exibirAvisoBtn.textContent = 'Exibir aviso';
    exibirAvisoBtn.className = 'custom-btn';
    
    exibirAvisoBtn.addEventListener('click', function() {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = 'As inscrições para os cursos estão abertas!';
        novoParagrafo.style.marginTop = '20px';
        novoParagrafo.style.fontFamily = "'Montserrat', sans-serif";
        document.querySelector('main').appendChild(novoParagrafo);
    });
    
    document.querySelector('main').appendChild(exibirAvisoBtn);

    
    const alterarFooterBtn = document.createElement('button');
    alterarFooterBtn.textContent = 'Alterar rodapé';
    alterarFooterBtn.className = 'custom-btn';
    
    alterarFooterBtn.addEventListener('click', function() {
        document.querySelector('.rodape').innerHTML = 'Todos os direitos reservados';
    });
    
    document.querySelector('main').appendChild(alterarFooterBtn);

    
    const imageSection = document.querySelector('.apresentacao__imagem');
    
    const altInput = document.createElement('input');
    altInput.type = 'text';
    altInput.id = 'image-alt-text';
    altInput.placeholder = 'Digite a nova descrição da imagem';
    
    const altButton = document.createElement('button');
    altButton.textContent = 'Alterar descrição da imagem';
    altButton.className = 'custom-btn';
    
    altButton.addEventListener('click', function() {
        const novoAlt = altInput.value.trim();
        if (novoAlt) {
            document.getElementById('ifce-image').setAttribute('alt', novoAlt);
            alert('Descrição da imagem atualizada com sucesso!');
        } else {
            alert('Por favor, digite uma descrição para a imagem.');
        }
    });
    
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'image-controls';
    controlsDiv.appendChild(altInput);
    controlsDiv.appendChild(altButton);
    
    imageSection.appendChild(controlsDiv);

    
    const modoNoturnoBtn = document.createElement('button');
    modoNoturnoBtn.textContent = 'Ativar modo noturno';
    modoNoturnoBtn.className = 'custom-btn';
    
    modoNoturnoBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        
        modoNoturnoBtn.textContent = document.body.classList.contains('dark-mode') 
            ? 'Desativar modo noturno' 
            : 'Ativar modo noturno';
        
        
        const botoesLinks = document.querySelectorAll('.apresentacao__links__ancora');
        botoesLinks.forEach(botao => {
            if (document.body.classList.contains('dark-mode')) {
                botao.style.backgroundColor = '#333';
                botao.style.color = '#fff';
            } else {
                botao.style.backgroundColor = '';
                botao.style.color = '';
            }
        });
    });
    
    document.querySelector('main').appendChild(modoNoturnoBtn);

    
    const topoBtn = document.createElement('button');
    topoBtn.textContent = 'Ir para o topo';
    topoBtn.id = 'topo-btn';
    
    topoBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(topoBtn);
    
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            topoBtn.style.display = 'block';
        } else {
            topoBtn.style.display = 'none';
        }
    });
};