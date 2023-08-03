import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as FiltersIcon } from '../../assets/svg/filters.svg';
import { ReactComponent as ChevronUpIcon } from '../../assets/svg/chevron-up.svg';
import { ReactComponent as ChevronDownIcon } from '../../assets/svg/chevron-down.svg';



import styles from './notices-filters.module.scss';

const NoticesFilters = ({ onFilter, filters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ageOpen, setAgeOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);

    const handleBtnClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleAgeClick = () => {
        setAgeOpen(prevState => !prevState);
    };

    const handleGenderClick = () => {
        setGenderOpen(prevState => !prevState);
    };

    const handleCheckboxChange = e => {
        onFilter(e.target);
    };

    return (
        <div className={styles.wrapper}>
            <button className={styles.openBtn} type="button" onClick={handleBtnClick} aria-label="toggle filters">
                <span className={styles.openBtnLabel}>Filter</span>
                <FiltersIcon className={styles.openBtnIcon} width={24} height={24} />
            </button>
            {isOpen && (
                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdown}>
                        <p className={styles.text}>Filters</p>
                        <div className={styles.submenu}>
                            <button
                                className={styles.filterBtn}
                                type="button"
                                onClick={handleAgeClick}
                                aria-label="toggle age options"
                            >
                                {ageOpen ? (
                                    <ChevronUpIcon className={styles.icon} width={24} height={24} />
                                ) : (
                                    <ChevronDownIcon className={styles.icon} width={24} height={24} />
                                )}
                                <span className={styles.btnLabel}>By age</span>
                            </button>
                            {ageOpen && (
                                <form className={styles.form}>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="date"
                                            value="3-12m"
                                        />
                                        3-12m
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            className={styles.input}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            name="date"
                                            value="1y"
                                        />
                                        1 year
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            className={styles.input}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            name="date"
                                            value="2y"
                                        />
                                        2 year 
                                    </label>
                                </form>
                            )}
                        </div>
                        <div className={styles.submenu}>
                            <button
                                className={styles.filterBtn}
                                type="button"
                                onClick={handleGenderClick}
                                aria-label="toggle gender options"
                            >
                                {genderOpen ? (
                                    <ChevronUpIcon className={styles.icon} width={24} height={24} />
                                ) : (
                                    <ChevronDownIcon className={styles.icon} width={24} height={24} />
                                )}
                                <span className={styles.btnLabel}>By gender</span>
                            </button>
                            {genderOpen && (
                                <form className={styles.form}>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="sex"
                                            value="male"
                                        />
                                        male
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="sex"
                                            value="female"
                                        />
                                        female
                                    </label>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
                </div>

            );
};

NoticesFilters.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string),
};

export default NoticesFilters;
