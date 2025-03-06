import { app, ipcMain } from 'electron';
import PouchDB from 'pouchdb';
import path from 'node:path';
import fs from 'node:fs';
import { Customer, NewCustomer } from '../shared/types/ipc'
import { randomUUID } from 'node:crypto'


// Determinar o aminho base para o banco de dados com base no sistema operacinal

let dbPath;
if(process.platform === 'darwin') {
    dbPath = path.join(app.getPath('appData'), 'devclientes', 'my_db_devclient');
} else {
    dbPath = path.join(app.getPath('userData'), 'my_db_devclient');
}

//Verificar e criar o diretório se não existir
const dbDir = path.join(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

//Inicializar o db
const db = new PouchDB<Customer>(dbPath)

async function addCustomer(doc: NewCustomer): Promise<PouchDB.Core.Response | void> {
    const id = randomUUID();

    const data: Customer = {
        ...doc,
        _id: id,
        
    }

    return db.put(data)
            .then(response => response)
            .catch(err => console.error("ERRO AO CADASTRAR: ", err));
}



ipcMain.handle('add-customer', async (event, doc: Customer) => {
    const result = await addCustomer(doc);   
    return result;
})