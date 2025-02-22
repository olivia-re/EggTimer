const { app, BrowserWindow } = require('electron');
const path = require('path');

// filepath: /c:/Users/olivi/Portfolio/EggTimer/src/main.js
if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/../node_modules/electron`)
  });
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));
}

app.whenReady().then(createWindow);