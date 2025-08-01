document.addEventListener('DOMContentLoaded', () => {

    // BANCO DE DADOS ATUALIZADO COM AS NOVAS INFORMAÇÕES
    const eventsData = [
        // JULHO
        { date: '2025-07-05', type: 'ATIVIDADE', title: 'Instalação da Gestão', description: 'Cerimônia de Instalação da 29ª Gestão do Capítulo Mozart Vallim.', local: 'Loja Maçônica', responsavel: 'Diretoria', tags: ['solene', 'instalação', 'gestão'] },
        { date: '2025-07-19', type: 'ATIVIDADE', title: 'Definição das Comissões', description: 'Apresentação e definição dos membros das Comissões Permanentes da gestão.', local: 'Loja Maçônica', responsavel: 'Diretoria', tags: ['planejamento', 'administrativo', 'comissões'] },
        { date: '2025-07-26', type: 'ATIVIDADE', title: 'Apresentação do Calendário', description: 'Apresentação e aprovação do calendário oficial da 29ª Gestão.', local: 'Loja Maçônica', responsavel: 'Mestre Conselheiro', tags: ['planejamento', 'gestão', 'calendário'] },

        // AGOSTO
        { date: '2025-08-03', type: 'EVENTO', title: 'Cerimônia do Abraço', description: 'Cerimônia do Abraço na Loja São João.', local: 'Loja Maçônica São João', responsavel: 'Capítulo', tags: ['evento', 'abraço'] },
        { date: '2025-08-09', type: 'EVENTO', title: 'Chá das Mães e Trabalho Social', description: 'Evento de confraternização com o Clube de Mães e realização de trabalho social.', local: 'Loja Maçônica Cavaleiros de Malta', responsavel: 'Clube de Mães', tags: ['família', 'social', 'filantropia'] },
        { date: '2025-08-23', type: 'EVENTO', title: 'Cerimônia Pública', description: 'Realização de Cerimônia Pública para a Loja de Santa Mariana.', local: 'Santa Mariana', responsavel: 'Capítulo', tags: ['pública', 'divulgação', 'evento'] },
        { date: '2025-08-26', type: 'EVENTO', title: 'Cerimônia Pública', description: 'Realização de Cerimônia Pública para a Loja de Uraí.', local: 'Uraí', responsavel: 'Capítulo', tags: ['pública', 'divulgação', 'evento'] },
        { date: '2025-08-30', type: 'REUNIÃO', title: 'Escrutínio', description: 'Realização de escrutínio para novos candidatos.', local: 'Loja Maçônica Cavaleiros de Malta', responsavel: 'Mestre Conselheiro', tags: ['ritualística', 'escrutínio', 'administrativo'] },

        // SETEMBRO
        { date: '2025-09-06', type: 'ATIVIDADE', title: 'Ano DeMolay', description: 'Atividade relacionada com o Tema Anual “Juventude e Futuro: A Ordem DeMolay diante da Inteligência Artificial”.', local: 'Loja Maçônica Cavaleiros de Malta', responsavel: 'Comissão de Educação', tags: ['educacional', 'tecnologia', 'CNIE'] },
        { date: '2025-09-07', type: 'ATIVIDADE', title: 'Desfile Cívico', description: 'Participação no desfile cívico da cidade em comemoração à Independência do Brasil.', local: 'Avenida Principal', responsavel: 'Capítulo', tags: ['cívico', 'patriota', 'desfile', 'CNIE'] },
        { date: '2025-09-13', type: 'ATIVIDADE', title: 'Cerimônia de Iniciação', description: 'Realização da cerimônia para admissão de novos membros na Ordem DeMolay.', local: 'Loja Maçônica Cavaleiros de Malta', responsavel: 'Mestre Conselheiro', tags: ['iniciação', 'ritualística', 'CNIE'] },
        { date: '2025-09-21', type: 'ATIVIDADE', title: 'Porco no Rolete', description: 'Principal evento de arrecadação de fundos da gestão.', local: 'CTG', responsavel: 'Comissão de Finanças', tags: ['filantropia', 'comunidade', 'CNIE'] },

        // OUTUBRO
        { date: '2025-10-11', type: 'EVENTO', title: 'Participação no CEOD', description: 'Participação no Congresso Estadual da Ordem DeMolay (11 e 12 de Outubro).', local: 'Guarapuava', responsavel: 'Todos', tags: ['distrital', 'CEOD', 'congresso'] },
        { date: '2025-10-18', type: 'ATIVIDADE', title: 'Trabalho com a Maçonaria', description: 'Planejar e executar uma atividade em parceria com a Loja Maçônica.', local: 'Loja Maçônica', responsavel: 'Diretoria', tags: ['maçonaria', 'integração', 'CNIE'] },
        { date: '2025-10-23', type: 'EVENTO', title: '14 Anos do Capítulo', description: 'Data oficial de aniversário do Capítulo Mozart Vallim.', local: 'Capítulo', responsavel: 'Todos', tags: ['comemoração', 'aniversário'] },
        { date: '2025-10-25', type: 'EVENTO', title: 'Festa de 14 Anos', description: 'Evento comemorativo pelo aniversário de 14 anos do Capítulo Mozart Vallim.', local: 'A definir', responsavel: 'Comissão de Eventos', tags: ['comemoração', 'festa', 'aniversário'] },

        // NOVEMBRO
        { date: '2025-11-08', type: 'ATIVIDADE', title: 'Dia do Meu Governo', description: 'Visita à Câmara de Vereadores ou palestra para entender o funcionamento do governo.', local: 'Câmara Municipal', responsavel: 'Comissão Cívica', tags: ['cívico', 'governo', 'CNIE'] },
        { date: '2025-11-15', type: 'ATIVIDADE', title: 'Eleição para 30ª Gestão', description: 'Realização das eleições para a próxima diretoria do Capítulo.', local: 'Loja Maçônica', responsavel: 'Comissão Eleitoral', tags: ['eleição', 'administrativo', 'gestão'] },
        { date: '2025-11-22', type: 'ATIVIDADE', title: 'Dia em Memória a Frank S. Land', description: 'Cerimônia ou palestra em honra ao fundador da Ordem DeMolay.', local: 'Loja Maçônica', responsavel: 'Comissão de Educação', tags: ['CNIE','Educação'] },
        { date: '2025-11-29', type: 'ATIVIDADE', title: 'Evento Regional', description: 'Cerimônia de Iniciação ao Grau DeMolay.', local: 'Loja Maçônica', responsavel: 'Mestre COnselheiro Regional', tags: ['Elevação', 'ritualística', 'CNIE'] },

        // DEZEMBRO
        { date: '2025-12-06', type: 'ATIVIDADE', title: 'Dia do Conforto', description: 'Visita a um asilo, orfanato ou entidade similar, promovendo bem-estar e empatia.', local: 'Asilo ou Orfanato', responsavel: 'Comissão de Filantropia', tags: ['filantropia', 'social', 'CNIE'] },
        { date: '2025-12-12', type: 'EVENTO', title: 'Confraternização de Encerramento', description: 'Última reunião da gestão com confraternização e encerramento dos trabalhos.', local: 'A definir', responsavel: 'Todos', tags: ['confraternização', 'encerramento', 'festa'] },
    ];
    
    // --- LÓGICA DA AGENDA (Nenhuma alteração aqui) ---
    const eventsContainer = document.getElementById('events-container');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('detailsModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalDate = document.getElementById('modal-date');
    const modalBody = document.getElementById('modal-body');
    const mesesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const renderEvents = (events) => {
        eventsContainer.innerHTML = '';
        if (events.length === 0) {
            eventsContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-medium);">Nenhuma atividade encontrada para sua busca.</p>';
            return;
        }

        const eventsByMonth = events.reduce((acc, event) => {
            const month = mesesNomes[new Date(event.date + 'T12:00:00').getMonth()];
            if (!acc[month]) acc[month] = [];
            acc[month].push(event);
            return acc;
        }, {});

        for (const month in eventsByMonth) {
            const monthGroup = document.createElement('div');
            monthGroup.className = 'month-group';

            const monthTitle = document.createElement('h2');
            monthTitle.textContent = month;
            monthGroup.appendChild(monthTitle);

            const grid = document.createElement('div');
            grid.className = 'events-grid';

            eventsByMonth[month].forEach(event => {
                const card = document.createElement('div');
                card.className = 'event-card';
                card.innerHTML = `
                    <div class="card-header">
                        <div class="date-icon"></div>
                        <span class="date">${event.date.substring(8, 10)}/${event.date.substring(5, 7)}</span>
                        <h3>${event.title}</h3>
                    </div>
                    <div class="card-details">
                        <div>Local: <span>${event.local}</span></div>
                        <div>Responsável: <span>${event.responsavel}</span></div>
                    </div>
                    <div class="card-tags">
                        ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                `;
                card.addEventListener('click', () => openModal(event));
                grid.appendChild(card);
            });

            monthGroup.appendChild(grid);
            eventsContainer.appendChild(monthGroup);
        }
    };
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredEvents = eventsData.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.responsavel.toLowerCase().includes(searchTerm) ||
            event.type.toLowerCase().includes(searchTerm) ||
            event.local.toLowerCase().includes(searchTerm) ||
            event.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        renderEvents(filteredEvents);
    });

    const openModal = (event) => {
        const [year, month, day] = event.date.split('-');
        modalDate.textContent = `${day}/${month}/${year}`;
        modalBody.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        `;
        modal.classList.add('visible');
    };

    const closeModal = () => modal.classList.remove('visible');
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Renderização Inicial Inteligente
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const proximosEventos = eventsData
        .filter(e => new Date(e.date + 'T12:00:00') >= hoje)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    renderEvents(proximosEventos);
});