import { useDispatch } from "react-redux";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import { addDreamteam } from "../store/dreamteam/dreamteam-actions";

const PlayerCard = (props) => {
    const dispatch = useDispatch();
    return (
        <Card colorTheme='border-emerald-700'>
            <div className="flex flex-col ss:flex-row justify-between">
                <div className="flex flex-col ss:flex-row ">
                    <div className="rounded-full w-24 h-24 overflow-hidden mb-3 ss:mr-4 ss:mb-0">
                        <img src={props.avatar} />
                    </div>
                    <div className="flex flex-col items-start justify-center text-lg">

                        <div className="flex flex-row items-center">
                            <span className="font-bold mr-1">{props.nickname}</span>
                            <div className="h-3 w-4 flex border border-black rounded-sm border-opacity-50">
                                <img src={`./flags/${props.country}.jpg`} className="rounded-sm" alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-base">{props.team}</span>
                        <span className="text-sm">{props.position}</span>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center">
                    <Badge>{new Intl.NumberFormat("en-ES", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(props.earning)}</Badge>
                    <Badge clickable={true} addOrRemove='Add' onClick={() => dispatch(addDreamteam(props))}> Pick</Badge>
                </div>
            </div>
        </Card>
    )
}

export default PlayerCard