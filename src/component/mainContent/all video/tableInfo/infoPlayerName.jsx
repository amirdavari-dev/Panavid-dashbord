import person from "./../../../../assets/person.webp"
const InfoPlayerName = () => {
    return (
        <div className="flex_item w-fit">
            <div className="overflow-hidden shadow-2xl ">
                <img className="rounded-full" width={26} height={26} src={person} />    
            </div>
            <p>React In 100 Seconds</p>
        </div>
    )
}
export default InfoPlayerName