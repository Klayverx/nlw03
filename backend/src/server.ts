import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

app.use(express.json());

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP (GET, POST, PUT, DELETE)
// Parâmetros

// GET - Buscar uma informação (lista, item)
// POST - Criar uma informação
// PUT - Editar uma informação
// DELETE - Deletar uma informação

// Query Params: http://localhost:3333/users?search=klayver
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    // open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    // open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.json({ message: 'Hello World' });
});

app.listen(3333);
