export default function validateTextAreas(area) {
    const limit = 600
    let textLength = area.length
    if(textLength >= limit) {
        return 'Превышен лимит символов в поле'
    }
    return `Осталость ${limit-textLength} из ${limit}`
}