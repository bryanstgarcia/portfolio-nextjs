import styles from './style.module.css';

export default function ContactMethod({ contactMethod, rounded=false }) {
    const { Icon } = contactMethod.image
    return (
        <a className={`flex gap-1 group ${styles.contactMethod}`} href={contactMethod.source}>
            <div
                className={`hidden  md:w-19 md:h-19 bg-whitep-500 
                    text-sm text-blackp-500 text-center font-bold md:flex md:justify-center ${
                        rounded && 'rounded-full flex justify-center items-center'
                    } ${styles.contactDiv}`}
            >
                <h3>{contactMethod.name}</h3>
            </div>
            <div className={`w-19 h-19 ${styles.contactImage}`}>
                <Icon color='#FDFDFD' />
            </div>
        </a>
    );
}