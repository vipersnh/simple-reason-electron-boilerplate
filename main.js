'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow(
        {
            width: 880, 
            height: 600, 
            webPreferences: {
                nodeIntegration: true,
            },
        }
    );
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/src/index.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    let webContents = mainWindow.webContents
    webContents.on('did-finish-load', function() {
        webContents.setZoomFactor(1)
        webContents.setVisualZoomLevelLimits(1, 1)
        webContents.setLayoutZoomLevelLimits(0, 0)
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}
);

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
