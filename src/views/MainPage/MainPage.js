import LoginForm from "../../components/LoginForm/LoginForm";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import Posts from "../../components/Posts/Posts";

export default function MainPage({ api }) {
    return (
        <div>
            Hello!
            {api.isLoggedIn ? (
                <>
                    <LogoutButton logout={api.logout} />
                    <Posts listPosts={api.listPosts} />
                </>
            ) : (
                <LoginForm login={api.login} />
            )}
        </div>
    )
};