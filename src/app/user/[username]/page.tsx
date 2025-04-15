type Props = { params: { username: string } };

function UserPage({ params: { username } }: Props) {
    return <>{username} UserPage</>;
}
export default UserPage;
