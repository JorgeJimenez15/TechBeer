const fs = require('fs')
const MAX_SIZE = 4096
let count = 0

function splitFile(filename) {
    const content = fs.readFileSync(`../frontend/dist/assets/${filename}`, 'utf8')
    const extension = filename.split('.').pop()[0]
    let files = []

    for (let index = 0, characters = content.length; index < characters; index += MAX_SIZE) {
        const chunk = content.substring(index, index + MAX_SIZE)
        const name = `${extension}${count++}`
        
        fs.writeFileSync(`dist/c/${name}`, chunk)
        files.push(name)
    }

    return files
}

function htmlFile() {
    const content = fs.readFileSync(`../frontend/dist/index.html`, 'utf8')
    const no_lines = content.replace(/(?:\r\n|\r|\n|\s\s)/g, '')
    const body = /<body[^>]*>((.|[\n\r])*)<\/body>/im.exec(no_lines)[1]
    
    const html = fs.readFileSync('src/index.html', 'utf8')
    const replace = html.replace('BODY', body)

    fs.writeFileSync('dist/index.html', replace)
}

function styleFile(chunks) {
    const string = chunks.map(chunk => `'${chunk}'`).join(',')
    const style = fs.readFileSync('src/style.js', 'utf8')
    const content = style.replace('CHUNKS', string)

    return content
}

function scriptFile(chunks) {
    const string = chunks.map(chunk => `'${chunk}'`).join(',')
    const script = fs.readFileSync('src/script.js', 'utf8')
    const content = script.replace('CHUNKS', string)

    return content
}

function routeFile(chunks) {
    const route = fs.readFileSync('src/route.py', 'utf8')
    let content = ''

    for (let index = 0; index < chunks.length; index++) {
        content += route.replace(/{CHUNK}/g, chunks[index])
    }

    return content
}

function main() {
    const files = fs.readdirSync('../frontend/dist/assets/')
    let loader = '(async()=>{let c,d,s;'
    let route = '@server.route("/l.js")\ndef cl(_):\n\tf = open("l.js", "r")\n\treturn f.read(), 200\n'

    for (const file of files) {
        const extension = file.split('.').pop()
        const chunks = splitFile(file)
        
        if (extension === 'css') loader += styleFile(chunks)
        else loader += scriptFile(chunks)

        route += routeFile(chunks)
    }

    loader += 'document.getElementById("l").style.display="none",document.getElementById("a").style.display="block"})()'

    htmlFile()
    fs.writeFileSync('dist/l.js', loader)
    fs.writeFileSync('dist/route.py', route)
}

main()