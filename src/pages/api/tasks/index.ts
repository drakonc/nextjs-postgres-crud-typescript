import type { NextApiRequest, NextApiResponse } from 'next'
import tasksController from '../../../controller/tasksController';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    
    const { method } = req;

    switch (method) {
        case 'GET':
            const tasks = tasksController.getTasks();
            return res.status(200).json(tasks);
        case 'POST':
            return res.status(200).json({ name: 'Posting Tasks' });
        case 'PUT':
            return res.status(200).json({ name: 'Putting Tasks' });
        case 'DELETE':
            return res.status(200).json({ name: 'Deleting Tasks' });
        default:
            return res.status(400).json({ name: 'Invalid Method' });
    }

}