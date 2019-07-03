import * as Router from 'koa-router';

import Note, { noteNormalizer, convertNoteToResponse } from '../models/Note';

export const findAll = async (ctx: Router.IRouterContext) => {
  const notes = await Note.find();
  const response = notes.map(convertNoteToResponse);
  ctx.body = JSON.stringify(response);
};

export const find = async (ctx: Router.IRouterContext) => {
  try {
    const id = ctx.params.id;
    const note = await Note.findById(id);
    if (!note) {
      throw Error('Note with specified id is not exist')
    }
    const response = convertNoteToResponse(note);
    ctx.body = JSON.stringify(response);
  } catch (e) {
    ctx.throw(404, e);
  }
};

export const create = async (ctx: Router.IRouterContext) => {
  try {
    const note = noteNormalizer(ctx.request.body);
    const createdNote = await Note.create(note);
    const response = convertNoteToResponse(createdNote);
    ctx.body = JSON.stringify(response);

    // TEMPORARY
    if (note.title === 'error') {
      throw Error('Some error from server')
    }
    //
  } catch (e) {
    ctx.throw(400, e.message);
  }
};


export const remove = async (ctx: Router.IRouterContext) => {
  try {
    const { id } = ctx.request.body;
    await Note.deleteOne({ _id: id });
    ctx.status = 204;
  } catch (e) {
    ctx.throw(404, e);
  }
};
