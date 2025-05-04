const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

hasTooltip.forEach(item => (
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('done');
        tooltip.classList.add('tooltip_active');
        tooltip.textContent = item.getAttribute('title');
        tooltip.style.left = item.getBoundingClientRect().left + 'px';
        item.insertAdjacentElement("afterend", tooltip);
    })
))