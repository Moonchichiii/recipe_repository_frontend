import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import styles from "../ProfileCreation/ProfileCreation.module.css";

function ProfileCreation() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        bio: "",
        profileImage: null,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSkip = () => {
        navigate("/dashboard");
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData, profileImage: e.target.files[0],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const { bio, profileImage } = formData;

        const formDataToSend = new FormData();
        formDataToSend.append("bio", bio);
        if (profileImage) {
            formDataToSend.append("image", profileImage);
        }

        try {

            const response = await fetch(
                `${import.meta.env.VITE_PHOTO_URL}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Token ${localStorage.getItem("token")}`,
                    },
                    body: formDataToSend,
                }
            );

            const data = await response.json();

            if (response.ok) {
                navigate("/dashboard");
            } else {
                setError("Error updating profile: " + JSON.stringify(data));
            }
        } catch (error) {
            setError("Exception when updating profile: " + error.toString());
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.profileContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.profileCard}>
                    <div className={styles.profileImage}>
                        <img
                            src={user?.profileImage || import.meta.env.VITE_DEFAULT_PROFILE_IMAGE}
                            alt="Profile"
                        />

                    </div>
                    <div className={styles.profileBody}>
                        <h2>Your Profile</h2>
                        <p>
                            <strong>Username:</strong> {user?.username}
                        </p>
                        <p>
                            <strong>Email:</strong> {user?.email}
                        </p>

                        <label htmlFor="bio">Small Introduction:</label>
                        <input
                            type="text"
                            id="bio"
                            placeholder="Small Introduction `Bio` of your self ..."
                            value={formData.bio}
                            onChange={handleChange}
                            className={styles.profileInput}
                        />
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className={styles.profileInput}
                        />
                        <div className={styles.profileActions}>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={styles.saveBtn}
                            >
                                {isLoading ? "Loading..." : "Continue"}
                            </button>
                            <button
                                type="button"
                                disabled={isLoading}
                                onClick={handleSkip}
                                className={styles.skipBtn}
                            >
                                Skip
                            </button>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfileCreation;
