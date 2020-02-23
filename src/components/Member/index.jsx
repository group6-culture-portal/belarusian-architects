
import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { Parallax, Background } from 'react-parallax';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import styles from './style.module.css';


export default function Member(props) {

    const [showLinks, toggleLinks] = useState(false)


    const getLinks = () => {
        const {links} = props
        let linksDom = [];

        for(let key in links) {
            linksDom.push(
                <a key={key}  target="blank" href={links[key]}>
                    <Button className={styles.link} variant="outlined" size="medium" color="primary">
                        {key}
                    </Button>
                </a>
            )
        }
        return linksDom
    }

    return (
        <div className={styles.member}>
            <Card className={null}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={props.image}
                        title={props.name}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h1" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="h3" color="textSecondary" component="p">
                           {props.info}
                        </Typography>
                        <Typography>
                            <a target="blank" href={props.github}>
                                <Button className={styles.button} onClick={()=>{}} 
                                    size="large" 
                                    variant="contained"
                                    color="primary">
                                        GitHub
                                </Button>
                            </a>
                            <Button className={styles.button} onClick={()=>{toggleLinks(showLinks ? false:true)}} 
                                size="large" 
                                variant="outlined"
                                color="primary">
                                    {showLinks ? "Hide" : "Learn more"}
                            </Button>
                        </Typography>
                    </CardContent>

                    <Collapse in={showLinks}>
                        <CardActions>
                            <div className={styles.links}>
                                {getLinks()}
                            </div>
                        </CardActions>
                    </Collapse>

                </CardActionArea>
            </Card>
        </div>
    )
}


