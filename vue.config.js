module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['electron-edge-js'],
      builderOptions: {
        asarUnpack: [ "node_modules/edge-cs", "node_modules/electron-edge-js" ],
      }
    }
  },
}


