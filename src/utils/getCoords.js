export const getCoords = (e, canv) => {
    const rect = canv.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    return [x, y]
}