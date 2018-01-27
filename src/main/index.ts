import { app, BrowserWindow } from "electron";
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

const isDevelopment = process.env.NODE_ENV !== "production";
// Global reference to mainWindow
// Necessary to prevent win from being garbage collected
let mainWindow: BrowserWindow | null;

async function createMainWindow() {
  // Construct new BrowserWindow
  const window = new BrowserWindow();

  // Set url for `win`
  // points to `webpack-dev-server` in development
  // points to `index.html` in production
  const url = isDevelopment
    ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
    : `file://${__dirname}/index.html`;

  if (isDevelopment) {
    await Promise.all([
      installExtension(REACT_DEVELOPER_TOOLS),
      installExtension(REDUX_DEVTOOLS),
    ]);
    window.webContents.openDevTools();
  }
  window.maximize();
  window.loadURL(url);

  window.on("closed", () => {
    mainWindow = null;
  });

  return window;
}

// Quit application when all windows are closed
app.on("window-all-closed", () => {
  // On macOS it is common for applications to stay open
  // until the user explicitly quits
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", async () => {
  // On macOS it is common to re-create a window
  // even after all windows have been closed
  if (mainWindow === null) mainWindow = await createMainWindow();
});

// Create main BrowserWindow when electron is ready
app.on("ready", async () => {
  // window
  mainWindow = await createMainWindow();
});
