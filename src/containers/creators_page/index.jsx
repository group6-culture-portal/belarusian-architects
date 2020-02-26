
import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../../context/languageContext';
import { Typography, Button } from '@material-ui/core/';
import { Parallax, Background } from 'react-parallax';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './style.module.css';

import Member from '../../components/Member'
import { getCreatorsInfo } from '../../apis/getData';

export default function CreatorsPage(props) {

    const { language } = useContext(languageContext);

    const [creatorsData, setCreatorsData] = useState(null)

    useEffect(() => {
        getCreatorsInfo().then((res)=>{
            setCreatorsData(res)
        })
    },[])

    const getTitle = () => {
        switch (language) {
            case 'en':
                return <>Creators <br/> <hr/> <Typography className={styles.team} variant="h3" className={styles.team}>The team that worked on the project</Typography></>
            case 'ru':
                return <>Создатели <br/> <hr/> <Typography className={styles.team} variant="h3" className={styles.team}>Команда которая работала над проектом</Typography></>
            case 'bl':
                return <>Саздателi <br/> <hr/> <Typography className={styles.team} variant="h3" className={styles.team}>Каманда, якая працавала над праектам</Typography></>
            default:
                break;
        }
    }

    const getMembers = () => {

        return creatorsData.map(( item, num ) => {
            return <Member name={ item[language].name }
                        key={num}
                        language={language}
                        github={item.github}
                        links={ item.links }
                        info={ item[language].info}
                        image={ item.image }/>
        })
    }

    return(<div className={styles.creatorsPage}>

        <Typography className={styles.title} variant="h1" gutterBottom>
            {getTitle()}
        </Typography>

        <div className={styles.members}>
            {creatorsData ? getMembers() : <Backdrop  open={true} >
                                                <CircularProgress color="inherit" />
                                            </Backdrop>}
        </div>

    </div>)
}


