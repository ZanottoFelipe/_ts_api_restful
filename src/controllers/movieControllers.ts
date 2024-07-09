import e, { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// Logger

import Logger from "../../config/loggers";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, Tente mais Tarde!" });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find({});
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, Tente mais Tarde!" });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe!" });
    }
    await movie.deleteOne();
    return res.status(200).json({ msg: "Filme removido com sucesso!" });
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, Tente mais Tarde!" });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: "Fime não encontrado" });
    }

    await MovieModel.updateOne({ _id: id }, data); //aqui faz a ataulizaçao de campo a campo pela req. tipo path
    return res.status(200).json(data); //retorna o filme atualizado
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, Tente mais Tarde!" });
  }
}
