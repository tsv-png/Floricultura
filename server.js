const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;






const app = express();
const port = 3000;

app.use(bodyParser.json());

const url = "mongodb+srv://thais:JdMUViZok0qKP1ei@cluster0.4mnwtae.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'Floricultura';
const collectionName = 'usuarios';


MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error(':( Erro ao conectar ao MongoDB:', err);
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    app.get('/', (req, res) => {
        collection.find({}).toArray((err, usuarios) => {
          if (err) {
            console.error('Erro ao obter os usuários:', err);
            res.status(500).json({ message: 'Erro no servidor.' });
            return;
          }
          res.json(usuarios);
        });
      });

      app.post('/usuarios', (req, res) => {
        const usuario = req.body;
        collection.insertOne(usuario, (err) => {
          if (err) {
            console.error('Erro ao criar o usuário:', err);
            res.status(500).json({ message: 'Erro no servidor.' });
            return;
          }
          res.json({ message: 'Usuário criado com sucesso!' });
        });
      });

      app.put('/usuarios/:id', (req, res) => {
        const id = req.params.id;
        const usuario = req.body;
        collection.updateOne({ _id: id }, { $set: usuario }, (err) => {
          if (err) {
            console.error('Erro ao atualizar o usuário:', err);
            res.status(500).json({ message: 'Erro no servidor.' });
            return;
          }
          res.json({ message: 'Usuário atualizado com sucesso!' });
        });
      });

      app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({ _id: id }, (err) => {
      if (err) {
        console.error('Erro ao excluir o usuário:', err);
        res.status(500).json({ message: 'Erro no servidor.' });
        return;
      }
      res.json({ message: 'Usuário excluído com sucesso!' });
    });
  });


  app.listen(port, () => {
      console.log(`Servidor está ouvindo na porta ${port}`);
    });
  
})







