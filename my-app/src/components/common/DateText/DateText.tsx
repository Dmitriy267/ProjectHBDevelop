import styles from './DateText.module.scss';

const DateText=({text=''})=>{
    return (
        <div className={styles.dateNews}>
            <p>{text}</p>
          </div>
    )
}
export {DateText}