import express from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { test } from '../services/test';

export const testRoute = async (request: express.Request, response: express.Response) => {
    try {
        response.status(StatusCodes.OK).send(await test(request.body.fail));
    } catch {
        response.status(StatusCodes.METHOD_FAILURE).send(ReasonPhrases.METHOD_FAILURE);
    }
};
