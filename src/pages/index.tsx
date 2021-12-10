import TaskList from 'src/components/Tasks/TaskList';
import {Grid, Button} from 'semantic-ui-react';
import { Task } from 'src/interfaces/Task';
import { useRouter } from 'next/router';
import Layout from 'src/components/Layout';
interface Props {
  tasks: Task[];
}

export default function IndexPage({tasks}: Props) {
   
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

   return <Layout>
        {tasks.length === 0 ? 
        <Grid columns={3} centered verticalAlign='middle' style={{height:"70%"}}>
          <Grid.Row>
            <Grid.Column>
              <h1>No tasks yet</h1>
              <Button onClick={() => router.push('/tasks/new')}> Create a New Task</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        :
         <TaskList tasks={tasks} />
        }
      </Layout>
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json();
  return {
    props: {
      tasks: tasks
    }
  }
}
