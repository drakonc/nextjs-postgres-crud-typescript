import { Button, Card, Form, Icon} from 'semantic-ui-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router';
import { Task } from 'src/interfaces/Task'
import Layout from 'src/components/Layout';

export default function newPage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [task, setTask] = useState({title: '', description: '' })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    function handleChange({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        return setTask({ ...task, [name]: value });
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createTask(task);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task: Task) => {
        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    }

    return (
        <Layout>
            <Card centered>
                <Card.Content textAlign='center'>
                    <Card.Header>New Task</Card.Header>
                </Card.Content>
                <Card.Content>    
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" placeholder="Write your title" onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="description">Description:</label>
                            <textarea name="description" rows={2} placeholder="Write your description" onChange={handleChange}/>
                        </Form.Field>
                        <Button type="submit"><Icon name="save"/> Guargar</Button>
                    </Form>
                </Card.Content>
            </Card>
        </Layout>
    )
}