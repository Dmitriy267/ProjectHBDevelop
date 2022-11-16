import styles from './Button.module.scss';
const Button=({text=''})=>{
return <button className={styles.add__button}>{text}</button>
}

export {Button}