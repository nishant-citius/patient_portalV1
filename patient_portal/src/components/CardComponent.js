import {Card} from '../mui';
import {CardActionArea} from '../mui';
import {CardContent} from '../mui';
import {CardActions} from '../mui';
import {Button} from '../mui';
import { makeStyles } from '@material-ui/core';
import { BorderStyle } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "24px",
        fontFamily: "Verdana"
    },
    content: {
        padding: "3px",
    }
}));

function CardComponent(props)
{
    const classes = useStyles();
    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardContent>
                    <div className={classes.title}>
                        {props.title}
                    </div>
                    <div className={classes.content}>
                        {props.children}
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button variant="contained" color="secondary" size="medium">Submit</Button>
                <Button variant="contained" color="secondary" size="medium">Cancel</Button> */}
                {props.actionbuttons}
            </CardActions>
        </Card>
    );
}

export default CardComponent;