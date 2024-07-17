export function truncateEmail(email) {
    if (email.length > 20) {
        return email.substring(0, 20) + '...';
    }
    return email;
}