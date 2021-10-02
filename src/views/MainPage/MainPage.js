import { useContext } from "react";
import { ApiContext } from "../../components/Api/Api";
import LoginForm from "../../components/LoginForm/LoginForm";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import Posts from "../../components/Posts/Posts";

export default function MainPage() {
    const api = useContext(ApiContext);

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