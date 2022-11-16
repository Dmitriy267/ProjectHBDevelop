import styles from './Button.module.scss';
import clsx from 'clsx';
const Button=({text=''})=>{
return (
<>
<button className={clsx(styles.add__button)}>{text}</button>

</>
)
}

export {Button}