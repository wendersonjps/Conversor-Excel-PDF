var Reader = require('./Reader')
var Processor = require('./Processor')

var reader = new Reader()

async function main() {
    var data = await reader.Read('./users.csv')
    var processedData = Processor.Process(data)
}

main()
