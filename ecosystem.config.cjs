module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            port: '6000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
