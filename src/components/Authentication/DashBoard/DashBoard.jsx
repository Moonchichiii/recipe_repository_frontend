import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


import styles from '/workspaces/recipe_repository_frontend/src/components/Authentication/DashBoard/DashBoard.module.css';


function Dashboard() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    return (
        <div className={styles.imageContainer}>
            <div className={styles.myGrid}>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://res.cloudinary.com/dgve5ifit/image/upload/v1701949785/images/recipe-repository/Default_pfp_tik935.webp" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                            <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>


                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://res.cloudinary.com/dgve5ifit/image/upload/v1701949785/images/recipe-repository/Default_pfp_tik935.webp" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://res.cloudinary.com/dgve5ifit/image/upload/v1701949785/images/recipe-repository/Default_pfp_tik935.webp" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg" alt="" />
                    </div>
                    <div className={styles.cardBody}>
                        <h2>Post Title</h2>
                        <p>Post content...</p>
                        <button>Read more</button>
                        <p>by - Author</p>
                        <div className="d-flex justify-content-end">
                        <FontAwesomeIcon className="me-3" icon={faThumbsUp}  />
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                    </div>                    
                </div>


            </div>
        </div>
    );
}

export default Dashboard;