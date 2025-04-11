type Props = {
    imageurl: string;
};

function ProfileImage({ imageurl }: Props) {
    return (
        <>
            <div className="bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 w-[50px] h-[50px] flex items-center justify-center rounded-full aspect-square">
                <img
                    alt="user profile"
                    src={imageurl}
                    className="w-[40px] h-[40px] rounded-full"
                    referrerPolicy="no-referrer"
                />
            </div>
        </>
    );
}

export default ProfileImage;
