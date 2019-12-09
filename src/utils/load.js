// export const onChange = (e, ctx, cw, ch) => {
//     const reader = new FileReader()

//     reader.onload = ev => {
//         const img = new Image()
//         img.onload = () => {
//             cw = img.width
//             ch = img.height
//             ctx.drawImage(img, 0, 0)
//         }
//         img.src = ev.target.result
//     }
//     reader.readAsDataURL(e.target.files[0])
// }

export const download = (canv) => {
    const img = canv.toDataURL("image/png").replace("image/png", "image/octet-stream")
    window.location.href = img
}