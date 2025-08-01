import Alert from '@mui/material/Alert'


export default function Success({ actionMessage }:{actionMessage: string}){
    return(
        <div>
            <Alert severity="success">{actionMessage}</Alert>
        </div>
    )
}