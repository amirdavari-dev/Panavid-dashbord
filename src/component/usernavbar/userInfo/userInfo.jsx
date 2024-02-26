import person from "./../../../assets/person.webp"
const UserInfo = () => {
    return (
        <div className="bg-white flex justify-center items-center overflow-hidden sm:polygon-right radius-right col-span-6 xs:col-span-5 sm:col-span-3 md:col-span-3 xl:col-span-2 p-1">
            <div className="rounded-full overflow-hidden">
                <img src={person} width={40} height={40} />
            </div>
            <div className="flex flex-col items-start">
                <h6 className="text-lg lg:text-sm xl:text-lg font-semibold">Amir Davari</h6>
                <p className="opacity-55 text-sm xl:text-[15px]">Lorem Ipsom</p>
            </div>
        </div>
    )
}
export default UserInfo