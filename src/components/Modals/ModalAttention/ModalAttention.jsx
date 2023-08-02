import css from './ModalAttention.module.css';
import { useNavigate } from 'react-router-dom';
import sprite from 'assets/svg/sprite-cards.svg';

const ModalAttention = ({ modalOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          <button
            type="button"
            className={css.modalCrossBtn}
            onClick={() => modalOpen(false)}
          >
            <svg width="24" height="24">
              <use href={`${sprite}#icon-close`} />
            </svg>
          </button>
        </div>

        <div className={css.modalText}>
          <h2 className={css.modalTitle}>Attention</h2>
          <p className={css.modalInfo}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <div className={css.modalContainerBtn}>
            <button
              type="button"
              className={css.loginBtn}
              onClick={() => navigate('/login')}
            >
              Log IN
              <svg width="24" height="24">
                <use href={`${sprite}#icon-paw-login`}></use>
              </svg>
            </button>
            <button
              type="button"
              className={css.registerBtn}
              onClick={() => navigate('/register')}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAttention;
