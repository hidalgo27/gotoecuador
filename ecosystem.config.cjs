module.exports = {
    apps: [
        {
            name: 'gotoecuador',
            port: '6000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
