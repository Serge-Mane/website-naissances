import { Declaration } from '@/types/Declaration'
import DeclarationsItem from './DeclarationsItem';
import { BiSort } from "react-icons/bi";


type Props = {
    declarations: Declaration[];
    sortByStatus: () => void;
    sortByDate: () => void;
}

function DeclarationsItems(props: Props) {
    const { declarations, sortByStatus, sortByDate } = props;
    return (
        <div>
            <article className="grid grid-cols-12 items-center font-extrabold">
                <button type="button" className={`p-2 flex justify-between items-center`} onClick={sortByDate} >
                    Date
                    <BiSort />
                </button>
                <span className={`p-2 col-span-2`}>Enfant</span>
                <span className={`p-2 `}>Date Naiss</span>
                <span className={`p-2 `}>Hopital</span>
                <span className={`p-2 col-span-2 text-center`}>Parent 1</span>
                <span className={`p-2 col-span-2`}>Parent 2</span>
                <button type='button' onClick={() => sortByStatus()} className={`p-2 text-center flex justify-between items-center`}>
                    Status
                    <BiSort />
                </button>
                <span className={`p-2 col-span-2 text-center`}>ACTIONS</span>
            </article>
            {declarations.map((item: Declaration, index: number) => (
                <DeclarationsItem declaration={item} index={index} key={item.id} />
            ))
            }
        </div>
    )
}

export default DeclarationsItems