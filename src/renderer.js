const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('appInfo');
});

ipcRenderer.on('appInfo', (event, info) => {
  nameField.innerText = info.name;
  versionField.innerText = info.version;
});