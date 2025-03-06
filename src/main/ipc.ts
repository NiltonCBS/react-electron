import { ipcMain } from "electron";

ipcMain.handle('fetch-users', () => {
    console.log('BUSCANDO USUARIOS...');

    return [
        { id: 1, nome: 'John Doe' },
        { id: 2, nome: 'Lucas' },
        { id: 3, nome: 'Alice Johnson' },
    ]
});