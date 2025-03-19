document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classlist.add('dragging');
    })

    card.addEventListener('dragend', e => {
        e.currentTarget.classlist.remove('dragging');
    })
})

document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classlist.add('drag-hover');
    })
    column.addEventListener('dragleave', e => {
        e.currentTarget.classlist.remove('drag-hover');
    })

    column.addEventListener('drop', e => {
        e.currentTarget.classlist.remove('drag-hover');
        
        const dragCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(dragCard);
    })
})
