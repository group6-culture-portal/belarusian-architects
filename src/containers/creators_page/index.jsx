
import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { Parallax, Background } from 'react-parallax';

import styles from './style.module.css';


export default function CreatorsPage(props) {

    const { language } = useContext(languageContext);

    useEffect(()=>{
        
    },[])

    const getTitle = () => {
        switch (language) {
            case 'en':
                return <>Creators</>
            case 'ru':
                return <>Создатели</>
            case 'by':
                return <>Саздателi</>
            default:
                break;
        }
    }

    return(<div className={styles.creatorsPage}>
        <Typography className={styles.title} variant="h1" gutterBottom>
            {getTitle()}
        </Typography>
    </div>)
}


