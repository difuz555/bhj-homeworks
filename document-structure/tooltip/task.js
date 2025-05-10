const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

hasTooltip.forEach(item => (
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.getAttribute('title') !== tooltip.textContent) {
            tooltip.classList.add('tooltip_active');
            tooltip.textContent = item.getAttribute('title');
            tooltip.style.left = item.getBoundingClientRect().left + 'px';
            item.insertAdjacentElement("afterend", tooltip);
        } else {
            tooltip.classList.toggle('tooltip_active');
        }
    })
))