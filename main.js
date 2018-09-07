// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const elemon = require('elemon')
const path = require('path')
const fs = require('fs')
const util = require('util')

const readDir = util.promisify(fs.readdir)

const dirStats = async () => {
  const fileList = await readDir('markdown')
  const date = new Date()
  const dateFormat = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const fileInfo = {
    files: []
  }

  fileList.forEach((item, i) => {
    const fileValue = fs.readFileSync(`markdown/${item}`, 'utf8')
    fileInfo.files.push({
      name: item.slice(0, item.length - 3),
      date: dateFormat,
      value: fileValue
    })
  })
  return fileInfo
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 700,
    icon: path.join(__dirname, 'logo.png')
  })

  // IPC section ------------------------------------------------

  ipcMain.on('handle:createFile', (event, args) => {
    if (args.length > 1) {
      fs.writeFileSync(`markdown/${args}.md`, '')

      dirStats().then(data => {
        const files = JSON.stringify(data)
        fs.appendFile('markdown.json', files, err => {
          if (err) console.log(err)
        })
      })
    }
  })

  // ipcMain.on('handle:save', (event, args) => {
  //   fs.writeFile(`markdown/${args.file}.md`, args.value, err => {
  //     if (err) console.log(err)
  //   })
  // })

  // ipcMain.on('handle:fileSelection', (event, args) => {
  //   const fileText = fs.readFileSync(`markdown/${args}.md`, 'utf8')
  //   event.sender.send('file:text', fileText.toString())
  // })

  // --------------------------------------------------------------
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'public/index.html'))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()

  dirStats().then(data => {
    const files = JSON.stringify(data)
    fs.writeFile('markdown.json', files, err => {
      if (err) console.log(err)
    })
  })

  // Install React Dev Tools Extension
  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS
  } = require('electron-devtools-installer')

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err))

  elemon({
    app: app,
    mainFile: 'main.js',
    bws: [{ bw: mainWindow, res: ['index.html', 'bundle.js'] }]
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
