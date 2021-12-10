import { Button, Container, Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Image from "next/image"

export default function NavBar() {

    const router = useRouter();

    return (
        <Menu inverted attached style={{padding: '1.5rem'}} >
            <Container>
                <Menu.Item onClick={()=>router.push('/')}>
                    <Image src="https://react.semantic-ui.com/logo.png" alt='Image' width={30} height={30}/>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button onClick={()=>router.push('/tasks/new')}>New Task</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
