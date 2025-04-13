type ImgaeSize = "small" | "medium" | "large";
type Props = {
    imageurl: string | null;
    imagesize: ImgaeSize;
};

function ProfileImage({ imageurl, imagesize = "large" }: Props) {
    return (
        <>
            <div className={Container(imagesize)}>
                <img
                    alt="user profile"
                    src={imageurl ?? undefined}
                    className="w-[40px] h-[40px] rounded-full"
                    referrerPolicy="no-referrer"
                />
            </div>
        </>
    );
}
function Container(imgsize: string) {
    const baseClass =
        " w-[50px] h-[50px] flex items-center justify-center rounded-full aspect-square";
    if (imgsize === "large") {
        return `${baseClass} bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300`;
    } else if (imgsize === "small") {
        return `${baseClass}`;
    }
    return baseClass;
}

export default ProfileImage;
