import { Button } from "@mui/material"


export default function MyButtonTeste(props) {
    return <Button
        variant={props.variant}
        size={props.size}
        endIcon={props.icon}
        sx={{
            backgroundColor: `${props.color}`,
            borderRadius: 2,
            '&:hover': {
                backgroundColor: '#FFFFFF',
                color: '#3c52b2',
            }
        }}>

    {props.text}</Button>
}