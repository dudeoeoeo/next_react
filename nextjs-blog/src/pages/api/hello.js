export default function handler(req, res) {
    console.log("/api/hello")
    // res.status(200).json({ text: 'Hello' })
    res.redirect(307, '/api/bye');
}

// export default function handler(req, res) {
//     const { pid } = req.query
//     res.end(`Post: ${pid}`)
// }