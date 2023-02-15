class Processor {
    static Process(data) {
        var remover = data.split('\r\n')
        var rows = []

        remover.forEach((row) => {
            var array = row.split(',')
            rows.push(array)
        })

        return rows
    }
}

module.exports = Processor
