import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Contact </div>
                <div className={styles.small}>
                    Mail: info@mycarer247.co.uk
                    <br />
                    Tel: +44 20885380127
                    <br />
                    The Vista Centre
                    <br /> 50 Salisbury Road
                </div>
            </div>
        </div>
    );
};
