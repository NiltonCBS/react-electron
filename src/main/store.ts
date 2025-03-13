import { app, ipcMain } from 'electron';
import PouchDB from 'pouchdb';
import path from 'node:path';
import fs from 'node:fs';
import { Customer, NewCustomer } from '../shared/types/ipc'
import { randomUUID } from 'node:crypto'


// Determinar o caminho base para o banco de dados com base no sistema operacinal

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

//função para buscar todos os clientes com try catch
async function fetchAllCustomers(): Promise<Customer[]> {
    try {
        const result = await db.allDocs({ include_docs: true });
        return result.rows.map(row => row.doc as Customer);
    } catch (err) {
        console.error("ERRO AO BUSCAR CLIENTES: ", err);
        return [];
    }
}

ipcMain.handle('fetch-all-customers', async () => {
    return await fetchAllCustomers();
})


//buscar cliente pelo id
async function fetchCustomerById(docId: string){
    return db.get(docId)
            .then(doc => doc)
            .catch(err => {
                console.error("ERRO AO BUSCAR CLIENTE POR ID: ", err);
                return null;
            });
}

ipcMain.handle('fetch-customer-id', async (event, docId) => {
    const result = await fetchCustomerById(docId);
    return result;
})

//Deletar cliente pelo id
async function deleteCustomer(docId: string): Promise<PouchDB.Core.Response | null> {
    try {
        const doc = await db.get(docId);
        const result = await db.remove(doc._id, doc._rev);
        return result;
    } catch (err) {
        console.error("ERRO AO DELETAR CLIENTE: ", err);
        return null;
    }
}

ipcMain.handle('delete-customer', async (event, docId: string): Promise<PouchDB.Core.Response | null> => {
    return await deleteCustomer(docId);
})

