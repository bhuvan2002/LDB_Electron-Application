const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 768,
        height: 560
    });

    // Set the window to full screen
    mainWindow.setFullScreen(true);

    mainWindow.loadFile('src/index.html');

    // Register the global shortcut to prevent Alt+Tab key combination
    globalShortcut.register('CommandOrControl+Tab', () => {
        console.log("Alt-tab pressed");
        // You can add further actions if needed, but the shortcut is already prevented by default
    });

    // Unregister the global shortcut when the window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
        globalShortcut.unregisterAll();
    });
}

app.whenReady().then(() => {
    createWindow();

    // Register a 'CommandOrControl+Y' shortcut listener.
    globalShortcut.register('CommandOrControl+c', () => {
        // Do stuff when Y and either Command/Control is pressed.
    });

    globalShortcut.register('CommandOrControl+v', () => {
        // Do stuff when Y and either Command/Control is pressed.
    });

    globalShortcut.register('CommandOrControl+a', () => {
        // Do stuff when Y and either Command/Control is pressed.
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// Unregister the global shortcut when the application is closed
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
