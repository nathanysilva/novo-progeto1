async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados);
    
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Ploty.newPlot(grafico,data)
    
    }
    
    quantidadeUsuariosPorRede();

    const laytout = {
        Ploty_bgcolor: getcss('--bg-color');
        paper_bgcolor: getcss ('--bg-coçor');
        title: {
            Text: 'Rede sociais com mais usuários',
            x: 0,
            font:{

                color: getCSS('--primary-color'),
                size: 30,
            }

        }
    }