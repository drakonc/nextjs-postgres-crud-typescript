import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const id:Number = Number(req.query.id)
    const { method } = req;

    switch (method) {
        case 'GET':
            return res.status(200).json({ name: 'Getting a Unique Tasks' });
        case 'PUT':
                return res.status(200).json({ name: 'Putting a Unique Tasks' });
        case 'DELETE':
            return res.status(200).json({ name: 'Deleting a Unique Tasks' });
        default:
            return res.status(400).json({ name: 'Invalid Method' });
    }
}