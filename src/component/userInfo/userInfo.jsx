const UserInfo = ({ mail, imgSrc }) => {
    return (
        <>
            <p className="text-sm 2xl:text-lg overflow-hidden text-ellipsis">
                {mail}
            </p>
            <img width={34} height={34} src={imgSrc} className="rounded-full" />
        </>
    )
}
export default UserInfo