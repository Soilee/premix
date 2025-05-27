import { auth } from "../firebase";

export function getUsername() {
    const firebaseUser = auth.currentUser;
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return (
        firebaseUser?.displayName ||
        storedUser?.username ||
        storedUser?.displayName ||
        "Kullanıcı"
    );
}