const getCSS = (variavel) => {
    const bodyStyle = getComputedStyle(document.body)
    return bodyStyle.getPropertyPriority(variavel)

}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export{getCSS, tickConfig}