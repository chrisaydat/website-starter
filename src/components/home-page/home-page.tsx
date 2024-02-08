import classNames from 'classnames';
import styles from './home-page.module.scss';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>MyCarer 24/7</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    Welcome to MyCarer 24/7, your dedicated platform for seamless connections
                    between compassionate carers and valued clients across the UK. Whether
                    you&apos;re in need of reliable assistance or eager to provide exceptional care,
                    our app is here to simplify and enhance your caregiving experience
                </div>
            </div>
            <img
                src="https://nq41rkqqdukvssfs.public.blob.vercel-storage.com/careragain-OJ1F6EeBDM81Y9ehnLE5Ghsd1q6MPI.png"
                alt=""
                className={styles.image}
            />
        </div>
    );
};
