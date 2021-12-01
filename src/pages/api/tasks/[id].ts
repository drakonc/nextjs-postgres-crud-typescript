import type { NextApiRequest, NextApiResponse } from 'next'
import { conn } from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body } = req;
    const id:Number = Number(query.id)
    switch (method) {
        case 'GET':
            try {
                const query = "SELECT * FROM Tasks WHERE id = $1";
                const values = [id];
                const response = await conn.query(query, values);
                if(response.rows.length === 0) 
                    return res.status(404).json({message: "Task Not Found"});
                return res.status(200).json(response.rows[0]);
            } catch (error:any) {
                return res.status(500).json(error.message);
            }
        case 'PUT':
            try {
                const query = "UPDATE Tasks SET title = $1 , description = $2 WHERE id = $3 RETURNING *";
                const { title, description } = body;
                const values = [title, description, id];
                const response = await conn.query(query, values);
                if(response.rows.length === 0) 
                    return res.status(404).json({message: "Task Not Found"});
                return res.status(200).json(response.rows[0]);
            } catch (error:any) {
                return res.status(500).json(error.message);
            }
        case 'DELETE':
            try {
                const query = "DELETE FROM Tasks WHERE id = $1 RETURNING *";
                const values = [id];
                const response = await conn.query(query, values);
                if(response.rowCount === 0) 
                    return res.status(404).json({message: "Task Not Found"});
                return res.status(200).json(response.rows[0]);
            } catch (error:any) {
                return res.status(500).json(error.message);
            }
        default:
            return res.status(400).json({ name: 'Method not Allowed' });
    }
}