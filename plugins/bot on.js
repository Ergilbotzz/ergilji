let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak, Ergil tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(Ergilon)$/i

handler.admin = false

export default handler