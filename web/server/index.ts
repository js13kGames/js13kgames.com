import { NextApiRequest, NextApiResponse } from 'next';

export type RouteHandler = (req: NextApiRequest, res: NextApiResponse, options?: any) => void;

export enum RouteHandlerMethods {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

export type RouteMap = {
    [key in RouteHandlerMethods]?: RouteHandler;
};

export const map_routes = (route_map: RouteMap) => (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    console.log(method);

    if (route_map[method] && typeof route_map[method] === 'function') {
        route_map[method](req, res);
    } else {
        res.status(404).json({
            error: 404,
            message: `Api route ${req.method.toUpperCase()}: ${req.url} doesn't exist`
        });
    }
}

